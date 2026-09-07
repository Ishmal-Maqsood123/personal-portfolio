const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post("/api/contact", async (req, res) => {

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                message: "Please fill all fields."
            });
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Portfolio Message from ${name}`,

            text: `
You received a new message from your portfolio website.

Name: ${name}
Email: ${email}

Message:
${message}
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            message: "Message sent successfully!"
        });

    } catch (error) {

        console.error("Email Error:", error);

        res.status(500).json({
            message: "Failed to send message."
        });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});