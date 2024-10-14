import InfoLogo from "../assets/logoPic2.jpg";
import Clickable from "./clickable";

const Info = (props) => {
    const { setSkill } = props;
    return (
        <>
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
                        <Clickable code={2} setSkill={setSkill} />
                        (JSX / TSX) and Vanilla, while using
                        <Clickable code={3} setSkill={setSkill} />,
                        <Clickable code={4} setSkill={setSkill} />,
                        <Clickable code={14} setSkill={setSkill} />,
                        <Clickable code={16} setSkill={setSkill} />,
                        <Clickable code={8} setSkill={setSkill} />, and
                        <Clickable code={13} setSkill={setSkill} />
                        on the Front End, completing apps from scratch to production.
                    </div>
                </li>
                <li>
                    <div>
                        2 years of experience in the Back End using
                        <Clickable code={11} setSkill={setSkill} />
                        (with
                        <Clickable code={12} setSkill={setSkill} />)
                    </div>
                </li>
                <li>
                    <div>
                        Storing data in both
                        <Clickable code={17} setSkill={setSkill} />
                        (MySQL) and
                        <Clickable code={15} setSkill={setSkill} />(
                        <Clickable code={10} setSkill={setSkill} />,
                        <Clickable code={18} setSkill={setSkill} />) databases.
                    </div>
                </li>
                <li>
                    <div>
                        Skilled in Software architecture, including OOP, design patterns,
                        MicroServices and RESTful API, all happily does through
                        <Clickable code={1} setSkill={setSkill} />
                    </div>
                </li>
                <li>
                    <div>
                        Extensive experience in Agile methodology, Utilized tools like
                        <Clickable code={7} setSkill={setSkill} />,
                        <Clickable code={19} setSkill={setSkill} />, and
                        <Clickable code={21} setSkill={setSkill} />
                        for effective task management. A team player and an independent worker.
                        Managing source control with
                        <Clickable code={5} setSkill={setSkill} /> /
                        <Clickable code={20} setSkill={setSkill} />
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
                        <Clickable code={9} setSkill={setSkill} />
                        or
                        <Clickable code={25} setSkill={setSkill} />
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
                    district) and Jerusalem area, (I would consider to relocate if necessary).
                </li>
                <li>
                    I would prefer a hybrid work culture with open minded to a work life balance.
                </li>
            </ul>
            <div className="mb-6 text-xl ml-12 block">
                <div className="text-cyan-600">I'm looking forward to hearing from you!</div>
                <div className=" ml-12">Tuvia Ariel</div>
            </div>
        </>
    );
};
export default Info;
