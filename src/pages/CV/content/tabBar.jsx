import WhatsApp from "../assets/whatsapp.svg";
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";

import Free from "../assets/ProfilePicturePhoto.jpg";
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
    return (
        <div className="flex h-9 w-auto">
            <div className="scrollbar overflow-x-auto w-full bg-[#333333] flex">
                {openNav.map((item) => {
                    return (
                        <div
                            className={`${
                                content === item ? "bg-[#1e1e1e]" : "bg-[#2d2d2d]"
                            } min-w-fit w-fit px-2 h-7 mt-auto text-gray-300 flex border border-[#515151] cursor-pointer`}>
                            <img
                                src={
                                    item === "welcome"
                                        ? Free
                                        : item === "Freelance"
                                        ? Free
                                        : item === "Leminda.AI"
                                        ? Leminda
                                        : item === "Beezi.app"
                                        ? Beezi
                                        : item === "Va'ivrach"
                                        ? Vaivrach
                                        : item === "Impact by Mati"
                                        ? Impact
                                        : item === "Labsuit"
                                        ? Labsuit
                                        : item === "Teco1"
                                        ? Teco
                                        : item === "John Bryce"
                                        ? JohnBryce
                                        : Moreshet
                                }
                                alt={item}
                                className="mr-2 h-4 w-4 my-auto bg-slate-100 rounded-md"
                                onClick={() => setContent(item)}
                            />
                            <div className="my-auto" onClick={() => setContent(item)}>
                                {item}
                            </div>
                            {item !== "welcome" && (
                                <div
                                    className="ml-2 my-auto text-sm hover:bg-slate-600 rounded-md p-0.5 cursor-pointer"
                                    onClick={() => closeTag(item)}>
                                    x
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <a href="tel:+972-509-31-5511" className="ml-auto">
                <img src={Phone} alt="Phone" className="h-7 w-7 m-3 mt-1" />
            </a>
            <a href="https://wa.me/972509315511?text=Hey%20Tuvia%2C%20I%27d%20like%20to%20interest%20you%20in%20a%20job%20at...">
                <img src={WhatsApp} alt="WhatsApp" className="h-7 w-7 m-3 mt-1" />
            </a>
            <a href="mailto:tuviaa109@gmail.com?subject=Job%20Opportunity&body=Hey%20Tuvia%2C%20I%27d%20like%20to%20interest%20you%20in%20a%20job%20at...">
                <img src={Email} alt="Email" className="h-7 w-7 m-3 mt-1" />
            </a>
        </div>
    );
};
export default TabBar;
