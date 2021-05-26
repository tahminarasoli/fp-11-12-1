const sendMail = require("./sendMail.js");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const sendController = {
    sendMethod: async (req, res) => {
        try {
            const {
                receiverEmail,
                senderEmail,
                messageTitle,
                messageContent
            } = req.body;
            console.log(receiverEmail, messageContent, messageTitle, senderEmail)
            sendMail("contact", receiverEmail, messageContent, messageTitle, senderEmail )

            res.json({
                msg: "Message Success Send! ",
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
    
};

module.exports = sendController;