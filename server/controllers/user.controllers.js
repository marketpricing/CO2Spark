const UserDetail = require("../models/detail_user.models");

const _ = require("lodash");

const { errorHandler } = require("../helpers/dbErrorHandling.js");
exports.detailUserController = (req, res) => {
  const { pekerjaan, alamat, user_id } = req.body;

  UserDetail.findOne({
    user_id,
  }).exec((err, userDetail) => {
    if (userDetail) {
      userDetail.pekerjaan = pekerjaan;
      userDetail.alamat = alamat;
    } else {
      userDetail = new UserDetail({
        pekerjaan,
        alamat,
        user_id,
      });
    }
    userDetail.save((err, user) => {
      if (err) {
        console.log("Save error", errorHandler(err));
        return res.status(401).json({
          errors: errorHandler(err),
        });
      } else {
        return res.json({
          success: true,
          message: userDetail,
          message: "Aktivasi sukses silakan kembali ke halaman login",
        });
      }
    });
  });
};

exports.readController = (req, res) => {
  const user_id = req.params.id;
  console.log(user_id);
  UserDetail.findOne({
    user_id,
  }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User tidak ditemukan",
      });
    }
    res.json(user);
  });
};
