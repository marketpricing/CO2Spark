const mongoose = require("mongoose");


const userDetailSchema = new mongoose.Schema(
  {
    predictive_result: {
      type: Number,
      trim: true,
      lowercase: true,
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
