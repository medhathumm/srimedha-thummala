import "./Contact.css";
import { useState } from 'react';
import linkedin_profile from "../Media/linkedin-logo.png";
import github_profile from "../Media/github-logo.png";

const Contact = () => {

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    return (
        <section id="contact" className="contact">
            <h1>Contact Me</h1>
            <div className="contact-email">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Your Email" required />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" name="message" placeholder="Message you would like to send me" required />
            </div>
            <button>Send</button>
            <div className="contact-profiles">
                <img src={linkedin_profile} alt=""/>
                <img src={github_profile} alt=""/>
            </div>
        </section>
    )
}

export default Contact;