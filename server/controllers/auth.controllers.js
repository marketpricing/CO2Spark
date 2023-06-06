const User = require('../models/auth.models');
const { expressjwt: expressJwt } = require('express-jwt');
const _ = require ('lodash');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');







//Custom Error Handler
const {errorHandler} = require('../helpers/dbErrorHandling.js')

exports.registerController = (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      errors: firstError,
    });
  } else {
    User.findOne({
      //noosql code
      email,
    }).exec((err, user) => {
      if (user) {
        return res.status(400).json({
          errors: "Email sudah terdaftar",
        });
      } else {
        const user = new User({
          name,
          email,
          password,
        }); //noSql code again
        //PROSES assign dataUser baru ke database

        //const userdata= new Userdata({_id = user_id})
        //Handler
        user.save((err, user) => {
          if (err) {
            console.log("Save error", errorHandler(err));
            return res.status(401).json({
              errors: errorHandler(err),
            });
          } else {
            return res.json({
              success: true,
              message: user,
              message: "Registrasi sukses silakan kembali ke halaman login",
            });
          }
        });

      }
    });
  }
};


 
exports.signinController = (req, res) => {
  const { email, password } = req.body;
  console.log(email)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else {
    // check if user exist
    User.findOne({
      email
    }).exec((err, user) => {
      if (err || !user) {
        console.log("ERROR1")
        return res.status(400).json({
          errors: 'Email tersebut tidak ditemukan. Silakan registrasi.'
        });
      }
      // authenticate
      if (!user.authenticate(password)) {
        console.log("ERROR2")

        return res.status(400).json({
          errors: 'Password tidak sesuai'
        });
      }
      // generate a token and send to client
      const token = jwt.sign(
        {
          _id: user._id
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '7d'
        }
      );
      const { _id, name, email } = user;
        return res.json({  
          token,
          user: {
            _id,
            name,
            email,
           

            
          },
        });

    });
  }
};