import "./Testimonials.css";

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="testimonials-entry">
                <p>"Srimedha did excellent work as a Techology 
                    Intern for 2 years at SVSD. she helped her fellow 
                    students and learned new IT skills. She was was a hard 
                    worker and took direction well."</p>
                <h5> ~ <i>Fletcher Lacroix</i></h5>
                <h6>IT Director City of Snoqualmie</h6>
                <h6><strong>October 2023</strong></h6>
            </div>

            <div className="testimonials-entry">
                <p>"Testimonial"</p>
                <h5> ~ <i>Name</i></h5>
                <h6>Role</h6>
                <h6><strong>Date</strong></h6>
            </div>

            <div className="testimonials-entry">
                <p>"Testimonial"</p>
                <h5> ~ <i>Name</i></h5>
                <h6>Role</h6>
                <h6><strong>Date</strong></h6>
            </div>
        </section>
    )
}

export default Testimonials;