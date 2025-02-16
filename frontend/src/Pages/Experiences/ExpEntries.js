import uw_ta from "../../Sections/Media/uw-ta.jpg";
import uw_dkdk from "../../Sections/Media/dkdk.png";
import uw_dkdk3 from "../../Sections/Media/uw_dkdk3.png";
import tech_pic1 from "../../Sections/Media/tech-pic1.jpeg";
import tech_pic2 from "../../Sections/Media/tech-pic2.jpg";
import tech_pic3 from "../../Sections/Media/tech-pic3.jpg";
import tech_pic4 from "../../Sections/Media/tech-pic4.jpg";
import dmw_pic1 from "../../Sections/Media/dmw-pic1.jpg";
import dmw_pic2 from "../../Sections/Media/dmw-pic2.jpg";
import dmw_pic3 from "../../Sections/Media/dmw-pic3.jpg";
import dmw_pic4 from "../../Sections/Media/dmw-pic4.jpg";

const ExpEntries = [
    { 
        id: 1, 
        name: "Teaching Assistant", 
        more: <p>For CSE190B Direct-Admit Seminar <br/>@ the University of Washington's Paul G. Allen School of Computer Science and Engineering</p>,
        timeframe: "September 2024 - December 2024",
        city: "Seattle, Washington",
        description: "Lead presentations on core CSE concepts for 335 students in University of Washington's Paul G. Allen School of Computer Science & Engineering CSE 190B Direct-Admit Seminar.",
        images: [
            {src: uw_ta},
            {src: uw_dkdk3},
            {src: uw_dkdk},
        ],
        context: <p>
            CSE 190B is a seminar designed for direct-admit computer science students
             to help them navigate their first year at UW. The course covers academic 
             success strategies, career preparation, and core computing concepts, while 
             also fostering community and inclusivity within the Allen School. The seminar 
             runs for 10 weeks and 1.5 hours weekly, serving over 330 students each year.
        </p>,
        responsibilities: <ul>
            <li>Led the "Don’t Know What You Don’t Know" (DKDK) segment, a weekly 5-10 minute presentation introducing fundamental CS topics such as:</li>
            <ul>
                <li style={{ textIndent: "30px" }}>Artificial Intelligence & Machine Learning</li>
                <li style={{ textIndent: "30px" }}>Version Control (Git & GitHub)</li>
                <li style={{ textIndent: "30px" }}>Cybersecurity & Ethical Hacking</li>
                <li style={{ textIndent: "30px" }}>Quantum Computing </li>
            </ul>
            <li>Facilitated discussions & Q&A sessions to break down complex concepts into beginner-friendly explanations.</li>
            <li>Mentored first-year students, offering academic and career advice to help them adjust to the rigorous CS curriculum.</li>
        </ul>,
        impact: <ul>
            <li>Helped 330+ students build confidence in fundamental CS concepts they had previously found intimidating or confusing.</li>
            <li>Created a welcoming and inclusive learning environment, making advanced topics more approachable.</li>
            <li>Strengthened the direct-admit community by providing interactive and engaging learning experiences.</li>
            <li>Encouraged student participation in hands-on discussions, improving their understanding of CS beyond the classroom.</li>
        </ul>,
        skills: <ul>
            <li>Public Speaking</li>
            <li>Technical Communication</li>
            <li>Teaching & Instruction</li>
            <li>Mentorship</li>
        </ul>,
        links: [
            {name: "UW CSE190B Course Website", url: "https://sites.google.com/cs.washington.edu/cse-190b-autumn-2024/home"},
            {name: "Instructor: Prof. Dan Grossman", url: "https://homes.cs.washington.edu/~djg/"},
            {name: "Teaching Assistant Program at UW CSE", url: "https://www.cs.washington.edu/academics/teaching-assistants/"}
        ]
    },
    { 
        id: 2, 
        name: "Technology Intern", 
        more: "For the Snoqualmie Valley School District",
        timeframe: "June 2020 - June 2023",
        city: "Snoqualmie, Washington",
        description: "Managed and reimaged 500+ student devices yearly and resolved over 15 monthly hardware support tickets to facilitate and enhance intradistrict technology functionality.",
        images: [
            {src: tech_pic1},
            {src: tech_pic2},
            {src: tech_pic3},
            {src: tech_pic4}
        ],
        context: <p>Snoqualmie Valley School District (SVSD) serves students in Snoqualmie, North Bend, and Fall City,
             spanning over 400 square miles. As a Technology Intern, I worked alongside the district’s IT team to support
             schools by maintaining and deploying essential technology infrastructure for students and staff.</p>,
        responsibilities: <ul>
            <li>Re-imaged and prepared student and staff devices for the upcoming academic year.</li>  
            <li>Installed computers, printers, and other hardware across multiple schools.</li>
            <li>Verified and updated asset records for accurate technology inventory tracking.</li>
            <li>Assisted in processing surplus technology equipment for recycling or disposal.</li>
            <li>Provided technical support for classroom technology, resolving IT support tickets.</li>
        </ul>,
        impact: <ul>
            <li>Successfully re-imaged and prepared 1,500+ student laptops yearly for incoming freshmen and 500+ staff devices, ensuring a smooth start to the school year.</li>
            <li>Resolved 30+ technology support tickets related to classroom devices yearly, improving technology accessibility for teachers and students.</li>
        </ul>,
        skills: <ul>
            <li>Installing and updating computer software & operating systems.</li>
            <li>Setting up and configuring computer hardware, printers, and peripherals.</li>
            <li>Asset management and tracking of IT equipment.</li>
            <li>Troubleshooting and resolving common classroom technology issues.</li>
        </ul>,
        links: [
            {name: "SVSD Technology Department", url: "https://www.svsd410.org/departments/technology"},
            {name: "One-to-One Laptop Initiative", url: "https://www.svsd410.org/departments/technology/one-to-one-laptop-initiative"},
            {name: "Snoqualmie Valley School District Website", url: "https://www.svsd410.org/"}
        ] 
    },
    { 
        id: 3, 
        name: "Instructor", 
        more: "For DMW Martial Arts",
        timeframe: "December 2018 - September 2023",
        city: "Snoqualmie, Washington",
        description: "Guided groups of 20 - 30 students of varying age groups while developing leadership and teamwork skills through 10+ years of martial arts training.",
        images: [
            {src: dmw_pic1},
            {src: dmw_pic2},
            {src: dmw_pic3},
            {src: dmw_pic4}
        ],
        context: <p>DMW Martial Arts is a martial arts school located in Snoqualmie, Washington, offering challenging, 
            disciplined, and enjoyable training for individuals aged 4 through adult. The dojo emphasizes self-defense, 
            discipline, and fitness, providing programs tailored to various age groups and skill levels. As an instructor at DMW 
            Martial Arts, I worked alongside a team of 10 other instructors, contributing to the personal and physical development
            of numerous students. </p>,
        responsibilities: <ul>
            <li>Guided groups of 20-30 students, adapting teaching methods to accommodate diverse learning needs and age groups.</li>
            <li>Provided one-on-one coaching to help students improve techniques and prepare for belt tests.</li>
            <li>Assisted in curriculum development and structured lesson plans to ensure effective training progression.</li>
            <li>Fostered a positive and disciplined learning environment in collaboration with 10 other instructors, ensuring effective communication and teamwork.</li>
        </ul>,
        impact: <ul>
            <li>Successfully trained and mentored dozens of students, helping them achieve their next belt rank and develop self-confidence.</li>
            <li>Strengthened students’ leadership skills by incorporating teamwork exercises and mentoring advanced students to assist beginners.</li>
            <li>Contributed to the school’s reputation by maintaining high retention rates and ensuring a positive learning experience.</li>
        </ul>,
        skills: <ul>
            <li>Instruction & Coaching</li>
            <li>Public Speaking & Communication</li>
            <li>Adaptability & Patience</li>
            <li>Leadership & Teamwork</li>
        </ul>,
        links: [
            {name: "DMW Martial Arts Official Website", url: "https://dmwmartialarts.com/"},
            {name: "DMW Martial Arts Facebook Page", url: "https://www.facebook.com/DMWMartialArts/"},
            {name: "DMW Martial Arts Instagram Page", url: "https://www.instagram.com/dmwmartialarts/"}
        ] 
    },
];

export default ExpEntries;