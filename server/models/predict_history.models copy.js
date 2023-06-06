const mongoose = require("mongoose");


const predictSchema = new mongoose.Schema(
  {
    predictive_result: {
      type: Number,
      trim: true,
      lowercase: true,
    },
    engine_size: {
      type: Number,
      trim: true,
      lowercase: true,
    },
    cylinders: {
      type: Number,
      trim: true,
      lowercase: true,
    },
    transmission: {
      type: Number,
      trim: true,
      lowercase: true,
    },
    fuel_consumption: {
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



module.exports = mongoose.model("predict_model", predictSchema);
