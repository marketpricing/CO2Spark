const User = require('../models/auth.models');
const { expressjwt: expressJwt } = require('express-jwt');
const _ = require ('lodash');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');
const jwt_decode= require('jwt-decode');






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
        const Email = email;
        const token = jwt.sign(
          {
            name,
            email,
            password,
          },
          process.env.JWT_ACCOUNT_ACTIVATION,
          {
            expiresIn: "30m",
          }
        );

        const message = `
   <p>Hai, ${name} </p>

         <p> Anda telah melakukan registrasi untuk akun CO2 Spark App.</p>
         <p> Klik tombol di bawah untuk mengaktifkan akun anda: </p>
         <tr>
         <td>
             <table cellspacing="0" cellpadding="0">
                 <tr>
                     <td style="border-radius: 2px;" bgcolor="#9e00f6">
                         <a href="${process.env.CLIENT_URL}/users/activate/${token}" target="_blank" style="padding: 8px 12px; border: 1px solid #9e00f6;border-radius: 2px;font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: #ffffff;text-decoration: none;font-weight:bold;display: inline-block;">
                             Aktivasi Akun       
                         </a>
                     </td>
                 </tr>
             </table>
         </td>
     </tr>
   </table>
        `;

        try {
          sendEmail(
            {
              to: Email,
              subject: "Aktivasi Akun C02 Spark App ",
              text: message,
            },
            (hasil) => {
              if (hasil == true) {
                res.status(200).json({
                  success: true,
                  message: ` Email aktivasi telah dikirimkan ke alamat email ${Email}.
           Token anda adalah ${token}  Pesan dapat berada di folder spam`,
                }); //Perlu diingat link hanya bisa bertahan 15 menti
              } else {
                res
                  .status(500)
                  .json({ success: false, message: `Email gagal dikirimkan` });
              }
            }
          );
        } catch (error) {
          return res.status(400).json({
            success: false,
            errors: errorHandler(err),
          });
        }
      }
    });
  }
};


