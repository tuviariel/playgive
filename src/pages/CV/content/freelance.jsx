import FreeLogo from "../assets/logoPic2.jpg";
import Clickable from "./clickable";
const Freelance = (props) => {
    const { setSkill } = props;
    return (
        <>
            <div className="flex">
                <img src={FreeLogo} alt="Freelance" className="h-10 w-10 mr-2" />
                <div className="text-2xl">Freelance</div>
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2023 - Today</span>
                <span className="text-yellow-500 mr-2">Freelance: Full-Stack Web Developer,</span>
                Due to the military situation in the Upper Galilee I have been forced to put off a
                new job search, instead I am investing my energy into acquiring new in more
                technologies.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li>
                    <div>
                        Creating web applications using
                        <Clickable code={2} setSkill={setSkill} />,
                        <Clickable code={8} setSkill={setSkill} />, and
                        <Clickable code={4} setSkill={setSkill} />
                        from scratch.
                    </div>
                </li>
                <li>
                    <div>
                        Building back-end with
                        <Clickable code={11} setSkill={setSkill} /> using
                        <Clickable code={12} setSkill={setSkill} /> while connecting to
                        <Clickable code={10} setSkill={setSkill} />
                    </div>
                </li>
                <li>
                    <div>
                        Multitasking, prioritizing and managing schedule with
                        <Clickable code={7} setSkill={setSkill} />
                    </div>
                </li>
                <li>
                    <div>
                        Planned architecture to withstand high performance and stability as
                        MicroServices.
                    </div>
                </li>
                <li>
                    <div>Modifying and adding features in the component layout.</div>
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
export default Freelance;
