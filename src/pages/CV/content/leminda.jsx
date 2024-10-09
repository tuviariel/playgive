import LemindaLogo from "../assets/leminda.svg";
import globe from "../assets/globe.svg";
import ReactLogo from "../assets/react.svg";
import JS from "../assets/js.svg";
import Tailwind from "../assets/tailwindcss.svg";
import Figma from "../assets/figma.svg";
import Html from "../assets/html-5.svg";
import Css from "../assets/css-3.svg";
import Trello from "../assets/trello.svg";
import Slack from "../assets/slack.svg";
import Npm from "../assets/npm.svg";
import github from "../assets/github.svg";

const Leminda = (props) => {
    const { setSkill } = props;
    return (
        <div className="text-slate-50 ml-12 my-10 pr-12">
            <div className="flex mb-4">
                <img src={LemindaLogo} alt="Leminda.AI" className="h-10 w-10 mr-2" />
                <div className="text-2xl">Leminda.AI</div>
                <a href="https://research.leminda.com" target="_blank">
                    <img src={globe} alt="https://research.leminda.com" className="ml-4 h-4 w-4" />
                </a>
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2022 - 2023</span>
                <span className="text-yellow-500 mr-2">Front-End Web Developer</span>at Leminda.AI
                an EdTech AI based Startup that created a Wep App and more for summarizing textual
                content for educational purposes.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li className="">
                    <div className="">
                        Developed an SPA (
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(2)}>
                            <img src={ReactLogo} alt="React" className="h-5 w-4 ml-auto mr-0.5" />
                            React
                        </span>
                        ,
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(3)}>
                            <img src={JS} alt="JavaScript" className="h-5 w-4 ml-auto mr-0.5" />
                            JavaScript
                        </span>
                        ,
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(8)}>
                            <img
                                src={Tailwind}
                                alt="Tailwind.css"
                                className="h-5 w-4 ml-auto mr-0.5"
                            />
                            Tailwind.css
                        </span>
                        ) from scratch until production (paying customers).
                    </div>
                </li>
                <li className="">
                    <div>
                        Installed various
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(6)}>
                            <img src={Npm} alt="NPM" className="h-5 w-4 ml-auto mr-0.5" />
                            NPM
                        </span>
                        packages as needed and kept code clean and reusable.
                    </div>
                </li>
                <li className="">
                    Led Front End Development in an Agile environment and a CI/CD pipeline while
                    Guiding Junior colleagues.
                </li>
                <li className="">
                    <div className="flex">
                        Designed UI based on
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(9)}>
                            <img src={Figma} alt="Figma" className="h-5 w-4 ml-auto mr-0.5" />
                            Figma
                        </span>
                        mockup with attention to dynamic sized screens (pixel perfect).
                    </div>
                </li>
                <li className="">
                    Conducted both Manual and Automated Testing (Unit and End2End) using Cypress.js.
                </li>
                <li className="">
                    Identified, evaluated, and resolved issues by troubleshooting bugs and code
                    reviews.
                </li>
                <li className="">
                    <div className="">
                        Created a Chrome extension: Integrating code into any site's DOM using
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(3)}>
                            <img src={JS} alt="JS" className="h-5 w-4 ml-auto mr-0.5" />
                            Vanilla JavaScript
                        </span>
                        ,
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(13)}>
                            <img src={Html} alt="HTML" className="h-5 w-4 ml-auto mr-0.5" />
                            HTML
                        </span>
                        and
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(14)}>
                            <img src={Css} alt="CSS" className="h-5 w-4 ml-auto mr-0.5" />
                            CSS
                        </span>
                        , while maintaining communication with the API.
                    </div>
                </li>
                <li className="">
                    <div className="">
                        Communicated with all levels of development through
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(7)}>
                            <img src={Trello} alt="trello" className="h-5 w-4 ml-auto mr-0.5" />
                            Trello
                        </span>
                        and
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(19)}>
                            <img src={Slack} alt="Slack" className="h-5 w-4 ml-auto mr-0.5" />
                            Slack
                        </span>
                        .
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
export default Leminda;
