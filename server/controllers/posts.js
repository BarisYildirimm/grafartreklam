import mongoose from "mongoose";
import Post from "../models/post.js";
import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import url from "url";

export const getPost = async (req, res) => {
  const { id } = req.params;
  
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getPosts = async (req, res) => {
  try {
    const Posts = await Post.find().sort({ createdAt: -1 });
    console.log(Posts);
    res.status(200).json(Posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deletePost = async (req, res) => {
  const { id } = req.params;

  const imageId = await Post.find(
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
      Bucket: "grafart-blog-images",
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
    return res.status(404).json({ message: "ID'ye sahip Haber yok!" });

  await Post.findByIdAndRemove(id);
  res.json({ message: "Haber Silindi!" });
};
export const createdPost = async (req, res) => {
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
    const uploadSingle = upload("grafart-blog-images").single("blogImage");
    uploadSingle(req, res, async (err) => {
      if (err)
        return res
          .status(404)
          .json({ message: "resim ekleme başarısız! Tekrar Deneyiniz!" });
      if (req.file === undefined) {
        return res.status(404).json({ message: "Lütfen Resim Ekleyiniz!" });
      } else {
        const newPost = new Post({
          title: req.body.title,
          desc: req.body.desc,
          selectedFile: req.file.location,
          videoFile: req.body.videoFile,
          name: req.body.name,
          creatorImage: req.body.creatorImage,
        });
        await newPost.save();
        res.status(201).json(newPost);
      }
    });
  } catch (error) {
    res.status(409).json({
      message: "Ekleme işlemi Başarısız Sayfayı Yenileyip Tekrar Deneyiniz!",
    });
  }
};
export const updatePost = async (req, res) => {
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
    const updateSingle = update("grafart-blog-images").single("blogImage");
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
        return res.status(404).json({ message: "ID'ye sahip Haber yok!" });

      const updatePost = await Post.findByIdAndUpdate(
        _id,
        {
          title: req.body.title,
          desc: req.body.desc,
          selectedFile: imageURL,
          videoFile: req.body.videoFile,
          name: req.body.name,
          creatorImage: req.body.creatorImage,
          _id,
        },
        { new: true }
      );
      res.status(200).json(updatePost);
    });
  } catch (error) {
    res.status(409).json({
      message: "Güncelleme işlemi Başarısız Sayfayı Yenileyip Tekrar Deneyiniz!",
    });
  }
};
