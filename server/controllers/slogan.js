import mongoose from "mongoose";
import Slogan from "../models/slogan.js";
import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";


export const getSlogan = async (req,res)=>{
  try {
    const Slogans = await Slogan.find();
    res.status(200).json(Slogans);
    } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const createdSlogan= async (req, res) => {
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
    const uploadSingle = upload("grafart-slogan-images").single(
      "sloganImage"
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
          const newSlogan = new Slogan({
            title: req.body.title,
            selectedFile: req.file.location,
          });
          await newSlogan.save();
          res.status(201).json(newSlogan);
        }
    });
  } catch (error) {
    res.status(409).json({
      message: "Ekleme işlemi Başarısız Sayfayı Yenileyip Tekrar Deneyiniz!",
    });
  }
};