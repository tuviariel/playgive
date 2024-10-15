import VaivrachLogo from "../assets/vaivrachL.png";
import Clickable from "./clickable";

const Vaivrach = (props) => {
    const { setSkill } = props;
    return (
        <>
            <div className="flex">
                <img src={VaivrachLogo} alt="Va'ivrach" className="h-10 w-10 mr-2" />
                <div className="text-2xl">Va'ivrach</div>
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2017 - 2021</span>
                <span className="text-yellow-500 mr-2">Full-Stack Web Developer</span>at Va'ivrach,
                a mobile escape-room company that created several digital educational escape rooms
                that were active for groups of all sizes. The digital platform had a great impact on
                the company during the pandemic lock-downs.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li>
                    <div>
                        Planned the business logic by Conducting UX research to design on the most
                        efficient framework
                    </div>
                </li>
                <li>
                    <div>
                        Built and modified code in
                        <Clickable code={3} setSkill={setSkill} />/
                        <Clickable code={4} setSkill={setSkill} />,
                        <Clickable code={13} setSkill={setSkill} />,
                        <Clickable code={16} setSkill={setSkill} />, on
                        <Clickable code={22} setSkill={setSkill} />
                        and
                        <Clickable code={2} setSkill={setSkill} />
                        on the Front End (~%80), and
                        <Clickable code={11} setSkill={setSkill} />
                        using
                        <Clickable code={12} setSkill={setSkill} />
                        on the Back End (~%20) to create several digital escape rooms
                    </div>
                </li>
                <li>
                    <div>
                        Multitasking, prioritizing and managing team communication through
                        <Clickable code={7} setSkill={setSkill} />
                        and
                        <Clickable code={21} setSkill={setSkill} />
                    </div>
                </li>
            </ul>
        </>
    );
};
export default Vaivrach;
