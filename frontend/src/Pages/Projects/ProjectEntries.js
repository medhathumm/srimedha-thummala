import pp_pic1 from "../../Sections/Media/personal-porfolio-pic1.png";
import pp_pic2 from "../../Sections/Media/personal-portfolio-pic2.png";
import pp_pic3 from "../../Sections/Media/personal-portfolio-pic3.png";
import pp_pic4 from "../../Sections/Media/personal-portfolio-pic4.png";
import ye_pic1 from "../../Sections/Media/YouExplore img1.png";
import ye_pic2 from "../../Sections/Media/YouExplore img2.png";
import ye_pic3 from "../../Sections/Media/YouExplore img3.png";
import ye_pic4 from "../../Sections/Media/YouExplore img4.jpeg";
import ep_pic1 from "../../Sections/Media/ephistary-img1.jpeg";
import ep_pic2 from "../../Sections/Media/ephistary-img2.png";
import ep_pic3 from "../../Sections/Media/ephistary-img3.png";

const ProjectEntries = [
    { 
        id: 1, 
        name: "Personal Website", 
        more: "",
        timeframe: "August 2024 - Present",
        city: "",
        description: "Creating E-commerce website using MERN stack languages.",
        images: [
            {src: pp_pic1},
            {src: pp_pic2},
            {src: pp_pic3},
            {src: pp_pic4}
        ],
        context: "Designed and developed to showcase my skills, projects, experiences, and journey to potential employers, collaborators, and peers through my web development applications.",
        responsibilities: <ul>
            <li>Conceptualized the overall engaging and informative layout.</li>
            <li>Developed the website with React tools.</li>
            <li>Integrated dynamic features.</li>
            <li>Deployed the website.</li>
                </ul>,
        impact: "Improved my online visibility and created a lasting impression on recruiters and clients.",
        skills: <ul>
            <li>Front-End Development: React, JavaScript, HTML5, CSS3</li>
            <li>Version Control: GitHub</li>
        </ul>,
        links: [
            // {name: "", url: ""}
        ]
        // add link to the website
    },
    { 
        id: 2, 
        name: "YouExplore", 
        more: <p>@ the University of Washington's CREATE Program Hackathon</p>, 
        timeframe: "March 2024",
        description: "Co-developed Figma designs for a mobile app aimed at providing accessible leisure resources during University of Washington's CREATE Program Hackathon.",
        images: [
            {src: ye_pic1},
            {src: ye_pic2},
            {src: ye_pic3},
            {src: ye_pic4}
        ],
        context: "Challenged to address real-world accessiblity barries using customized ChatGPT models during a 3-day hackfest.",
        responsibilities: <ul>
            <li>Created an solution adhering to the W3C Web Content Accessibility Guidelines 2.0.</li>
            <li>Customized Open AI's GPT model to suggest personalized schedules and leisure activities with disability resources.</li>
        </ul>,
        impact: <ul>
            <li>Developed a user-centric GPT tool that empowers individuals with disabilities by removing barriers to leisure and exploration, promoting inclusivity.</li>
            <li>Received mentorship and positive feedback from experts, validating the solution’s relevance and scalability.</li>
        </ul>,
        skills: <ul>
            <li>Creating accessibility-focused designs.</li>
            <li>Enhanced understanding of customization of OpenAI’s GPT model for practical, user-centered applications</li>
        </ul>,
        links: [
            {name: "Hackfest Information", url: "https://create.uw.edu/create-aiaccessibility-hackfest-winter-24/"},
            {name: "LinkedIn Post", url: "https://www.linkedin.com/posts/srimedha-thummala_aihackfest-accessibilityintech-createuw-activity-7170886798003429376-gJp7?utm_source=share&utm_medium=member_desktop"},
            {name: "Figma Design", url: "https://www.figma.com/proto/rQuEKBInWygav1ZdhaXfZx/APP?node-id=13-87&starting-point-node-id=9%3A539&t=Pb873j2USNTKWLzJ-1"}
        ] 
    },
    { 
        id: 3, 
        name: "EP-histARy", 
        more: <p>@ RevereXR's Hackathon</p>, 
        timeframe: "February 2024",
        description: "Secured first place in Revere XR Hackathon with team Quantum SparkX for an AR prototype that preserves a historic event using innovative AR storytelling.",
        images: [
            {src: ep_pic1},
            {src: ep_pic2},
            {src: ep_pic3}
        ],
        context: "Assigned a task to preserve Seattle Central District's vanishing history and culture through AR/VR technology. Paired with elder Emil Pitre to capture and showcase his legacy and story.",
        responsibilities: "Contributed to designing the augmented reality experience of the 1968 four-hour sit-in protest by the Black Student Union at the University of Washington using Adobe Aero and Blender.",
        impact: <ul>
            <li>Created a platform that brings visibility to revolutionary events and underrepresented activists, fostering a deeper appreciation of campus history.</li>
            <li>Highlighted the contributions of Emile Pitre and the Black Student Union, preserving their legacy for future generations through immersive AR experiences.</li>
            <li>Won first place at the Revere XR Hackathon, validating the project's innovation, impact, and relevance.</li>
        </ul>,
        skills: <ul>
            <li>Gained practical experience in using Adobe Aero and Blender.</li>
            <li>Enhanced proficiency in Figma to create user-friendly and accessible app interfaces.</li>
            <li>Strengthened teamwork skills by working with individuals from diverse backgrounds and perspectives.</li>
            <li>Tackled challenges related to learning new tools and technologies under tight time constraints.</li>
        </ul>,
        links: [
            {name: "Hackathon Information", url: "https://www.reverexr.com/services-7"},
            {name: "Figma Design", url: "https://www.figma.com/proto/3O5lH8H6GG2gBCsppZWMfi/Quantum-SparX?node-id=1-62&t=XpEjOxZRRNSTp9lC-1"},
            {name: "Presentation", url: "https://docs.google.com/presentation/d/1OeeMccvE_3RnB8i-6hf912RPT31xAcjABhy9Z2305-M/edit?usp=sharing"},
            {name: "Hackthon Requirements", url: "https://drive.google.com/file/d/1c5og1Ka6rKcr2AmfAAg7USWBLYXF_bgk/view?usp=sharing"}
        ] 
    },
];

export default ProjectEntries;