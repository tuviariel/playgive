import JBLogo from "../assets/JohnBryce.jpg";
import SQL from "../assets/sql.svg";
import Html from "../assets/html-5.svg";
import Css from "../assets/css-3.svg";
import Angular from "../assets/angular.svg";
import JS from "../assets/js.svg";
import Java from "../assets/java.svg";
import github from "../assets/github.svg";

const JB = (props) => {
    const { setSkill } = props;
    return (
        <>
            <div className="flex">
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
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(23)}>
                            <img
                                src={Java}
                                alt="Java"
                                className="h-5 w-4 ml-auto mr-0.5 bg-white"
                            />
                            Java
                        </span>
                        & J2EE development (Web Servlets, REST Web services) and DataBase
                        implementing with
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(17)}>
                            <img src={SQL} alt="SQL" className="h-5 w-4 ml-auto mr-0.5" />
                            MySQL
                        </span>
                        .
                    </div>
                </li>
                <li>
                    <div>
                        Client-side techs:
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(13)}>
                            <img src={Html} alt="HTML" className="h-5 w-4 ml-auto mr-0.5" />
                            HTML
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
                            onClick={() => setSkill(14)}>
                            <img src={Css} alt="CSS" className="h-5 w-4 ml-auto mr-0.5" />
                            CSS
                        </span>
                        , and how they merge in
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(22)}>
                            <img src={Angular} alt="AngularJS" className="h-5 w-4 ml-auto mr-0.5" />
                            AngularJS
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
                <li>
                    <div>Protocols: http, https, xml, json.</div>
                </li>
            </ul>
        </>
    );
};
export default JB;
