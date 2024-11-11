import "./More.css";

const More = () => {
    return (
        <section id="more" className="more">
            <h1>More</h1>
            <div className="more-sections">
                <div className="more-section">
                    <h3>Projects</h3>
                    <div className="more-entry">
                        <hr/>
                        <h4>Personal Website</h4>
                        <div className="more-entry-checkmore">
                            <h5>August 2024 - Present</h5>
                            <h2>&gt;</h2>
                        </div>
                        <p>Creating E-commerce website using MERN stack languages.</p>
                    </div>
                </div>

                <div className="more-section">
                    <h3>Extracurriculars</h3>
                </div>

                <div className="more-section">
                    <h3>Skills</h3>
                </div>
            </div>
        </section>
    )
}

export default More;