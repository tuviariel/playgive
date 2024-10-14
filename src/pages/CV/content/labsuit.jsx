import LabsuitLogo from "../assets/labsuit.png";
import Clickable from "./clickable";

const Labsuit = (props) => {
    const { setSkill } = props;
    return (
        <>
            <div className="flex">
                <img src={LabsuitLogo} alt="LabSuit" className="h-10 w-10 mr-2" />
                <div className="text-2xl">LabSuit</div>
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2015</span>
                <span className="text-yellow-500 mr-2">QA (internship)</span>at LabSuit, a web
                platform that enables managing, sharing and purchasing of chemicals in research
                laboratories.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li>
                    <div>Understanding expected workflow, planning and writing STD's.</div>
                </li>
                <li>
                    <div>Testing websites manually from client-side.</div>
                </li>
                <li>
                    <div>
                        Bug management from first report to development until completion, in
                        <Clickable code={7} setSkill={setSkill} />
                    </div>
                </li>
            </ul>
        </>
    );
};
export default Labsuit;
