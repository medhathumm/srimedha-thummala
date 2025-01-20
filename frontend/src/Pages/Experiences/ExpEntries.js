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
        context: "COMPANY",
        responsibilities: "RESPONSIBILITIES",
        impact: "IMPACT",
        skills: "SKILLS",
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
        context: "COMPANY",
        responsibilities: "Re-Imaging Devices, Installing Computers and Printers, Asset Verification, Surplus",
        impact: "IMPACT",
        skills: "SKILLS",
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