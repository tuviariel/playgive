import { useEffect, useState } from "react";
import CV from "../assets/CV.png";
import Free from "../assets/ProfilePicturePhoto.jpg";
import Leminda from "../assets/leminda.svg";
import Vaivrach from "../assets/vaivrach.jpg";
import Beezi from "../assets/BeeziB.svg";
import Impact from "../assets/impactB.png";
import Labsuit from "../assets/labsuit.png";
import JohnBryce from "../assets/JohnBryce.jpg";
import Moreshet from "../assets/מורשת יעקב.jpeg";
import WhatsApp from "../assets/whatsapp.svg";
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";
import Terminal from "./terminal";
import Start from "./start";

export const Content = (props) => {
    const { content, setContent, setActionContent } = props;
    const [openNav, setOpenNav] = useState(["welcome"]);
    const [rerender, setRerender] = useState();

    useEffect(() => {
        if (openNav.includes(content)) {
        } else {
            let temp = openNav;
            temp.push(content);
            setOpenNav(temp);
        }
        setRerender(!rerender);
    }, [content]);

    const closeTag = (cont) => {
        let index = openNav.indexOf(cont);
        setContent(openNav[index - 1]);
        let temp = openNav;
        temp.splice(index, 1);
        setOpenNav(temp);
        setRerender(!rerender);
    };

    console.log(openNav);
    return (
        <div className="block h-96">
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
                                            : Labsuit
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
            <div className="flex">
                {content === "welcome" ? (
                    <Start setActionContent={setActionContent} />
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
                ) : content === "LabSuit" ? (
                    <div>Labsuit</div>
                ) : (
                    <div></div>
                )}
                <div className="relative w-36 ml-auto text-slate-100 text-justify border border-t-0  border-[#383838]">
                    {/* <div className="bg-gradient-to-br from-fuchsia-800 to-[#1e1e1e] to-70% mx-auto rotate-45 translate-x-1/4 h-4 w-4"></div> */}
                    <div className="absolute left-[50%] top-0 opacity-35 bg-fuchsia-800 mx-auto h-full w-1 z-10"></div>
                    {/* <div className="mt-8 mb-2 ml-2 underline text-fuchsia-800">
                        Professional timeline:
                    </div> */}
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
