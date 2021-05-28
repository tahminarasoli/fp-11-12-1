const sendMail = require("./sendMail.js");

const sendController = {
    sendMethod: async (req, res) => {
        // console.log(req.body)
        try {
            const {
                receiverEmail,
                senderEmail,
                messageTitle,
                messageContent
            } = req.body;
            // console.log(receiverEmail, messageContent, messageTitle, senderEmail)
            sendMail("contact", receiverEmail, messageContent, messageTitle, senderEmail )

            res.json({
                msg: "Message Success Send! ",
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    sendMethodForContact: async (req, res) => {
        // console.log(req.body)
        try {
            const {
                receiverEmail,
                senderEmail,
                messageTitle,
                messageContent
            } = req.body;
            // console.log(receiverEmail, messageContent, messageTitle, senderEmail)
            sendMail("contactToAdmin", receiverEmail, messageContent, messageTitle, senderEmail )

            res.json({
                msg: "Message Success Send! ",
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
    
};

module.exports = sendController;