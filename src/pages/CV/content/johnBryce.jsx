import { useEffect, useRef } from "react";
import JBLogo from "../assets/JohnBryce.jpg";
import Clickable from "./clickable";

const JB = (props) => {
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
            <div className="flex" ref={title}>
                <img src={JBLogo} alt="John Bryce" className="h-10 w-10 mr-2" />
                <div className="text-2xl">John Bryce (Tel-Aviv)</div>
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2015</span>
                <span className="text-yellow-500 mr-2">Java course,</span> an 8 month course planed
                to cover all of the modern programming skills based on Java and all of it's
                background. A 250h final project aimed at utilizing various technologies and
                experiencing full stack development learned throughout the course. Completion with
                honors.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li>
                    <div>
                        <Clickable code={23} setSkill={setSkill} />
                        & J2EE development (Web Servlets, REST Web services) and DataBase
                        implementing with MySQL (
                        <Clickable code={17} setSkill={setSkill} />)
                    </div>
                </li>
                <li>
                    <div>
                        Client-side techs:
                        <Clickable code={13} setSkill={setSkill} />, ,
                        <Clickable code={3} setSkill={setSkill} />,
                        <Clickable code={14} setSkill={setSkill} />, and how they merge in
                        <Clickable code={22} setSkill={setSkill} />
                    </div>
                </li>
                <li>
                    <div>
                        Managing source control with
                        <Clickable code={5} setSkill={setSkill} />
                    </div>
                </li>
                <li>
                    <div>Protocols: http, https, xml, json</div>
                </li>
            </ul>
        </>
    );
};
export default JB;
