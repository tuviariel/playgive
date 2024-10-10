import InfoLogo from "../assets/ProfilePicturePhoto.jpg";
import Tailwind from "../assets/tailwindcss.svg";
import React from "../assets/react.svg";
import MongoDB from "../assets/mongo.svg";
import TS from "../assets/typescript.svg";
import Express from "../assets/express.svg";
import node from "../assets/node.svg";
import Trello from "../assets/trello.svg";
import Github from "../assets/github.svg";
import JS from "../assets/js.svg";
import Css from "../assets/css-3.svg";
import Html from "../assets/html-5.svg";
import Scss from "../assets/scss.svg";
import NoSQL from "../assets/nosqlDB.svg";
import Firebase from "../assets/firebase.svg";
import Slack from "../assets/slack.svg";
import Jira from "../assets/jira.svg";
import Gitlab from "../assets/gitlab.svg";
import Figma from "../assets/figma.svg";
import Zeplin from "../assets/zeplin.svg";
import SQL from "../assets/sql.svg";
import VSCode from "../assets/vs-code.svg";

const Info = (props) => {
    const { setSkill } = props;
    return (
        <div className="text-slate-50 ml-12 my-10 pr-12 mb-4">
            <div className="flex mb-3">
                <img src={InfoLogo} alt="Info" className="h-10 w-10 mr-2" />
                <div className="text-2xl">
                    More Information <span className="text-lg">[Updated at 10/2024]</span>
                </div>
            </div>
            <div className="text-xl mb-1 text-cyan-600">My CV Summary:</div>
            <ul className="list-disc text-base mb-3 w-full">
                <li>
                    <div>
                        I have 6 years of experience as a Full Stack / Front End in global High-Tech
                        SaaS, AI and EdTech companies.
                    </div>
                </li>
                <li>
                    <div>
                        Proficient with
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(2)}>
                            <img src={React} alt="React" className="h-5 w-4 ml-auto mr-0.5" />
                            React
                        </span>
                        (JSX / TSX) and Vanilla, while using
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(3)}>
                            <img src={JS} alt="JavaScript" className="h-5 w-4 ml-auto mr-0.5" />
                            JavaScript
                        </span>
                        ,
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(4)}>
                            <img src={TS} alt="TypeScript" className="h-5 w-4 ml-auto mr-0.5" />
                            TypeScript
                        </span>
                        ,
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(14)}>
                            <img src={Css} alt="CSS" className="h-5 w-4 ml-auto mr-0.5" />
                            CSS(3)
                        </span>
                        ,
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(16)}>
                            <img src={Scss} alt="SCSS" className="h-5 w-4 ml-auto mr-0.5" />
                            SCSS
                        </span>
                        ,
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(8)}>
                            <img
                                src={Tailwind}
                                alt="Tailwindcss"
                                className="h-5 w-4 ml-auto mr-0.5"
                            />
                            Tailwind.css
                        </span>
                        , and
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(13)}>
                            <img src={Html} alt="HTML" className="h-5 w-4 ml-auto mr-0.5" />
                            HTML(5)
                        </span>
                        on the Front End, completing apps from scratch to production.
                    </div>
                </li>
                <li>
                    <div>
                        2 years of experience in the Back End using
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(11)}>
                            <img src={node} alt="Node.js" className="h-5 w-4 ml-auto mr-0.5" />
                            Node.js
                        </span>
                        (with
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(12)}>
                            <img
                                src={Express}
                                alt="Express.js"
                                className="h-4 w-4 ml-auto mr-0.5 bg-white"
                            />
                            Express.js
                        </span>
                        ).
                    </div>
                </li>
                <li>
                    <div>
                        Storing data in both
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(17)}>
                            <img src={SQL} alt="SQL" className="h-5 w-4 ml-auto mr-0.5" />
                            SQL (MySQL)
                        </span>
                        and
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(15)}>
                            <img src={NoSQL} alt="NoSQL" className="h-5 w-4 ml-auto mr-0.5" />
                            NoSQL
                        </span>
                        (
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(10)}>
                            <img src={MongoDB} alt="MongoDB" className="h-5 w-4 ml-auto mr-0.5" />
                            MongoDB
                        </span>
                        ,
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(18)}>
                            <img src={Firebase} alt="Firebase" className="h-5 w-4 ml-auto mr-0.5" />
                            Firebase
                        </span>
                        ) databases.
                    </div>
                </li>
                <li>
                    <div>
                        Skilled in Software architecture, including OOP, design patterns,
                        MicroServices and RESTful API, all happily does through
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(1)}>
                            <img src={VSCode} alt="VSCode" className="h-5 w-4 ml-auto mr-0.5" />
                            VSCode
                        </span>
                        .
                    </div>
                </li>
                <li>
                    <div>
                        Extensive experience in Agile methodology, Utilized tools like
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(7)}>
                            <img src={Trello} alt="Trello" className="h-5 w-4 ml-auto mr-0.5" />
                            Trello
                        </span>
                        ,
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(19)}>
                            <img src={Slack} alt="Slack" className="h-5 w-4 ml-auto mr-0.5" />
                            Slack
                        </span>
                        , and
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(21)}>
                            <img src={Jira} alt="Jira" className="h-5 w-4 ml-auto mr-0.5" />
                            Jira
                        </span>
                        for effective task management. A team player and an independent worker.
                        Managing source control with
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(5)}>
                            <img
                                src={Github}
                                alt="Github"
                                className="h-5 w-4 ml-auto mr-0.5 rounded-full bg-white"
                            />
                            Github
                        </span>
                        /
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(20)}>
                            <img src={Gitlab} alt="Gitlab" className="h-5 w-4 ml-auto mr-0.5" />
                            Gitlab
                        </span>
                        .
                    </div>
                </li>
                <li>
                    <div>
                        Testing Unit and E2E Testing with Jest.js and Cypress.js. Conducted code
                        reviews and bug fixing.
                    </div>
                </li>
                <li>
                    <div>
                        Designed based on
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(9)}>
                            <img src={Figma} alt="Figma" className="h-5 w-4 ml-auto mr-0.5" />
                            Figma
                        </span>
                        or
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(25)}>
                            <img src={Zeplin} alt="Zeplin" className="h-5 w-4 ml-auto mr-0.5" />
                            Zeplin
                        </span>
                        for creating a UI with a keen eye for pixel perfection.
                    </div>
                </li>
            </ul>
            <div className="text-xl mb-1 text-cyan-600">More general information:</div>
            <ul className="list-disc text-base mb-3 w-full">
                <li>
                    I have both a U.S. and IL Citizenship, and fluent communicating in both English
                    and Hebrew.
                </li>
                <li>
                    At the moment I'm looking for work from North Israel, through Tel Aviv (Center
                    district) and Jerusalem area, (I would consider to relocate if nesisery).
                </li>
                <li>
                    I would prefer a hybrid work culture with open minded to a work life balance.
                </li>
            </ul>
            <div className="mb-6 text-xl ml-12 block">
                <div className="text-cyan-600">I'm looking forward to hearing from you!</div>
                <div className=" ml-12">Tuvia Ariel</div>
            </div>
        </div>
    );
};
export default Info;
