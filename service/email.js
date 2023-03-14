const nodemailer = require("nodemailer");

const config = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "serhij86@meta.ua",
        pass: process.env.EMAIL_PASSWORD,
    },
};

const sendMail = async (email, verificationToken) => {
    const transporter = nodemailer.createTransport(config);

    const emailOptions = {
        from: "serhij86@meta.ua",
        to: email,
        subject: "Password verification",
        html: `<p>Hello. To verify Your email:<a href="http://localhost:${process.env.PORT}/api/users/verify/${verificationToken}" target="_blank">
                     click here</a></p>`,
    };

    try {
        await transporter.sendMail(emailOptions);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { sendMail };
