import Clickable from "./clickable";
import TecoLogo from "../assets/teco.png";

const Teco = (props) => {
    const { setSkill } = props;
    return (
        <>
            <div className="flex">
                <img src={TecoLogo} alt="Teco-1" className="h-10 w-10 mr-2" />

                <div className="text-2xl">Teco-1</div>
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2014</span>
                <span className="text-yellow-500 mr-2">QA course,</span>a course led by Lior
                Klivanski and Ben Freidman giving us students all the fundamentals of a QA in the
                tech industry.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li>
                    <div>Analyzing product definitions and writing test forms (STD)</div>
                </li>
                <li>
                    <div>
                        Testing live products in various methods: Progression, Regression, Sanity,
                        Unit, Functional and End to End
                    </div>
                </li>
                <li>
                    <div>
                        Reporting and managing Bugs until solution with
                        <Clickable code={21} setSkill={setSkill} /> and
                        <Clickable code={7} setSkill={setSkill} />
                    </div>
                </li>
                <li>
                    <div>
                        Introduction to
                        <Clickable code={17} setSkill={setSkill} />,
                        <Clickable code={24} setSkill={setSkill} />
                        and Linux.
                    </div>
                </li>
            </ul>
        </>
    );
};
export default Teco;
