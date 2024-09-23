import { useEffect, useState } from "react";
import CV from "../assets/CV.png";
import Free from "../assets/ProfilePicturePhoto.jpg";
import Leminda from "../assets/leminda.svg";
import Vaivrach from "../assets/vaivrach.jpg";
import Beezi from "../assets/beezi.svg";
import Impact from "../assets/impact.png";
import Labsuit from "../assets/labsuit.png";
import JohnBryce from "../assets/JohnBryce.jpg";
import Moreshet from "../assets/מורשת יעקב.jpeg";
import WhatsApp from "../assets/whatsapp.svg";
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";
import Terminal from "./terminal";
export const Content = (props) => {
    const { content, setContent } = props;
    const [openNav, setOpenNav] = useState(["welcome"]);

    useEffect(() => {
        if (!openNav.includes(content)) {
            setOpenNav((prev) => {
                return prev.push(content);
            });
            setContent(content);
        }
    }, [content]);

    const closeTag = (cont) => {
        console.log(cont);
        let index = openNav.indexOf(cont);
        setContent(openNav[index - 1]);
        setOpenNav((prev) => {
            return prev.splice(index, 1);
        });
    };

    console.log(content);
    return (
        <div className="block h-96">
            <div className="flex h-9 w-auto">
                <div className="overflow-x-auto w-full">
                    {openNav.length > 0 &&
                        openNav.map((item) => {
                            <div
                                className={`${
                                    content === item ? "bg-[#1e1e1e]" : "bg-[#2d2d2d]"
                                } min-w-fit px-2 py-auto flex`}>
                                <img src={content} alt={content} className="mr-2" />
                                {content}
                                <div className="ml-2" onClick={() => closeTag(content)}>
                                    X
                                </div>
                            </div>;
                        })}
                </div>
                <a href="tel:+972-509-31-5511" className="ml-auto">
                    <img src={Phone} alt="Phone" className="h-7 w-7 m-2" />
                </a>
                <a href="https://wa.me/972509315511?text=Hey%20Tuvia%2C%20I%27d%20like%20to%20interest%20you%20in%20a%20job%20at...">
                    <img src={WhatsApp} alt="WhatsApp" className="h-7 w-7 m-2" />
                </a>
                <a href="mailto:tuviaa109@gmail.com?subject=Job%20Opportunity&body=Hey%20Tuvia%2C%20I%27d%20like%20to%20interest%20you%20in%20a%20job%20at...">
                    <img src={Email} alt="Email" className="h-7 w-7 m-2" />
                </a>
            </div>
            <div className="flex">
                {content === "welcome" ? (
                    <div className="text-slate-50 ml-5">
                        <div className="text-lg">Welcome to My CV Site</div>
                    </div>
                ) : content === "Free" ? (
                    <div>Free</div>
                ) : content === "Leminda.AI" ? (
                    <div>Leminda.AI</div>
                ) : content === "Beezi.app" ? (
                    <div>Beezi.app</div>
                ) : content === "Va'ivrach" ? (
                    <div>Va'ivrach</div>
                ) : content === "Impact" ? (
                    <div>Impact</div>
                ) : content === "LabSute" ? (
                    <div>Labsuit</div>
                ) : (
                    <div></div>
                )}
                <div className="relative max-w-56 ml-auto text-slate-100 text-justify border border-t-0  border-[#383838]">
                    {/* <div className="bg-gradient-to-br from-fuchsia-800 to-[#1e1e1e] to-70% mx-auto rotate-45 translate-x-1/4 h-4 w-4"></div> */}
                    <div className="absolute left-[50%] top-0 opacity-35 bg-fuchsia-800 mx-auto h-full w-1 z-10"></div>
                    <div className="flex">
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
                        <img
                            src={Beezi}
                            alt="Beezi"
                            className="h-8 w-8 rounded-full m-2 bg-white"
                        />
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
                        <img
                            src={JohnBryce}
                            alt="John Bryce"
                            className="h-8 w-8 rounded-full m-2"
                        />
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
                        <img
                            src={Moreshet}
                            alt="MoreshetYaakov"
                            className="h-8 w-8 rounded-full m-2"
                        />
                    </div>
                </div>
            </div>
            <Terminal />
        </div>
    );
};
