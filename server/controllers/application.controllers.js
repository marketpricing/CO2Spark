const PredictHistoryModel = require("../models/predict_history.models copy");

const _ = require("lodash");

const axios = require("axios");

const { errorHandler } = require("../helpers/dbErrorHandling.js");
exports.createPredictHistory = async (req, res) => {
  let { engine_size, cylinders, fuel_consumption, transmission, user_id } = req.body;
  engine_size = 3.7;
  cylinders = 6;
  fuel_consumption =  25;
  transmission = 1;
  user_id= "6476b2284053c73bfe2d93ac";
  data = [
    {
      "Engine Size(L)": engine_size,
      Cylinders: cylinders,
      Transmission: transmission,
      "Fuel Consumption Comb (mpg)": fuel_consumption,
    },
  ];
  const payload = { data };

 await axios
    .post("https://ai-backend-c02-spark.azurewebsites.net/predict", payload)
    .then((response) => {
      // Handle successful response
      console.log("Success:", response.data);
      predictive_result = response.data.prediction[0];
      console.log(predictive_result);

    })
    .catch((error) => {
      // Handle error
      console.error("Error:", error);
      res.status(500).send("Error");
    });

  //   "terdapat logika pengolahan backend server"
  predictHistory = new PredictHistoryModel({
    predictive_result,
    engine_size,
    cylinders,
    transmission,
    fuel_consumption,
    user_id,
  });

  predictHistory.save((err) => {
    if (err) {
      console.log("Save error", errorHandler(err));
      return res.status(401).json({
        errors: errorHandler(err),
      });
    } else {
      return res.json({
        success: true,
        message: predictHistory,
        message: "Prediksi terekam dan tersimpan di database",
      });
    }
  });
};


exports.readdAllHistory = async (req, res) => {
  try {


    // Create a new transaction using the transactionModel
    user_id= "6476b2284053c73bfe2d93ac";
    const history = await PredictHistoryModel.find({
      user_id: user_id,
    });

    return res.json(history);
  } catch (err) {
    console.log("Get Data Error", errorHandler(err));
    return res.status(401).json({
      errors: errorHandler(err),
    });
  }
};
