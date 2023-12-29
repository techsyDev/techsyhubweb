const nodemailer = require("nodemailer");
const CatchAsyncErrors = require("./CatchAsyncErrors");

const sendEmail = CatchAsyncErrors(async (data) => {
  const { subject, message, email } = data;

  const transporter = nodemailer.createTransport({
    service: "zoho",
    host: "smtpro.zoho.in",
    port: 465,
    secure: true,
    auth: {
      user: "moeezahmed@zohomail.com",
      pass: "MOEEZ1609",
    },
  });

  const mailOptions = {
    from: "moeezahmed@zohomail.com",
    to: email,
    subject,
    html: `<p>${message}</p>`,
  };

  await transporter
    .sendMail(mailOptions)
    .then((res) => console.log("Email send!", res))
    .catch((err) => console.log("Email error!", err));
});

module.exports = sendEmail;
