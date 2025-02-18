import "./Contact.css";
import { useState } from 'react';
import axios from "axios";

const Contact = () => {

    const [email, setEmail] = useState("");

    const [name, setName] = useState("");

    const [message, setMessage] = useState("");

    const Submit_Inquiry = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();

        // Append other product details (not files)
        formData.append('name', name);
        formData.append('email', email);
        formData.append('description', message);

        // console.log([...formData.entries()]);

        const response = await axios.post("https://backend-sigma-fawn-36.vercel.app/api/sendemail/inquiryEmail", formData
        //     , 
        //     {
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // }
        );
        if (response.data.success) {
            setName("")
            setMessage("");
            setEmail("");

            console.log(response.data.message);
        } else {
            console.log(response.data.message);
        }
    }

    return (
        <section id="contact" className="contact">
            <h1>Contact Me</h1>
            <form className="contact-email" onSubmit={Submit_Inquiry}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" required />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" name="message" placeholder="Message you would like to send me" required />
                <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default Contact;
