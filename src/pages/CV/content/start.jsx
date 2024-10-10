import ExperienceLink from "../assets/experinceLink.svg";
import EducationLink from "../assets/educationLink.svg";
import SkillsLink from "../assets/skillsLink.svg";
import InfoLink from "../assets/infoLink.svg";
import MyLinks from "./myLinks";
import VSCode from "../assets/vs-code.svg";

const Start = (props) => {
    const { setActionContent, setSkill } = props;
    return (
        <div className="text-slate-50 ml-12 my-10">
            <div className="text-xl">Welcome to my CV site</div>
            <div className="text-base mb-12 w-full">
                <div>
                    For those of you who aren't familiar, this is how the
                    <span
                        className="mx-2 inline-flex cursor-pointer hover:underline"
                        onClick={() => setSkill(1)}>
                        <img src={VSCode} alt="VSCode" className="h-5 w-4 ml-auto mr-0.5" />
                        VSCode
                    </span>
                    looks like. VSCode is the main platform that I create my magic on. I built this
                    site to give people who are in my field of expertise a worm feeling, just like
                    they are at home.
                </div>
                <div className="text-sm my-3">
                    [By the way- notice that clicking on the VSCode icon shows in the timeline on
                    the right side of the screen where I learned and experienced that skill. It will
                    work with the other skills in this site...]
                </div>
                <div>
                    Of course not all the features work like the real VSCode (they are irrelevant
                    for a CV site).
                </div>
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
                    onClick={() => setActionContent("information")}>
                    <img src={InfoLink} alt="Info" className="h-5 w-5 mr-4" />
                    More Information...
                </div>
            </div>
            <div className="text-base mt-8 mb-1">Links</div>
            <div className="text-xs">
                <MyLinks />
                <div className="flex">
                    <a
                        href="mailto:tuviaa109@gmail.com"
                        target="_blank"
                        className="text-[#3094DB] cursor-pointer mr-4">
                        E-mail
                    </a>
                    <a href="mailto:tuviaa109@gmail.com" target="_blank">
                        tuviaa109@gmail.com
                    </a>
                </div>
                <div className="flex">
                    <a
                        href="https://wa.me/972509315511?text=Hey%20Tuvia%2C%20I%27d%20like%20to%20interest%20you%20in%20a%20job%20at..."
                        target="_blank"
                        className="text-[#3094DB] cursor-pointer mr-4">
                        WhatsApp
                    </a>
                    <a
                        href="https://wa.me/972509315511?text=Hey%20Tuvia%2C%20I%27d%20like%20to%20interest%20you%20in%20a%20job%20at..."
                        target="_blank">
                        https://wa.me/972509315511
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Start;
