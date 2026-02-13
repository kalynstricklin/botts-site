const functions = require("firebase-functions");
const { initializeApp } = require("firebase-admin/app");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

initializeApp();

const mailUser = process.env.MAILTRAP_USER;
const mailPass = process.env.MAILTRAP_PASS;

// Nodemailer transporter setup
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    auth: {
        user: mailUser,
        pass: mailPass
    },
    secure: false,
    requireTLS: true
});

const sender = {
    address: "hello@demomailtrap.com",
    name: "GeoRobotix HR Team",
};

const recipients = ["kalynstricklin@botts-inc.com"];

exports.sendEmail = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        // Handle preflight OPTIONS request properly
        if (req.method === "OPTIONS") {
            res.set("Access-Control-Allow-Origin", "*");
            res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
            return res.status(204).send(""); // No content response for preflight
        }

        res.set("Access-Control-Allow-Origin", "*");
        res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

        try {
            const escapeHtml = (str) => {
                if (!str) return '';
                return String(str)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;');
            };

            const mailOptions = {
                from: sender,
                to: recipients,
                subject: `New Job Application - ${escapeHtml(req.body.position)}`,
                html: `
                    <h3>New Job Application for ${escapeHtml(req.body.position)}</h3>
                    <p><strong>Name:</strong> ${escapeHtml(req.body.legalName)}</p>
                    <p><strong>Preferred Name:</strong> ${escapeHtml(req.body.preferredName)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(req.body.email)}</p>
                    <p><strong>Phone Number:</strong> ${escapeHtml(req.body.phoneNumber)}</p>
                    <p><strong>Current Role:</strong> ${escapeHtml(req.body.role)}</p>
                    <p><strong>Years of Experience:</strong> ${escapeHtml(req.body.yrsExperience)}</p>
                    <p><strong>Skills:</strong> ${escapeHtml(req.body.skills)}</p>
                    <p><strong>Portfolio:</strong> <a href="${escapeHtml(req.body.portfolioUrl)}" target="_blank">${escapeHtml(req.body.portfolioUrl)}</a></p>
                    <p><strong>LinkedIn:</strong> <a href="${escapeHtml(req.body.linkedInProfile)}" target="_blank">${escapeHtml(req.body.linkedInProfile)}</a></p>
                    <p><strong>Additional Information:</strong> ${escapeHtml(req.body.message)}</p>
                `,
                attachments: []
            };

            if (req.body.resume && req.body.resume.content) {
                mailOptions.attachments.push({
                    filename: req.body.resume.filename,
                    content: req.body.resume.content,
                    encoding: 'base64',
                    contentType: req.body.resume.contentType
                });
            }

            await transport.sendMail(mailOptions);
            res.status(200).json({ success: true, message: "Email sent successfully" });

        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ message: "Internal Server Error", error });
        }
    });
});
