import nodemailer from "nodemailer";

const inquiryEmail = async (subject, message, send_to, sent_from, reply_to) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: "465",
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    const options = {
        from: sent_from,
        to: send_to,
        replyTo: reply_to,
        subject: subject,
        html: message
    }

    transporter.sendMail(options, function(err, info) {
        if (err) {
            console.log("Error: ", err);
        } else {
            console.log(info);
        }
    }) 
};

const sendInquiryEmail = async (req, res) => {

    const { name, email, description } = req.body;

    if (!name || !email || !description) {
        return res.json({ success: false, message: "All fields are required." });
    }

    try {
        const send_to = process.env.EMAIL_USER;
        const sent_from = process.env.EMAIL_USER;
        const reply_to = email;
        const subject = "New Inquiry - Personal Website";
        const message = `
            <h3>New Inquiry</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Description: </p>
            <p>${description}</p>
        `
        await inquiryEmail(subject, message, send_to, sent_from, reply_to);
        res.json({success: true, message: "Email Sent"});
    } catch (error) {
        res.json({success: false, message: error});
    }
}

export { sendInquiryEmail };