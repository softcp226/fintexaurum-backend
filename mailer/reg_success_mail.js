const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.cryptocom-mining.com",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 587,
//     auth: {
//       user: "support@cryptocom-mining.com",
//       pass: "bishop1@1",
//     },
//   }),
// );


let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: "fintexaurum@gmail.com",
    // pass: "desolidboy1",
    pass: "nxnrbkgdbclgkawv",
    // secure:false,
  },
});


let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: "support@fintexaurum.com",
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `Account Registration Notification`,
    //   text:"just wanna know if this works",
    html: `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>


  <div class="head-txt">
    <h1 style="text-align: center; font-size: 16px; color:#0c0e28;">
     FINTEX AURUM
    </h1>
    <h3 style="font-size: 15px">NEW ACCOUNT NOTIFICATION</h3>
  </div>

  <p class="sm-p">
    Dear ${userInfo.first_name} ${userInfo.last_name}, Thank you so much for
    allowing us to help you with your account opening. We are committed to
    providing our customers with the highest level of service and the most
    innovative investment, trading and crypto mining that are possible. We are very glad you
    chose us. We hope you will take advantage of our wide variety of investment
    and trading which are designed to meet your needs
  </p>
  <p class="sm-p">
    You are ready to deposit into your account and  start minig/trading .
  </p>
  <p class="sm-p">
    For more detailed informations, please contact our customer support or your
    relationship officer
  </p>

  <p class="sm-p">
    incase you have any questions do not hesitate to contact us and we will
    reach out to you as soon as possible
  </p>
  <br />
  <h1
    style="
      font-size: 18px;
      text-align: center;
      background: #eee;
      color: #26b6d4;
    "
  >
    FINTEX AURUM
  </h1>
  <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
    Disclaimer: this message was automatically generated via fintex aurum
    secured channel,please do not reply to this message all correspondence
    should be addressed to fintexaurum.com or your relationship officer
  </p>
</div>

 `,
  });
};
module.exports = { create_mail_options, transporter };
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };
