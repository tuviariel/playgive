import ExperienceLink from "../assets/experinceLink.svg";
import EducationLink from "../assets/educationLink.svg";
import SkillsLink from "../assets/skillsLink.svg";
import SummaryLink from "../assets/summaryLink.svg";
import MyLinks from "./myLinks";
import Clickable from "./clickable";
import portrait from "../assets/logoPic2.png";

const Start = (props) => {
    const { setActionContent, setSkill, setContent } = props;
    return (
        <>
            <img src={portrait} alt="my-logo" className="h-14 w-auto rounded-full mb-2" />
            <div className="text-xl mb-2">Welcome to my CV site</div>
            <div className="text-base mb-12 w-full">
                <div className="mb-2">Everything is clickable!</div>
                <div>
                    <Clickable code={1} setSkill={setSkill} />
                    is the main platform that I use to do my magic. I designed this site to create a
                    warm comfy feeling - like being at home, for VSCode users.
                </div>
                <div className="text-sm my-3">
                    [By the way- notice that clicking on the VSCode icon above, displays in the
                    timeline on the right side of the screen where I learned and experienced that
                    skill. It will work with all the other skills in this site.]
                </div>
                <div>* Not all the features of VSCode are activated on the web site.</div>
                <div> Enjoy!</div>
            </div>
            <div className="text-base mt-5 mb-1">Shortcuts</div>
            <div className="text-xs">
                <div
                    className="text-[#3094DB] cursor-pointer flex"
                    onClick={() => setActionContent("experience")}>
                    <img src={ExperienceLink} alt="Experience" className="h-5 w-5 mr-4" />
                    Experience...
                </div>
                <div
                    className="text-[#3094DB] cursor-pointer flex"
                    onClick={() => setActionContent("education")}>
                    <img src={EducationLink} alt="Education" className="h-5 w-5 mr-4" />
                    Education...
                </div>
                <div
                    className="text-[#3094DB] cursor-pointer flex"
                    onClick={() => setActionContent("skills")}>
                    <img src={SkillsLink} alt="Skills" className="h-5 w-5 mr-4" />
                    Skills...
                </div>
                <div
                    className="text-[#3094DB] cursor-pointer flex"
                    onClick={() => setContent("Summary")}>
                    <img src={SummaryLink} alt="Summary" className="h-5 w-5 mr-4" />
                    Summary...
                </div>
            </div>
            <div className="text-base mt-8 mb-1">Links</div>
            <div className="text-xs">
                <MyLinks />
                <div className="flex">
                    <a
                        href="mailto:tuviaa109@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#3094DB] cursor-pointer mr-4">
                        E-mail
                    </a>
                    <a href="mailto:tuviaa109@gmail.com" target="_blank" rel="noreferrer">
                        tuviaa109@gmail.com
                    </a>
                </div>
                <div className="flex">
                    <a
                        href="https://wa.me/972509315511?text=Hey%20Tuvia%2C%20I%27d%20like%20to%20interest%20you%20in%20a%20job%20at..."
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#3094DB] cursor-pointer mr-4">
                        WhatsApp
                    </a>
                    <a
                        href="https://wa.me/972509315511?text=Hey%20Tuvia%2C%20I%27d%20like%20to%20interest%20you%20in%20a%20job%20at..."
                        target="_blank"
                        rel="noreferrer">
                        https://wa.me/972509315511
                    </a>
                </div>
                <div className="flex">
                    <a
                        href="tel:+972-50-931-5511"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#3094DB] cursor-pointer mr-4">
                        Phone Call
                    </a>
                    <a href="tel:+972-50-931-5511" target="_blank" rel="noreferrer">
                        tel:+972-50-931-5511
                    </a>
                </div>
            </div>
        </>
    );
};
export default Start;
