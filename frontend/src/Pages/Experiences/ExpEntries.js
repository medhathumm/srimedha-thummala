import uw_ta from "../../Sections/Media/uw-ta.jpg";
import uw_dkdk from "../../Sections/Media/dkdk.png";
import uw_dkdk2 from "../../Sections/Media/dkdk-2.png";

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
            {src: uw_dkdk},
            {src: uw_dkdk2}
        ],
        context: "CSE 190b is a seminar for students who are direct admits to their computer science major. The seminar is 1.5 hours long for 1x per week and focuses on preparing students for life as a college student and computer science student at the Paul G. Allen School.",
        responsibilities: "Present a Don't Know what you Don't Know (DKDK) segment focused on teaching a basic level introduction to core CSE topics, such as AI/ML, version control, cybersecurity, quantum computing, and more.",
        impact: "Able to successfully ensure that 330+ students were comfortable with topics that they may have heard about but never understood or where confused about.",
        skills: <ul>
            <li>Presentation</li>
            <li>Communication</li>
            <li>Public Speaking</li>
            <li>Teaching/Instructing</li>
        </ul>,
        links: [
            {name: "UW CSE190B Course Website", url: "https://sites.google.com/cs.washington.edu/cse-190b-autumn-2024/home"}
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
            {src: uw_ta,}
        ],
        context: "Snoqualmie Valley School District is based in Snoqualmie, Washington (approximately 30 miles east of Seattle) and is one of the largest school districts in the state, covering more than 400 square miles and serving the communities of Snoqualmie, North Bend, Fall City.",
        responsibilities: "Re-Imaging Devices, Installing Computers and Printers, Asset Verification, Surplus",
        impact: "Successfully re-imaged and prepared 1,500+ student laptops to handoff to incoming freshman and 500+ staff devices. Satisfied 30+ tickets related to classroom technology issues.",
        skills: <ul>
            <li>Installing and Updating Computer Software</li>
            <li>Installing Computer Hardware</li>
        </ul>,
        links: [
            {name: "Tech Intern Website", url: "https://www.svsd410.org/departments/technology"}
        ] 
    },
    { 
        id: 3, 
        name: "Instructor", 
        more: "For DMW Martial Arts",
        timeframe: "December 2018 - September 2023",
        city: "Snoqualmie, Washington",
        description: "Guided groups of 20 - 30 students of varying age groups while developing eadership and teamwork skills through 10+ years of martial arts training.",
        images: [
            {src: uw_ta,}
        ],
        context: "COMPANY",
        responsibilities: "RESPONSIBILITIES",
        impact: "IMPACT",
        skills: "SKILLS",
        links: [] 
    },
];

export default ExpEntries;