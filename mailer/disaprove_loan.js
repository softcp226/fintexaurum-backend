const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: "softjovial01@gmail.com",
    // pass: "desolidboy1",
    pass: "zvswwdyprpsbaqwm",
    // secure:false,
  },
});

let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: "support@softjovial.com",
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `loan request disaproval notification`,
    //   text:"just wanna know if this works",
    html: `
   <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>
<main    style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    background-size: cover;
  "
>
 

    <div class="head-txt">
<div class="head-txt">
      <h1 style="text-align: center; font-size: 16px; color: #825ee4">
       CRYPTOCOM-MINING.COM
      </h1>
      <h3 style="font-size: 15px;">LOAN REQUEST DISAPPROVAL NOTIFICATION</h3>
    </div>

    <p class="sm-p">
      Dear ${userInfo.first_name} ${userInfo.last_name}, we regret to announce to you that your request to get a loan of${userInfo.loan_amount}
      was disaproved. we are sorry for the inconvinience
    </p>
    <p class="sm-p">
    one of the most common reason for loan disaproval are due to limitations on your account
    </p>

    <p class="sm-p">
      incase you have any questions do not hesitate to contact us and we will
      reach out to you as soon as possible
    </p>
    <h1
      style="
        font-size: 18px;
        text-align: center;
        background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%);
        color: #fff;
      "
    >
      CRYPTOCOM-MINING.COM
    </h1>
    <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
      Disclaimer: this message was automatically generated via cryptocom-mining.com
      secured channel,please do not reply to this message all correspondence
      should be addressed to cryptocom-mining.com or your relationship officer
    </p>
  </div>
</main>
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