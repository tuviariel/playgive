import Free from "../assets/ProfilePicturePhoto.jpg";
import Leminda from "../assets/leminda.svg";
import Vaivrach from "../assets/vaivrach.jpg";
import Beezi from "../assets/BeeziB.svg";
import Impact from "../assets/impactB.png";
import Labsuit from "../assets/labsuit.png";
import JohnBryce from "../assets/JohnBryce.jpg";
import Moreshet from "../assets/מורשת יעקב.jpeg";
import Teco from "../assets/teco.png";
const Timeline = (props) => {
    const { skill } = props;
    return (
        <div className="relative min-w-36 ml-auto text-slate-100 text-justify border border-t-0  border-[#383838]">
            {/* <div className="bg-gradient-to-br from-fuchsia-800 to-[#1e1e1e] to-70% mx-auto rotate-45 translate-x-1/4 h-4 w-4"></div> */}
            <div className="absolute left-[50%] top-0 opacity-35 bg-fuchsia-800 mx-auto h-full w-1 z-10"></div>
            <div className="mt-8 mb-2 ml-2 underline text-white text-xs">
                Professional timeline:
            </div>
            <div className="flex mt-6 relative">
                {skill > 1 && skill <= 15 && skill !== 9 && (
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                )}
                <img src={Free} alt="Freelance" className="h-8 w-8 rounded-full m-2" />
                <div className="my-auto">2024-today</div>
            </div>
            <div className="flex relative">
                {((skill > 1 && skill <= 9 && skill !== 4) || skill === 13 || skill === 14) && (
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                )}
                <img
                    src={Leminda}
                    alt="Leminda.AI"
                    className="h-8 w-8 rounded-full m-2 bg-white p-1"
                />
                <div className="my-auto">2022-2023</div>
            </div>
            <div className="flex relative">
                {((skill > 1 && skill <= 4) ||
                    skill === 16 ||
                    skill === 14 ||
                    skill === 13 ||
                    skill === 25 ||
                    skill === 20) && (
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                )}
                <img src={Beezi} alt="Beezi" className="h-8 w-8 rounded-full m-2 bg-white" />
                <div className="my-auto">2020</div>
            </div>
            <div className="flex relative">
                {((skill > 1 && skill <= 4) ||
                    (skill <= 16 && skill >= 11) ||
                    skill === 22 ||
                    skill === 21 ||
                    skill === 6 ||
                    skill === 7) && (
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                )}
                <img src={Vaivrach} alt="Va'ivrach" className="h-8 w-8 rounded-full m-2" />
                <div className="my-auto">2017-2021</div>
            </div>
            <div className="flex relative">
                {((skill > 1 && skill <= 3) ||
                    (skill >= 13 && skill <= 15) ||
                    skill === 18 ||
                    skill === 5) && (
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                )}
                <img
                    src={Impact}
                    alt="Impact by Mati"
                    className="h-8 w-8 rounded-full m-2 bg-white"
                />
                <div className="my-auto">2016</div>
            </div>
            <div className="flex relative">
                {((skill > 1 && skill <= 3) ||
                    skill === 13 ||
                    skill === 14 ||
                    skill === 17 ||
                    skill === 23 ||
                    skill === 5 ||
                    skill === 22) && (
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                )}
                <div className="my-auto ml-auto">2015</div>
                <img src={JohnBryce} alt="John Bryce" className="h-8 w-8 rounded-full m-2" />
            </div>
            <div className="flex relative">
                {skill === 7 && (
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                )}
                <img src={Labsuit} alt="LabSuit" className="h-8 w-8 rounded-full m-2" />
                <div className="my-auto">2015</div>
            </div>
            <div className="flex relative">
                {(skill === 7 || skill === 21 || skill === 17 || skill === 24) && (
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                )}
                <div className=" ml-auto my-auto">2014</div>
                <img src={Teco} alt="Teco-1" className="h-8 w-8 rounded-full m-2" />
            </div>
            <div className="flex relative">
                <div className="my-auto ml-auto">2011-2014</div>
                <img src={Moreshet} alt="MoreshetYaakov" className="h-8 w-8 rounded-full m-2" />
            </div>
        </div>
    );
};
export default Timeline;
