import { useEffect, useRef } from "react";
import LemindaLogo from "../assets/leminda.svg";
import globe from "../assets/globe.svg";
import Clickable from "./clickable";

const Leminda = (props) => {
    const { setSkill, content } = props;
    const title = useRef(null);
    useEffect(() => {
        title?.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [content]);
    return (
        <>
            <div className="flex mb-4" ref={title}>
                <img src={LemindaLogo} alt="Leminda.AI" className="h-10 w-10 mr-2" />
                <div className="text-2xl">Leminda.AI</div>
                <a href="https://research.leminda.com" target="_blank">
                    <img src={globe} alt="https://research.leminda.com" className="ml-4 h-4 w-4" />
                </a>
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2022 - 2023</span>
                <span className="text-yellow-500 mr-2">Front-End Web Developer</span>at Leminda.AI,
                an EdTech AI based Startup that created a wep app and more for summarizing textual
                content for educational purposes.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li>
                    <div>
                        Developed a SPA (
                        <Clickable code={2} setSkill={setSkill} />,
                        <Clickable code={3} setSkill={setSkill} />,
                        <Clickable code={8} setSkill={setSkill} />) from scratch through production
                        (paying customers)
                    </div>
                </li>
                <li>
                    <div>
                        Installed various
                        <Clickable code={6} setSkill={setSkill} />
                        packages as needed and kept code clean and reusable
                    </div>
                </li>
                <li>
                    Headed Front End Development in an Agile environment and a CI/CD pipeline
                    including supervising junior colleagues
                </li>
                <li>
                    <div>
                        Designed UI based on
                        <Clickable code={9} setSkill={setSkill} />
                        mockup with attention to dynamic sized screens (pixel perfect)
                    </div>
                </li>
                <li>
                    Conducted both manual and automated testing (Unit and End2End) using Cypress.js
                </li>
                <li>
                    Identified, evaluated, and resolved issues by troubleshooting bugs and code
                    reviews
                </li>
                <li>
                    <div>
                        Created a Chrome extension: Integrating code into any site's DOM using
                        Vanilla
                        <Clickable code={3} setSkill={setSkill} />,
                        <Clickable code={13} setSkill={setSkill} /> and
                        <Clickable code={14} setSkill={setSkill} />, while maintaining communication
                        with the API
                    </div>
                </li>
                <li>
                    <div>
                        Communicated with all levels of development through
                        <Clickable code={7} setSkill={setSkill} /> and
                        <Clickable code={19} setSkill={setSkill} />
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
export default Leminda;
