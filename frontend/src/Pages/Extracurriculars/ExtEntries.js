import tedxuofw_pic1 from "../../Sections/Media/tedxuofw-pic1.png";
import tedxuofw_pic3 from "../../Sections/Media/tedxuofw-pic3.jpg";
import tedxuofw_pic4 from "../../Sections/Media/tedxuofw-pic4.jpg";
import aacuw_pic1 from "../../Sections/Media/aacuw-pic1.png";
import aacuw_pic2 from "../../Sections/Media/aacuw-pic2.jpeg";
import aacuw_pic3 from "../../Sections/Media/aacuw-pic3.jpeg";
import cry_pic1 from "../../Sections/Media/cry-pic1.jpeg";
import cry_pic2 from "../../Sections/Media/cry-pic2.jpg";
import cry_pic3 from "../../Sections/Media/cry-pic3.jpg";
import cry_pic4 from "../../Sections/Media/cry-pic4.jpg";

const ExtEntries = [
    { 
        id: 1, 
        name: "Speaker Selection Team Member",
        more: <p>For TEDxUofW <br/> @ the University of Washington</p>, 
        timeframe: "October 2024 - Present",
        city: "Seattle, Washington",
        description: "Interview and select speakers from 100+ applicants for yearly TEDxUofW conference.",
        images: [
            {src: tedxuofw_pic1},
            {src: tedxuofw_pic4},
            {src: tedxuofw_pic3}
        ],
        context: <p>TEDxUofW is a student-run organization at the University of Washington dedicated to
             bringing inspirational and informative TED-style talks to the university community. The annual
             conference features speakers who share innovative ideas and experiences, fostering a culture of
             learning and engagement.</p>,
        responsibilities: <ul>
            <li>Collaborated with team members to interview and select speakers from over 100 applicants for the
                 annual TEDxUofW conference.</li>
            <li>Assisted selected speakers in developing their talks, ensuring alignment with the conference theme
                 'Resonance' and resolving any questions or conflicts during the preparation process.</li>
        </ul>,
        impact: <p>Contributed to delivering a meaningful and impactful experience to the audience by curating a
             diverse lineup of speakers whose talks embodied the theme 'Resonance,' thereby enhancing the conference's
             influence and reach within the university community.</p>,
        skills: <ul>
            <li>Communication</li>
            <li>Management</li>
        </ul>,
        links: [
            {name: "TEDxUofW Website", url: "https://tedxatuofw.com/"},
            {name: "TEDxUofW Instagram", url: "https://www.instagram.com/tedxuofw/"},
            {name: "TEDxUofW Facebook", url: "https://www.facebook.com/TEDxUofW/"}
        ]
    },
    { 
        id: 2, 
        name: "Online Networks Team Member", 
        more: <p>For Applied Analytics Club <br/> @ the University of Washington</p>, 
        timeframe: "October 2024 - Present",
        city: "Seattle, Washington",
        description: "Maintaining club website and manage social media with AWS and Git for Applied Analytics Club at UW (AACUW).",
        images: [
            {src: aacuw_pic1},
            {src: aacuw_pic2},
            {src: aacuw_pic3}
        ],
        context: <p>The Applied Analytics Club at the University of Washington (AACUW) is dedicated
             to uniting individuals from diverse backgrounds to focus on data-driven decision-making
             in today's marketplace, professional, and academic environments. Through workshops, guest
             speakers, networking events, and case projects, the club helps members build their analytical
             skills and prepare for careers involving data. </p>,
        responsibilities: <ul>
            <li>Ensure the club's website was up-to-date, functional, and user-friendly, utilizing AWS and Git for hosting and version control.</li>
            <li>Manage the club's social media presence, creating and scheduling posts to engage members and promote events.</li>
            <li>Follow up with project teams to monitor progress, provide support, and ensure alignment with club objectives.</li>
        </ul>,
        impact: <ul>
            <li>Improved the club's visibility and engagement through effective website and social media management, leading to increased event participation and membership growth.</li>
            <li>Streamlined communication and collaboration among project teams, fostering a culture of continuous improvement and innovation within the club.</li>
        </ul>,
        skills: <ul>
            <li>Amazon Web Services (AWS)</li>
            <li>Version Control with Git</li>
            <li>Social Media Strategy</li>
            <li>Team Management</li>
        </ul>,
        links: [
            {name: "AACUW Website", url: "http://aacuw.org/"},
            {name: "AACUW Instagram", url: "https://www.instagram.com/uwappliedanalytics/"},
            {name: "AACUW LinkedIn", url: "https://www.linkedin.com/company/aacuw/"}
        ] 
    },
    { 
        id: 3, 
        name: "Executive Board Programming Chair", 
        more: <p>For CRYUW <br/> @ the University of Washington</p>, 
        timeframe: "November 2024 - Present",
        city: "Seattle, Washington",
        description: "Organizing 3+ impactful fundraisers to raise $500+ to support CRY America’s initiatives as part of Child Rights & You at UW (CRYUW).",
        images: [
            {src: cry_pic1},
            {src: cry_pic2},
            {src: cry_pic3},
            {src: cry_pic4}
        ],
        context: <p>Child Rights & You (CRY) America is a non-profit organization dedicated to
             restoring the basic rights of underprivileged children, focusing on education, 
             healthcare, and protection from exploitation and abuse. CRY UW is a university chapter 
             that supports CRY America's initiatives through fundraising and awareness campaigns. </p>,
        responsibilities: <ul>
            <li>Collaborate with a team of three to organize impactful fundraisers aimed at supporting CRY America's initiatives.</li>
            <li>Work with other teams and faculty at the University of Washington to coordinate events and secure necessary approvals and resources.</li>
        </ul>,
        impact: <ul>
            <li>Organizing multiple fundraisers to collectively raise over $500 to support underprivileged children's education and basic needs.</li>
            <li>Increased awareness within the university community about child rights issues, leading to greater involvement and support for CRY UW's initiatives.</li>
        </ul>,
        skills: <ul>
            <li>Project Planning</li>
            <li>Teamwork</li>
            <li>User-Centric Marketing</li>
        </ul>,
        links: [
            {name: "CRYUW Instagram", url: "https://www.instagram.com/cryuw/?hl=en"},
            {name: "CRY America Website", url: "https://www.cryamerica.org/"},
            {name: "CRY America Donation Site", url: "https://www.cryamerica.org/#donate-to-make-a-difference"}
        ] 
    },
];

export default ExtEntries;