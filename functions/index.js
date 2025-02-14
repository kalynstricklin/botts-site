/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });


initializeApp();

//nodemailer transporter using Mailtrap SMPT
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    auth: {
        user: "apismtp@mailtrap.io",
        pass: "password"
    },
    secure: false,
    requireTLS: true
});
const sender = {
    address: "hello@demomailtrap.com",
    name:"Botts HR Team",
};
const recipients = ["kalynstricklin@botts-inc.com",];



//creating firebase cloud function to send emails
exports.sendEmail = onRequest((req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    cors(req, res, () => {
        const mailOptions = {
            from: sender,
            to: recipients,
            subject: "New Job Application Submitted",
            html: `
                <h3>New Job Application</h3>
                <p><strong>Name:</strong> ${req.body.legalName}</p>
                <p><strong>Preferred Name:</strong> ${req.body.preferredName}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
                <p><strong>Phone Number:</strong> ${req.body.phoneNumber}</p>
                <p><strong>Current Role:</strong> ${req.body.role}</p>
                <p><strong>Years of Experience:</strong> ${req.body.yrsExperience}</p>
                <p><strong>Skills:</strong> ${req.body.skills}</p>
                <p><strong>Portfolio:</strong> <a href="${req.body.portfolioUrl}" target="_blank">${req.body.portfolioUrl}</a></p>
                <p><strong>LinkedIn:</strong> <a href="${req.body.linkedInProfile}" target="_blank">${req.body.linkedInProfile}</a></p>
            `
        };

        transport.sendMail(mailOptions)
            .then(() => {
                return res.status(200).json({ success: true, message: "Email sent successfully!" });
            })
            .catch((error) => {
                console.error("Email Error:", error);
                return res.status(500).json({ error: "Failed to send email", details: error.message });
            });
    });
});