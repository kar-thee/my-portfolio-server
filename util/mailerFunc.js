const nodemailer = require("nodemailer");

const mailerFunc = async (mailContent) => {
  try {
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_MAIL_ID,
        pass: process.env.SENDER_MAIL_PWD,
      },
    });
    const mailOptions = {
      from: process.env.SENDER_MAIL_ID,
      to: "ourworldourpeople@gmail.com,fsdkartheek@gmail.com",
      subject: "Message from Portfolio Site",
      text: mailContent,
    };

    const response = await transporter.sendMail(mailOptions);
    return response;
  } catch (e) {
    console.log(e.message, " xerr-mailFunc");
  }
};
module.exports = mailerFunc;
