import Free from "../assets/logoPic2.png";
import Leminda from "../assets/leminda.svg";
import Vaivrach from "../assets/vaivrach.jpg";
import Beezi from "../assets/BeeziB.svg";
import Impact from "../assets/impactB.png";
import Labsuit from "../assets/labsuit.png";
import JohnBryce from "../assets/JohnBryce.jpg";
import Moreshet from "../assets/מורשת יעקב.jpeg";
import Teco from "../assets/teco.png";
// import JobsIcon from "../tooltip/assets/work.svg";
// import ProjectsIcon from "../tooltip/assets/info.svg";
// import SchoolIcon from "../tooltip/assets/education.svg";
const Timeline = (props) => {
    const { skill, setContent, content, route } = props;
    return (
        <div
            className={`relative w-40 min-w-40 h-full max-h-[330px] lg:max-h-[550px] ml-auto text-slate-100 text-justify border border-t-0 border-b-0 border-[#383838] scrollbar overflow-y-auto`}>
            {/* <div
                className={`absolute left-[50%] top-0 opacity-35 bg-fuchsia-800 mx-auto h-full w-1 z-10`}></div> */}
            <div
                className={`mt-3 mb-2 ml-2 underline text-xs ${
                    skill !== 0 ? "text-yellow-500" : "text-fuchsia-100"
                }`}>
                Professional timeline:
            </div>
            {/* <div className="grid grid-rows-10 grid-flow-col gap-1">
                <div className="p-1 flex">
                    <img src={JobsIcon} alt="Jobs" className="h-7 w-7 " />
                </div>
                <div className="rounded-sm p-1 border border-slate-200">
                    <img src={Free} alt="Freelance" className="h-7 w-7 m-auto" />
                </div>
                <div className="row-span-2 rounded-sm p-1 border border-slate-200 flex">
                    <img src={Leminda} alt="Leminda.AI" className=" h-7 w-7 m-auto" />
                </div>
                <div className="row-span-3 rounded-sm p-1 border border-slate-200 flex">
                    <img src={Vaivrach} alt="Va'ivrach" className="row-span-3 h-7 w-7 m-auto" />
                </div>
                <div className="row-span-1 rounded-sm p-1 border border-slate-200 flex">
                    <img src={Impact} alt="Impact" className=" h-7 w-7 m-auto" />
                </div>
                <div className="row-span-2 rounded-sm p-1 border border-slate-200"></div>
                <div className="p-1 flex">
                    <img src={ProjectsIcon} alt="Progects" className=" h-7 w-7 m-auto" />
                </div>
                <div className="row-span-3 h-7 w-7"></div>
                <img src={Beezi} alt="Beezi" className=" h-7 w-7" />
                <div className="row-span-5 h-7 w-7"></div>
                <img src={SchoolIcon} alt="School" className=" h-7 w-7" />
                <div className="row-span-7 h-7 w-7"></div>
                <img src={JohnBryce} alt="John Bryce" className=" h-7 w-7" />
                <img src={Teco} alt="Teco1" className=" h-7 w-7" />
                <div className="text-sm rotate-90">2024</div>
                <div className="text-sm rotate-90">2023</div>
                <div className="text-sm rotate-90">2022</div>
                <div className="text-sm rotate-90">2021</div>
                <div className="text-sm rotate-90">2020</div>
                <div className="text-sm rotate-90">2019</div>
                <div className="text-sm rotate-90">2018</div>
                <div className="text-sm rotate-90">2017</div>
                <div className="text-sm rotate-90">2016</div>
                <div className="text-sm rotate-90">2015</div>
            </div> */}
            <div
                className={`flex mt-6 cursor-pointer hover:bg-[#37373d] ${
                    content === "Freelance" ? "bg-[#303030]" : ""
                }`}
                onClick={() => setContent("Freelance")}>
                <div className="h-8 w-8 relative rounded-full m-2">
                    {skill >= 1 && skill <= 15 && skill !== 9 && (
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                    )}
                    <img src={Free} alt="Freelance" className="relative h-8 w-8 rounded-full" />
                </div>
                <div className="my-auto">2024-today</div>
            </div>
            <div
                className={`flex cursor-pointer hover:bg-[#37373d] ${
                    content === "Leminda.AI" ? "bg-[#303030]" : ""
                }`}
                onClick={() => setContent("Leminda.AI")}>
                <div className="h-8 w-8 relative rounded-full m-2">
                    {((skill >= 1 && skill <= 9 && skill !== 4) ||
                        skill === 13 ||
                        skill === 14 ||
                        skill === 19) && (
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                    )}
                    <img
                        src={Leminda}
                        alt="Leminda.AI"
                        className="relative h-8 w-8 rounded-full bg-white p-1"
                    />
                </div>
                <div className="my-auto">2022-2023</div>
            </div>
            <div
                className={`flex cursor-pointer hover:bg-[#37373d] ${
                    content === "Beezi" ? "bg-[#303030]" : ""
                }`}
                onClick={() => setContent("Beezi")}>
                <div className="h-8 w-8 relative rounded-full m-2">
                    {((skill >= 1 && skill <= 4) ||
                        skill === 16 ||
                        skill === 14 ||
                        skill === 13 ||
                        skill === 25 ||
                        skill === 20) && (
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                    )}
                    <img
                        src={Beezi}
                        alt="Beezi"
                        className="relative h-8 w-8 rounded-full bg-white"
                    />
                </div>
                <div className="my-auto">2020</div>
            </div>
            <div
                className={`flex cursor-pointer hover:bg-[#37373d] ${
                    content === "Va'ivrach" ? "bg-[#303030]" : ""
                }`}
                onClick={() => setContent("Va'ivrach")}>
                <div className="h-8 w-8 relative rounded-full m-2">
                    {((skill >= 1 && skill <= 4) ||
                        (skill <= 16 && skill >= 11) ||
                        skill === 22 ||
                        skill === 21 ||
                        skill === 6 ||
                        skill === 7) && (
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                    )}
                    <img src={Vaivrach} alt="Va'ivrach" className="relative h-8 w-8 rounded-full" />
                </div>
                <div className="my-auto">2017-2021</div>
            </div>
            <div
                className={`flex cursor-pointer hover:bg-[#37373d] ${
                    content === "Impact" ? "bg-[#303030]" : ""
                }`}
                onClick={() => setContent("Impact")}>
                <div className="h-8 w-8 relative rounded-full m-2">
                    {((skill >= 1 && skill <= 3) ||
                        (skill >= 13 && skill <= 15) ||
                        skill === 18 ||
                        skill === 5) && (
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                    )}
                    <img
                        src={Impact}
                        alt="Impact by Mati"
                        className="relative h-8 w-8 rounded-full bg-white"
                    />
                </div>
                <div className="my-auto">2016</div>
            </div>
            <div
                className={`flex cursor-pointer hover:bg-[#37373d] ${
                    content === "John Bryce" ? "bg-[#303030]" : ""
                }`}
                onClick={() => setContent("John Bryce")}>
                <div className="my-auto ml-auto">2015</div>
                <div className="h-8 w-8 relative rounded-full m-2">
                    {((skill > 1 && skill <= 3) ||
                        skill === 13 ||
                        skill === 14 ||
                        skill === 17 ||
                        skill === 23 ||
                        skill === 5 ||
                        skill === 22) && (
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                    )}
                    <img
                        src={JohnBryce}
                        alt="John Bryce"
                        className="relative h-8 w-8 rounded-full"
                    />
                </div>
            </div>
            {(route === "/qa" || route === "/all") && (
                <div
                    className={`flex cursor-pointer hover:bg-[#37373d] ${
                        content === "LabSuit" ? "bg-[#303030]" : ""
                    }`}
                    onClick={() => setContent("LabSuit")}>
                    <div className="h-8 w-8 relative rounded-full m-2">
                        {skill === 7 && (
                            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                        )}
                        <img
                            src={Labsuit}
                            alt="LabSuit"
                            className="relative h-8 w-8 rounded-full"
                        />
                    </div>
                    <div className="my-auto">2015</div>
                </div>
            )}
            <div
                className={`flex ${
                    route !== "/all" ? "pb-16 lg:pb-0" : ""
                } cursor-pointer hover:bg-[#37373d] ${content === "Teco1" ? "bg-[#303030]" : ""}`}
                onClick={() => setContent("Teco1")}>
                <div className="ml-auto my-auto">2014</div>
                <div className="h-8 w-8 relative rounded-full m-2">
                    {(skill === 7 || skill === 21 || skill === 17 || skill === 24) && (
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                    )}
                    <img src={Teco} alt="Teco-1" className="relative h-8 w-8 rounded-full" />
                </div>
            </div>
            {route === "/all" && (
                <div
                    className={`flex pb-16 lg:pb-0 cursor-pointer hover:bg-[#37373d] ${
                        content === "Moreshet" ? "bg-[#303030]" : ""
                    }`}
                    onClick={() => setContent("Moreshet")}>
                    <div className="my-auto ml-auto">2011-2014</div>
                    <img src={Moreshet} alt="MoreshetYaakov" className="h-8 w-8 rounded-full m-2" />
                </div>
            )}
        </div>
    );
};
export default Timeline;
