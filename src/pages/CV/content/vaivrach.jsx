import VaivrachLogo from "../assets/vaivrachL.png";
import Angular from "../assets/angular.svg";
import ReactLogo from "../assets/react.svg";
import JS from "../assets/js.svg";
import TS from "../assets/typescript.svg";
import Express from "../assets/express.svg";
import node from "../assets/node.svg";
import Html from "../assets/html-5.svg";
import Scss from "../assets/scss.svg";
import Trello from "../assets/trello.svg";
import Jira from "../assets/jira.svg";

const Vaivrach = (props) => {
    const {} = props;
    return (
        <div className="text-slate-50 ml-12 my-10 pr-12 mb-4">
            <div className="flex">
                <img src={VaivrachLogo} alt="Va'ivrach" className="h-10 w-10" />
                <div className="text-2xl">Va'ivrach</div>
                {/* <a href="https://research.leminda.com" target="_blank">
                    <img src={globe} alt="https://research.leminda.com" className="ml-4 h-4 w-4" />
                </a> */}
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2017 - 2021</span>
                <span className="text-yellow-500 mr-2">Full-Stack Web Developer</span>at Va'ivrach,
                a mobile Escape-room company that created several digital educational escape rooms
                that were active for groups of all sizes. The digital platform had a great impact on
                the company during the lock-downs of Covid-19.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li>
                    <div>
                        Planned the business logic by Conducting UX research to design on the most
                        efficient framework.
                    </div>
                </li>
                <li>
                    <div>
                        Built and modified code in
                        <span className="w-8 inline-flex">
                            <img
                                src={JS}
                                alt="JS"
                                className="h-5 w-auto ml-auto mr-0.5 cursor-pointer"
                                onClick={() => {}}
                            />
                        </span>
                        JavaScript /
                        <span className="w-8 inline-flex">
                            <img
                                src={TS}
                                alt="TS"
                                className="h-5 w-auto ml-auto mr-0.5 cursor-pointer"
                                onClick={() => {}}
                            />
                        </span>
                        TypeScript,
                        <span className="w-8 inline-flex">
                            <img
                                src={Html}
                                alt="HTML"
                                className="h-5 w-auto ml-auto mr-0.5 cursor-pointer"
                                onClick={() => {}}
                            />
                        </span>
                        HTML,
                        <span className="w-8 inline-flex">
                            <img
                                src={Scss}
                                alt="Scss"
                                className="h-5 w-auto ml-auto mr-0.5 cursor-pointer"
                                onClick={() => {}}
                            />
                        </span>
                        SCSS, on
                        <span className="w-8 inline-flex">
                            <img
                                src={Angular}
                                alt="Angular.js"
                                className="h-5 w-auto ml-auto mr-0.5 cursor-pointer"
                                onClick={() => {}}
                            />
                        </span>
                        Angular.js and
                        <span className="w-8 inline-flex">
                            <img
                                src={ReactLogo}
                                alt="ReactJS"
                                className="h-5 w-auto ml-auto mr-0.5 cursor-pointer"
                                onClick={() => {}}
                            />
                        </span>
                        React on the Front End (~%80), and
                        <span className="w-8 inline-flex">
                            <img
                                src={node}
                                alt="NodeJS"
                                className="h-auto w-5 ml-auto mr-0.5 cursor-pointer"
                                onClick={() => {}}
                            />
                        </span>
                        Node.js using
                        <span className="w-8 inline-flex">
                            <img
                                src={Express}
                                alt="ExpressJS"
                                className="h-auto w-4 ml-auto mr-0.5 cursor-pointer bg-slate-100"
                                onClick={() => {}}
                            />
                        </span>
                        Express.js on the Back End (~%20) to create several digital escape rooms.
                    </div>
                </li>
                <li>
                    <div>
                        Multitasking, prioritizing and managing team communication through
                        <span className="w-8 inline-flex">
                            <img
                                src={Trello}
                                alt="trello"
                                className="h-5 w-auto ml-auto mr-0.5 cursor-pointer"
                                onClick={() => {}}
                            />
                        </span>
                        Trello and{" "}
                        <span className="w-8 inline-flex">
                            <img
                                src={Jira}
                                alt="Slack"
                                className="h-5 w-auto ml-auto mr-0.5 cursor-pointer"
                                onClick={() => {}}
                            />
                        </span>
                        Jira.
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default Vaivrach;
