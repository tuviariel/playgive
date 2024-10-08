import { useEffect, useState } from "react";
import TabBar from "./tabBar";
// import CV from "../assets/CV.png";
// import Free from "../assets/ProfilePicturePhoto.jpg";
// import LemindaL from "../assets/leminda.svg";
// import VaivrachL from "../assets/vaivrach.jpg";
// import Beezi from "../assets/BeeziB.svg";
// import Impact from "../assets/impactB.png";
// import Labsuit from "../assets/labsuit.png";
// import JohnBryce from "../assets/JohnBryce.jpg";
// import Moreshet from "../assets/מורשת יעקב.jpeg";
// import WhatsApp from "../assets/whatsapp.svg";
// import Phone from "../assets/phone.svg";
// import Email from "../assets/email.svg";
import Terminal from "./terminal";
import Start from "./start";
import Timeline from "./timeline";
import Leminda from "./leminda";
import Vaivrach from "./vaivrach";
import Freelance from "./freelance";
import Labsuit from "./labsuit";
import Beezi from "./beezi";
import Impact from "./impact";
import JB from "./johnBryce";
import Teco from "./Teco1";
import Moreshet from "./Moreshet";

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
            <TabBar
                openNav={openNav}
                closeTag={closeTag}
                content={content}
                setContent={setContent}
            />
            <div className="flex">
                {content === "welcome" ? (
                    <Start setActionContent={setActionContent} />
                ) : content === "Freelance" ? (
                    <Freelance setActionContent={setActionContent} />
                ) : content === "Leminda.AI" ? (
                    <Leminda setActionContent={setActionContent} />
                ) : content === "Beezi" ? (
                    <Beezi setActionContent={setActionContent} />
                ) : content === "Va'ivrach" ? (
                    <Vaivrach setActionContent={setActionContent} />
                ) : content === "Impact by Mati" ? (
                    <Impact setActionContent={setActionContent} />
                ) : content === "LabSuit" ? (
                    <Labsuit setActionContent={setActionContent} />
                ) : content === "John Bryce" ? (
                    <JB setActionContent={setActionContent} />
                ) : content === "Teco1" ? (
                    <Teco setActionContent={setActionContent} />
                ) : content === "Moreshet Ya'akov Collage" ? (
                    <Moreshet setActionContent={setActionContent} />
                ) : (
                    <div></div>
                )}
                <Timeline />
            </div>
            <Terminal />
        </div>
    );
};
