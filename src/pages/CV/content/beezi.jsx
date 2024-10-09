import BeeziLogo from "../assets/BeeziB.svg";
import gitlab from "../assets/gitlab.svg";
import ReactLogo from "../assets/react.svg";
import zeplin from "../assets/zeplin.svg";
import TS from "../assets/typescript.svg";
import Scss from "../assets/scss.svg";
import Css from "../assets/css-3.svg";
import Html from "../assets/html-5.svg";

const Beezi = (props) => {
    const { setSkill } = props;
    return (
        <div className="text-slate-50 ml-12 my-10 pr-12 mb-4">
            <div className="flex">
                <img src={BeeziLogo} alt="Beezi" className="h-10 w-10 mr-2" />
                <div className="text-2xl">Beezi</div>
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2020</span>
                <span className="text-yellow-500 mr-2">Front-End Web Developer</span>
                at Beezi, a start-up that developed a platform for parents managing home assignments
                with their children enabling assigning chores for each child, rewarding them with
                points that sum up to prizes. A remote job during the lock-downs of Covid-19.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li>
                    <div>
                        Building the Front-End of the app based on
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(2)}>
                            <img src={ReactLogo} alt="React" className="h-5 w-4 ml-auto mr-0.5" />
                            React
                        </span>
                        from scratch, using
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(4)}>
                            <img src={TS} alt="TS" className="h-5 w-auto ml-auto mr-1 mt-0.5" />
                            Typescript
                        </span>
                        and connecting to the Back-End through API.
                    </div>
                </li>
                <li>
                    <div>Worked close to the BackEnd and other team members.</div>
                </li>
                <li>
                    <div>
                        Implementing the UI's responsive design using
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(16)}>
                            <img src={Scss} alt="Scss" className="h-5 w-4 ml-auto mr-0.5" />
                            SCSS
                        </span>
                        (
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(14)}>
                            <img src={Css} alt="Css" className="h-5 w-4 ml-auto mr-0.5" />
                            CSS
                        </span>
                        &
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(13)}>
                            <img src={Html} alt="HTML" className="h-5 w-4 ml-auto mr-0.5" />
                            HTML
                        </span>
                        ) from
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(25)}>
                            <img src={zeplin} alt="Zeplin" className="h-5 w-4 ml-auto mr-0.5" />
                            Zeplin
                        </span>
                        mockup.
                    </div>
                </li>
                <li>
                    <div>
                        Managing source control with
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(20)}>
                            <img src={gitlab} alt="gitlab" className="h-5 w-4 ml-auto mr-0.5" />
                            GitLab
                        </span>
                        .
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default Beezi;
