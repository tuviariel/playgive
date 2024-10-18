import ContactBar from "./contactBar";
import Free from "../assets/logoPic2.png";
import Leminda from "../assets/leminda.svg";
import Vaivrach from "../assets/vaivrach.jpg";
import Beezi from "../assets/BeeziB.svg";
import Impact from "../assets/impactB.png";
import Labsuit from "../assets/labsuit.png";
import JohnBryce from "../assets/JohnBryce.jpg";
import Moreshet from "../assets/מורשת יעקב.jpeg";
import Teco from "../assets/teco.png";
const TabBar = (props) => {
    const { openNav, closeTag, content, setContent } = props;
    const barWidth = window.screen.width - 160 - 56 - 224;
    // window.screen.width - 160timeline - 56tooltip - 224action
    return (
        <div className="flex h-8 w-full">
            <div
                className={` flex scrollbar overflow-x-auto bg-[#333333]`}
                style={{ width: barWidth }}>
                {openNav.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className={`${
                                content === item
                                    ? "bg-[#1e1e1e] border-b-0"
                                    : "bg-[#2d2d2d] cursor-pointer"
                            } min-w-fit w-fit px-2 h-7 mt-auto text-gray-300 flex border border-[#515151]`}>
                            <img
                                src={
                                    item === "Leminda.AI"
                                        ? Leminda
                                        : item === "Beezi"
                                        ? Beezi
                                        : item === "Va'ivrach"
                                        ? Vaivrach
                                        : item === "Impact"
                                        ? Impact
                                        : item === "LabSuit"
                                        ? Labsuit
                                        : item === "Teco1"
                                        ? Teco
                                        : item === "John Bryce"
                                        ? JohnBryce
                                        : item === "Moreshet"
                                        ? Moreshet
                                        : Free
                                }
                                alt={item}
                                className="mr-2 h-4 w-4 my-auto bg-slate-100 rounded-md border border-white"
                                onClick={() => setContent(item)}
                            />
                            <div className="my-auto" onClick={() => setContent(item)}>
                                {item}
                            </div>
                            {item !== "Welcome" && (
                                <div
                                    className="ml-2 mb-auto text-sm hover:bg-slate-600 rounded-md p-0.5 cursor-pointer"
                                    onClick={() => closeTag(item)}>
                                    x
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="ml-auto w-40 min-w-40 border border-[#37373d]">
                <ContactBar />
            </div>
        </div>
    );
};
export default TabBar;
