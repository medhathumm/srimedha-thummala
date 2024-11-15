import "./Contact.css";
import { useState } from 'react';
import axios from "axios";
import linkedin_profile from "../Media/linkedin-logo.png";
import github_profile from "../Media/github-logo.png";

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

        console.log([...formData.entries()]);

        const response = await axios.post("http://localhost:3000/api/sendemail/inquiryEmail", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
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
            <div className="contact-profiles">
                <a href="https://www.linkedin.com/in/srimedha-thummala/" target="_blank" rel="noreferrer"><img src={linkedin_profile} alt=""/></a>
                <a href="https://github.com/medhathumm" target="_blank" rel="noreferrer"><img src={github_profile} alt=""/></a>
            </div>
        </section>
    )
}

export default Contact;
