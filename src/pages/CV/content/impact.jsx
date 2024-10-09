import ImpactLogo from "../assets/impactB.png";
import Css from "../assets/css-3.svg";
import ReactLogo from "../assets/react.svg";
import JS from "../assets/js.svg";
import FireBase from "../assets/firebase.svg";
import NoSQL from "../assets/nosqlDB.svg";
import globe from "../assets/globe.svg";
import github from "../assets/github.svg";

const Impact = (props) => {
    const { setSkill } = props;
    return (
        <div className="text-slate-50 ml-12 my-10 pr-12 mb-4">
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
                at Impact (by Mati), A Server-less web app designed to be used by participants of a
                coaching seminar to analyze their emotional state.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li>
                    <div>
                        Building reusable components in
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(2)}>
                            <img src={ReactLogo} alt="ReactJS" className="h-5 w-4 ml-auto mr-0.5" />
                            React
                        </span>
                        from scratch using
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(3)}>
                            <img src={JS} alt="JS" className="h-5 w-4 ml-auto mr-0.5" />
                            JavaScript
                        </span>
                        .
                    </div>
                </li>
                <li>
                    <div>
                        Designing UX/UI with
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(14)}>
                            <img src={Css} alt="Css" className="h-5 w-4 ml-auto mr-0.5" />
                            CSS
                        </span>
                        based on Mockup to get to pixel-perfect results.
                    </div>
                </li>
                <li>
                    <div>
                        Deployed the application to Google's
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(18)}>
                            <img src={FireBase} alt="FireBase" className="h-5 w-4 ml-auto mr-0.5" />
                            Fire-Base
                        </span>
                        using their
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(15)}>
                            <img src={NoSQL} alt="NoSQL" className="h-5 w-4 ml-auto mr-0.5" />
                            NoSQL
                        </span>
                        Data Base.
                    </div>
                </li>
                <li>
                    <div>
                        Managing source control with
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(5)}>
                            <img
                                src={github}
                                alt="github"
                                className="h-5 w-4 ml-auto mr-0.5 bg-white rounded-full"
                            />
                            GitHub
                        </span>
                        .
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default Impact;
