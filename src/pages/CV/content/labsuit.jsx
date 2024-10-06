import LabsuitLogo from "../assets/labsuit.png";
import Trello from "../assets/trello.svg";

const Labsuit = (props) => {
    const {} = props;
    return (
        <div className="text-slate-50 ml-12 my-10 pr-12 mb-4">
            <div className="flex">
                <img src={LabsuitLogo} alt="LabSuit" className="h-10 w-10" />
                <div className="text-2xl">LabSuit</div>
                {/* <a href="https://research.leminda.com" target="_blank">
                    <img src={globe} alt="https://research.leminda.com" className="ml-4 h-4 w-4" />
                </a> */}
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2015</span>
                <span className="text-yellow-500 mr-2">QA (internship)</span>at LabSuit, a web
                platform that enables managing, sharing and purchasing chemicals in research
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
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => {}}>
                            <img src={Trello} alt="trello" className="h-5 w-4 ml-auto mr-0.5" />
                            Trello
                        </span>
                        .
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default Labsuit;
