import ImpactLogo from "../assets/impactB.png";
import globe from "../assets/globe.svg";
import Clickable from "./clickable";

const Impact = (props) => {
    const { setSkill } = props;
    return (
        <>
            <div className="flex">
                <img src={ImpactLogo} alt="Impact" className="h-10 w-10 mr-2" />
                <div className="text-2xl">Impact by Mati</div>
                <a href="https://impact-98ffa.web.app/" target="_blank" className="text-xs flex">
                    <img
                        src={globe}
                        alt="https://impact-98ffa.web.app/"
                        className="ml-4 h-4 w-4 mr-1"
                    />
                    (user:"user1" password:"1234m")
                </a>
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2016</span>
                <span className="text-yellow-500 mr-2">Full-Stack Web Developer</span>as a Freelance
                at Impact (by Mati), a server-less web app designed to be used by participants of a
                coaching seminar to analyze their emotional state.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li>
                    <div>
                        Building reusable components in
                        <Clickable code={2} setSkill={setSkill} />
                        from scratch using
                        <Clickable code={3} setSkill={setSkill} />
                    </div>
                </li>
                <li>
                    <div>
                        Designing UX/UI with
                        <Clickable code={14} setSkill={setSkill} />
                        based on Mockup to achieve pixel-perfect results.
                    </div>
                </li>
                <li>
                    <div>
                        Deployed the application to Google's
                        <Clickable code={18} setSkill={setSkill} />
                        using their
                        <Clickable code={15} setSkill={setSkill} />
                        Data Base.
                    </div>
                </li>
                <li>
                    <div>
                        Managing source control with
                        <Clickable code={5} setSkill={setSkill} />
                    </div>
                </li>
            </ul>
        </>
    );
};
export default Impact;
