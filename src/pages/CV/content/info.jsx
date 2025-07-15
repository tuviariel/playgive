import { useEffect, useRef } from "react";
import InfoLogo from "../assets/logoPic2.png";
import Clickable from "./clickable";

const Info = (props) => {
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
            <div className="flex mb-3" ref={title}>
                <img src={InfoLogo} alt="Info" className="h-10 w-10 mr-2" />
                <div className="text-2xl">
                    Summary <span className="text-base">[Update: 07/2025]</span>
                </div>
            </div>
            <div className="text-xl mb-1 text-cyan-600">My CV Summary:</div>
            <ul className="list-disc text-base mb-3 w-full">
                <li>
                    <div>
                        Six years of experience as a Front End developer in global High-Tech SaaS,
                        AI and EdTech companies and as a freelancer. I believe in Efficiency,
                        Commitment, Trustworthiness.
                    </div>
                </li>
                <li>
                    <div>
                        I am capable of taking learning materials in every topic and transforming
                        them into engaging games, enabling users to have an enjoyable and effective
                        learning experience.
                    </div>
                </li>
                <li>
                    <div>
                        Front end proficiencies:
                        <Clickable code={2} setSkill={setSkill} />
                        , Vanilla,
                        <Clickable code={3} setSkill={setSkill} />,
                        <Clickable code={4} setSkill={setSkill} />,
                        <Clickable code={14} setSkill={setSkill} />,
                        <Clickable code={16} setSkill={setSkill} />,
                        <Clickable code={8} setSkill={setSkill} />,
                        <Clickable code={13} setSkill={setSkill} />, apps from scratch to production
                    </div>
                </li>
                <li>
                    <div>
                        Back end Experience (2 years):
                        <Clickable code={11} setSkill={setSkill} />
                        (w/
                        <Clickable code={12} setSkill={setSkill} />)
                    </div>
                </li>
                <li>
                    <div>
                        Storing data:
                        <Clickable code={17} setSkill={setSkill} />
                        (MySQL),
                        <Clickable code={15} setSkill={setSkill} />(
                        <Clickable code={10} setSkill={setSkill} />,
                        <Clickable code={18} setSkill={setSkill} />)
                    </div>
                </li>
                <li>
                    <div>
                        Software architecture: OOP, design patterns, RESTful API, all with
                        <Clickable code={1} setSkill={setSkill} />
                    </div>
                </li>
                <li>
                    <div>
                        Team work in Agile, Tools including
                        <Clickable code={7} setSkill={setSkill} />,
                        <Clickable code={19} setSkill={setSkill} />,
                        <Clickable code={21} setSkill={setSkill} />
                        . Managing source control:
                        <Clickable code={5} setSkill={setSkill} /> /
                        <Clickable code={20} setSkill={setSkill} />. Also an independent worker.
                    </div>
                </li>
                <li>
                    <div>
                        Testing: Unit, E2E, using Jest.js and Cypress.js. Including code reviews and
                        bug fixing.
                    </div>
                </li>
                <li>
                    <div>
                        Design:
                        <Clickable code={9} setSkill={setSkill} />,
                        <Clickable code={25} setSkill={setSkill} />. creates a UI with pixel
                        perfection.
                    </div>
                </li>
            </ul>
            <div className="text-xl mb-1 text-cyan-600">General information:</div>
            <ul className="list-disc text-base mb-3 w-full">
                <li>Dualcitizen: U.S., IL</li>
                <li>Languages: fluent English and Hebrew</li>
                <li>Seeking employment: center to north Israel.</li>
                <li>Would prefer a hybrid work culture with open minded to a work life balance.</li>
            </ul>
            <div className="mb-6 text-xl ml-12 block">
                <div className="text-cyan-600">I'm looking forward to hearing from you!</div>
                <div className=" ml-12">Tuvia Ariel</div>
            </div>
        </>
    );
};
export default Info;
