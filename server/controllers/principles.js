import mongoose from "mongoose";
import Principle from "../models/principles.js";
import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import url from "url";

export const getPrinciple = async (req, res) => {
  try {
    const Principles = await Principle.find();
    res.status(200).json(Principles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createdPrinciple = async (req, res) => {
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
    const uploadSingle = upload("grafart-principles-images").single(
      "principleImage"
    );
    uploadSingle(req, res, async (err) => {
      if (err)
        return res
          .status(400)
          .json({ message: "resim ekleme başarısız! Tekrar Deneyiniz!" });
        if (req.file === undefined) {
          return res
            .status(404)
            .json({ message: "Lütfen Resim Ekleyiniz!" });
        }
        else{
          const newPrinciple = new Principle({
            title: req.body.title,
            desc:req.body.desc,
            selectedFile: req.file.location,
          });
          await newPrinciple.save();
          res.status(201).json(newPrinciple);
        }
    });
  } catch (error) {
    res.status(409).json({
      message: "Ekleme işlemi Başarısız Sayfayı Yenileyip Tekrar Deneyiniz!",
    });
  }
};

export const updatePrinciple = async (req, res) => {
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
    const updateSingle = update("grafart-principles-images").single(
      "principleImage"
    );
    updateSingle(req, res, async (err) => {
      if (err)
        return res
          .status(400)
          .json({ message: "Resim Ekleme İşleminde Hata Oluştu!" });
      let imageURL;
      if (req.file) {
        imageURL = req.file.location
          ? req.file.location
          : "https://grafart-blog-images.s3.eu-central-1.amazonaws.com/image-1663242216175.jpeg";
      }
      const { id: _id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("ID'ye sahip İlkelerimiz yok!");

      const updatePrinciple = await Principle.findByIdAndUpdate(
        _id,
        {
          title: req.body.title,
          desc:req.body.desc,
          selectedFile: imageURL,
          _id,
        },
        { new: true }
      );
      res.status(200).json(updatePrinciple);
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hata Oluştu sayfayı Yenileyip Tekrar Deneyiniz!" });
  }
};

export const deletePrinciple = async (req, res) => {
  const { id } = req.params;

  const imageId = await Principle.find(
    { _id: mongoose.Types.ObjectId(id) },
    { selectedFile: 1, _id: 0 }
  );
  const imageURL = imageId[0].selectedFile;
  const imagePathName = url.parse(imageURL).pathname.slice(1);

  const s3 = new aws.S3({
    apiVersion: "2006-03-01",
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: process.env.S3_BUCKET_REGION,
  });
  s3.deleteObjects(
    {
      Bucket: "grafart-principles-images",
      Delete: {
        Objects: [{ Key: imagePathName }],
        Quiet: false,
      },
    },
    function (err, data) {
      if (err) console.log("err ==>", err);
      console.log("Resim Silme Başarılı", data);
    }
  );
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "ID'ye sahip Hizmet yok!" });

  await Principle.findByIdAndRemove(id);
  res.json({ message: "Hizmet Silindi!" });
};
