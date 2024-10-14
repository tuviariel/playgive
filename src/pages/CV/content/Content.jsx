import { useEffect, useState } from "react";
import TabBar from "./tabBar";
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
import Info from "./info";

export const Content = (props) => {
    const { content, setContent, setActionContent, setSkill, skill } = props;
    const [openNav, setOpenNav] = useState(["Welcome", "Summary"]);
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

    // console.log(openNav);
    return (
        <div className="block">
            <TabBar
                openNav={openNav}
                closeTag={closeTag}
                content={content}
                setContent={setContent}
            />
            <div className="flex h-full max-h-[330px] lg:max-h-[550px]">
                <div className="scrollbar overflow-y-auto pb-16 lg:pb-0">
                    <div className="text-slate-50 mx-6 lg:mx-12 my-5 lg:my-10">
                        {content === "Welcome" ? (
                            <Start
                                setActionContent={setActionContent}
                                setSkill={setSkill}
                                setContent={setContent}
                            />
                        ) : content === "Freelance" ? (
                            <Freelance setSkill={setSkill} />
                        ) : content === "Leminda.AI" ? (
                            <Leminda setSkill={setSkill} />
                        ) : content === "Beezi" ? (
                            <Beezi setSkill={setSkill} />
                        ) : content === "Va'ivrach" ? (
                            <Vaivrach setSkill={setSkill} />
                        ) : content === "Impact by Mati" ? (
                            <Impact setSkill={setSkill} />
                        ) : content === "LabSuit" ? (
                            <Labsuit setSkill={setSkill} />
                        ) : content === "John Bryce" ? (
                            <JB setSkill={setSkill} />
                        ) : content === "Teco1" ? (
                            <Teco setSkill={setSkill} />
                        ) : content === "Moreshet Ya'akov Collage" ? (
                            <Moreshet setSkill={setSkill} />
                        ) : content === "Summary" ? (
                            <Info setSkill={setSkill} />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <Timeline skill={skill} />
            </div>
            <Terminal />
        </div>
    );
};
