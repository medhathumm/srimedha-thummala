import "./Contact.css";
import { useState } from 'react';
import linkedin_profile from "../Media/linkedin-logo.png";
import github_profile from "../Media/github-logo.png";

const Contact = () => {

    const [email, setEmail] = useState("");

    const [name, setName] = useState("");

    const [message, setMessage] = useState("");

    return (
        <section id="contact" className="contact">
            <h1>Contact Me</h1>
            <div className="contact-email">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" required />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" name="message" placeholder="Message you would like to send me" required />
            </div>
            <button>Send</button>
            <div className="contact-profiles">
                <a href="https://www.linkedin.com/in/srimedha-thummala/" target="_blank" rel="noreferrer"><img src={linkedin_profile} alt=""/></a>
                <a href="https://github.com/medhathumm" target="_blank" rel="noreferrer"><img src={github_profile} alt=""/></a>
            </div>
        </section>
    )
}

export default Contact;