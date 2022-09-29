import mongoose from "mongoose";
import Statistic from "../models/statistic.js";

export const getStatistic = async (req, res) => {
    try {
      const Statistics = await Statistic.find();
      res.status(200).json(Statistics);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
};

export const updateStatistic = async (req, res) => {
    try {
        const { id: _id } = req.params;
  
        if (!mongoose.Types.ObjectId.isValid(_id))
          return res.status(404).send("ID'ye sahip İstatistic yok!");
  
        const updateStatistic = await Statistic.findByIdAndUpdate(
          _id,
          {
            project: req.body.project,
            product:req.body.product,
            service:req.body.service,
            help:req.body.help,
            team:req.body.team,
            _id,
          },
          { new: true }
        );
        res.status(200).json(updateStatistic);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Hata Oluştu sayfayı Yenileyip Tekrar Deneyiniz!" });
    }
  };
