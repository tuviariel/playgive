import ExperienceLink from "../assets/experinceLink.svg";
import EducationLink from "../assets/educationLink.svg";
import SkillsLink from "../assets/skillsLink.svg";
import InfoLink from "../assets/infoLink.svg";
const Start = (props) => {
    const { setActionContent } = props;
    return (
        <div className="text-slate-50 ml-12 my-10">
            <div className="text-xl">Welcome to my CV site</div>
            <div className="text-base mb-12 w-full">
                <div>
                    For those of you who aren't familiar, this is how the VSCode looks like. VSCode
                    is the main platform that I create my magic on. I built this site to give people
                    who are in my field of expertise a worm feeling, just like they are at home.
                </div>
                <div>
                    Of course not all the features work like the real platform (they are irrelevant
                    for a CV site and would have taken to much of my free time).
                </div>
                <div> Enjoy!</div>
            </div>

            <div className="text-base mt-8 mb-1">Shortcuts</div>
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
                <div className="flex">
                    <a
                        href="https://www.linkedin.com/in/tuviaariel"
                        target="_blank"
                        className="text-[#3094DB] cursor-pointer mr-4">
                        LinkedIn
                    </a>
                    <a href="https://www.linkedin.com/in/tuviaariel" target="_blank">
                        https://www.linkedin.com/in/tuviaariel
                    </a>
                </div>
                <div className="flex">
                    <a
                        href="https://github.com/tuviariel"
                        target="_blank"
                        className="text-[#3094DB] cursor-pointer mr-4">
                        GitHub
                    </a>
                    <a href="https://github.com/tuviariel" target="_blank">
                        https://github.com/tuviariel
                    </a>
                </div>
                <div className="flex">
                    <a
                        href="https://drive.google.com/file/d/1FnZzBuBIY7hDpP5wSE_omyU1E9Fx76ZF/view?usp=sharing"
                        target="_blank"
                        className="text-[#3094DB] cursor-pointer mr-4">
                        CV
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1FnZzBuBIY7hDpP5wSE_omyU1E9Fx76ZF/view?usp=sharing"
                        target="_blank">
                        https://drive.google.com/file/[my-cv]
                    </a>
                </div>
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
