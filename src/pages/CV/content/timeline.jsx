import Free from "../assets/ProfilePicturePhoto.jpg";
import Leminda from "../assets/leminda.svg";
import Vaivrach from "../assets/vaivrach.jpg";
import Beezi from "../assets/BeeziB.svg";
import Impact from "../assets/impactB.png";
import Labsuit from "../assets/labsuit.png";
import JohnBryce from "../assets/JohnBryce.jpg";
import Moreshet from "../assets/מורשת יעקב.jpeg";
const Timeline = (props) => {
    const {} = props;
    return (
        <div className="relative min-w-36 ml-auto text-slate-100 text-justify border border-t-0  border-[#383838]">
            {/* <div className="bg-gradient-to-br from-fuchsia-800 to-[#1e1e1e] to-70% mx-auto rotate-45 translate-x-1/4 h-4 w-4"></div> */}
            <div className="absolute left-[50%] top-0 opacity-35 bg-fuchsia-800 mx-auto h-full w-1 z-10"></div>
            <div className="mt-8 mb-2 ml-2 underline text-white text-xs">
                Professional timeline:
            </div>
            <div className="flex mt-6">
                <img src={Free} alt="Freelance" className="h-8 w-8 rounded-full m-2" />
                <div className="my-auto">2024-today</div>
            </div>
            <div className="flex">
                <img
                    src={Leminda}
                    alt="Leminda.AI"
                    className="h-8 w-8 rounded-full m-2 bg-white p-1"
                />
                <div className="my-auto">2022-2023</div>
            </div>
            <div className="flex">
                <img src={Beezi} alt="Beezi" className="h-8 w-8 rounded-full m-2 bg-white" />
                <div className="my-auto">2020</div>
            </div>
            <div className="flex">
                <img src={Vaivrach} alt="Va'ivrach" className="h-8 w-8 rounded-full m-2" />
                <div className="my-auto">2017-2021</div>
            </div>
            <div className="flex">
                <img
                    src={Impact}
                    alt="Impact by Mati"
                    className="h-8 w-8 rounded-full m-2 bg-white"
                />
                <div className="my-auto">2016</div>
            </div>
            <div className="flex">
                <div className="my-auto ml-auto">2015</div>
                <img src={JohnBryce} alt="John Bryce" className="h-8 w-8 rounded-full m-2" />
            </div>
            <div className="flex">
                <img src={Labsuit} alt="LabSuit" className="h-8 w-8 rounded-full m-2" />
                <div className="my-auto">2015</div>
            </div>
            <div className="flex">
                <div className=" ml-auto my-auto">2014</div>
                <div className="h-8 w-8 rounded-full m-2 bg-white text-blue-800 pt-2 text-xs font-bold">
                    Teco1
                </div>
            </div>
            <div className="flex">
                <div className="my-auto ml-auto">2011-2014</div>
                <img src={Moreshet} alt="MoreshetYaakov" className="h-8 w-8 rounded-full m-2" />
            </div>
        </div>
    );
};
export default Timeline;
