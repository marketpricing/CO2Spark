const mongoose = require("mongoose");


const userDetailSchema = new mongoose.Schema(
  {
    pekerjaan: {
      type: String,
      trim: true,
      lowercase: true,
    },
    alamat: {
      type: String,
      trim: true,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'pengguna',
    },
    
  },

  {
    timestamps: true,
  }
);



module.exports = mongoose.model("detail_user", userDetailSchema);
