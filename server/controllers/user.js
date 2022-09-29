import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import url from "url";
import User from "../models/user.js";


export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getUsersDetails = async (req, res) => {
  try {
    const usersDetails = await User.find({},{
      _id: 1,
      name: 1,
      desc: 1,
      ig: 1,
      selectedFile: 1,
    });
    res.status(200).json(usersDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateUser = async (req, res) => {
  const s3 = new aws.S3({
    apiVersion: "2006-03-01",
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: process.env.S3_BUCKET_REGION,
  });

  const update = (bucketName) =>
    multer({
      storage: multerS3({
        s3,
        bucket: bucketName,
        metadata: function (req, file, cb) {
          cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
          cb(null, `image-${Date.now()}.jpeg`);
        },
      }),
    });
  try {
    const updateSingle = update("grafart-author-image").single("authorImage");
    updateSingle(req, res, async (err) => {
      if (err)
        return res.status(400).json({ success: false, message: err.message });
      let imageURL;
      if (req.file) {
        imageURL = req.file.location
          ? req.file.location
          : "https://grafart-blog-images.s3.eu-central-1.amazonaws.com/image-1663242216175.jpeg";
      }
      const { id: _id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("ID'ye sahip Kullanıcı yok!");

      const userPassword = await User.find(
        { _id: mongoose.Types.ObjectId(_id) },
        { password: 1, _id: 0 }
      );

      let newPassword;
      if (req.body.newPassword === "") {
        newPassword = userPassword[0].password;
      } else {
        newPassword = await bcrypt.hash(req.body.newPassword, 12);
      }

      const updateUser = await User.findByIdAndUpdate(
        _id,
        {
          name: req.body.name,
          desc: req.body.desc,
          ig: req.body.ig,
          email: req.body.email,
          selectedFile: imageURL,
          password: newPassword,
          _id,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hata Oluştu sayfayı Yenileyip Tekrar Deneyiniz!" });
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const imageId = await User.find(
    { _id: mongoose.Types.ObjectId(id) },
    { selectedFile: 1, _id: 0 }
  );
  console.log("RESİM IDDDDD");
  const imageURL = imageId[0].selectedFile;
  const imagePathName = url.parse(imageURL).pathname.slice(1);
  console.log(imageURL);
  console.log(imagePathName);

  const s3 = new aws.S3({
    apiVersion: "2006-03-01",
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: process.env.S3_BUCKET_REGION,
  });
  s3.deleteObjects(
    {
      Bucket: "grafart-author-image",
      Delete: {
        Objects: [{ Key: imagePathName }],
        Quiet: false,
      },
    },
    function (err, data) {
      if (err) console.log("err ==>", err);
      console.log("delete successfully", data);
    }
  );

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("ID YOK");

  await User.findByIdAndRemove(id);
  res.json({ message: "Kullanıcı Silindi!" });
};
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res
        .status(404)
        .json({ message: "Kullanıcı Bilgileri Yanlış Lütfen Kontrol Edin." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Şifrenizi Doğru Giriniz." });
    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hata Oluştu sayfayı Yenileyip Tekrar Deneyiniz!" });
  }
};
export const signup = async (req, res) => {
  const s3 = new aws.S3({
    apiVersion: "2006-03-01",
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: process.env.S3_BUCKET_REGION,
  });

  const upload = (bucketName) =>
    multer({
      storage: multerS3({
        s3,
        bucket: bucketName,
        metadata: function (req, file, cb) {
          cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
          cb(null, `image-${Date.now()}.jpeg`);
        },
      }),
    });

  try {
    const uploadSingle = upload("grafart-author-image").single("authorImage");
    uploadSingle(req, res, async (err) => {
      if (err)
        return res.status(400).json({ success: false, message: err.message });
      if (req.file === undefined) {
        return res.status(404).json({ message: "Lütfen Resim Ekleyiniz!" });
      } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        console.log(req.files);
        const newUser = new User({
          email: req.body.email,
          desc: req.body.desc,
          ig: req.body.ig,
          password: hashedPassword,
          selectedFile: req.file.location,
          name: req.body.name,
        });
        await newUser.save();
        res.status(201).json(newUser);
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hata Oluştu sayfayı Yenileyip Tekrar Deneyiniz!" });
  }
};
