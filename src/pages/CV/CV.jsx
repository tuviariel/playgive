import { useEffect, useState } from "react";
import Tooltip from "./tooltip";
import portrait from "./assets/ProfilePicturePhoto.jpg";
import Actions from "./actions";
import Content from "./content";
import ContactBar from "./content/contactBar";
import MyLinks from "./content/myLinks";
import VSCode from "./assets/vs-code.svg";

const CV = () => {
    const [actionContent, setActionContent] = useState("experience");
    const [content, setContent] = useState("welcome");
    const [skill, setSkill] = useState(0);
    const tooltips = ["experience", "education", "skills", "summary"];

    useEffect(() => {
        if (skill > 0) {
            setTimeout(() => {
                setSkill(0);
            }, 1500);
        }
    }, [skill]);
    return (
        <>
            <div className="h-screen w-screen bg-[#252526] sm:hidden p-3 text-white">
                <div className="flex w-full">
                    <img src={portrait} alt="my-logo" className="h-14 w-auto rounded-full" />
                    <img src={VSCode} alt="VS Code" className="ml-auto h-14 w-auto" />
                </div>
                <div className="text-xl my-3">Welcome!</div>
                <div className="text-lg mb-2">
                    I'm Tuvia Ariel, a Full Stack / Front End Web Developer
                </div>
                <div className="text-base mb-2">
                    It seems you are using a Phone to view my CV site. It is recommended to move to
                    a desk-top screen. If that is not posable at the moment you may try to turn the
                    phone on it's side to see if it shows...
                </div>
                <div className="text-base mb-2">
                    Anyway, feel free to contact me in any way you'd like through the fallowing
                    links:
                </div>
                <div className="ml-auto mb-2">
                    <ContactBar />
                </div>
                <div className="mb-2">
                    Or to read a bit about my experience through the fallowing links:
                </div>
                <div className="ml-2">
                    <MyLinks />
                </div>
                <div className="my-2">
                    In the meanwhile, have a great day and good luck with everything!
                </div>
                <div className="mb-2 ml-3">Tuvia</div>
            </div>
            <div className="h-screen w-screen overflow-hidden hidden sm:block">
                <div className="bg-[#3c3c3c] h-[8%] w-full p-3 flex text-gray-300 relative">
                    <img src={portrait} alt="my-logo" className="mr-5 h-full w-auto rounded-full" />
                    <div className="mt-1">Tuvia Ariel</div>
                    <div className="mt-1 ml-auto">Full Stack / Front End Web Developer</div>
                    <div className="absolute translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2 bg-[#464646] border border-[#505050] rounded-md py-auto px-24 flex ">
                        CV review
                    </div>
                </div>
                <div className="flex flex-row h-[92%]">
                    <div className="bg-[#333333] w-16 flex flex-col gap-4 content-start">
                        {tooltips.map((tooltip, i) => {
                            return (
                                <Tooltip
                                    key={i}
                                    current={actionContent}
                                    actionContent={tooltip}
                                    setActionContent={setActionContent}
                                    setContent={setContent}
                                />
                            );
                        })}
                        <img src={VSCode} alt="VS Code" className="mt-auto mx-auto mb-3 h-8 w-8" />
                    </div>
                    <div className="w-80 bg-[#252526]">
                        <Actions
                            action={actionContent}
                            content={content}
                            setContent={setContent}
                            setSkill={setSkill}
                        />
                    </div>
                    <div className="w-full bg-[#1e1e1e]">
                        <Content
                            content={content}
                            setContent={setContent}
                            setActionContent={setActionContent}
                            skill={skill}
                            setSkill={setSkill}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default CV;
