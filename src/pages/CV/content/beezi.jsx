import { useEffect, useRef } from "react";
import BeeziLogo from "../assets/BeeziB.svg";
import Clickable from "./clickable";

const Beezi = (props) => {
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
                        <Clickable code={2} setSkill={setSkill} />
                        from scratch, using
                        <Clickable code={4} setSkill={setSkill} />
                        and connecting to the Back-End through API
                    </div>
                </li>
                <li>
                    <div>Worked close to the BackEnd and other team members</div>
                </li>
                <li>
                    <div>
                        Implementing the UI's responsive design using
                        <Clickable code={16} setSkill={setSkill} />(
                        <Clickable code={14} setSkill={setSkill} />&
                        <Clickable code={13} setSkill={setSkill} />) from
                        <Clickable code={25} setSkill={setSkill} />
                        mockup
                    </div>
                </li>
                <li>
                    <div>
                        Managing source control with
                        <Clickable code={20} setSkill={setSkill} />
                    </div>
                </li>
            </ul>
        </>
    );
};
export default Beezi;
