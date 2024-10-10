import { useEffect, useState } from "react";
import Tooltip from "./tooltip";
import portrait from "./assets/ProfilePicturePhoto.jpg";
import Files from "./actions/experience";
import Actions from "./actions";
import Content from "./content";
import ContactBar from "./content/contactBar";

const CV = () => {
    const [actionContent, setActionContent] = useState("experience");
    const [content, setContent] = useState("welcome");
    const [skill, setSkill] = useState(0);
    const tooltips = ["experience", "education", "skills", "information"];

    useEffect(() => {
        if (skill > 0) {
            setTimeout(() => {
                setSkill(0);
            }, 1500);
        }
    }, [skill]);
    return (
        <>
            <div className="h-screen bg-[#252526] sm:hidden p-3 text-white">
                <img src={portrait} alt="my-logo" className="h-14 w-auto rounded-full" />

                <div className="text-xl my-3">Welcome!</div>
                <div className="text-lg mb-2">
                    I'm Tuvia Ariel and I'm a Full Stack / Front End Web Developer
                </div>
                <div className="text-base mb-2">
                    It seems you are using a Phone to view my CV site. It is recommended to move to
                    a desk-top screen. If that is not posable at the moment you may try to turn the
                    phone on it's side to see if it shows...
                </div>
                <div className="text-base mb-2">
                    Anyway, feel free to contact my in any way you'd like through the fallowing
                    links:
                </div>
                <div className="ml-auto mb-2">
                    <ContactBar />
                </div>
                <div className="">
                    Or to read a bit about my experience through the fallowing links:
                </div>
                <>
                    <div className="flex">
                        <a
                            href="https://www.linkedin.com/in/tuviaariel"
                            target="_blank"
                            className="text-[#3094DB] cursor-pointer mr-4">
                            LinkedIn
                        </a>
                        <a href="https://www.linkedin.com/in/tuviaariel" target="_blank">
                            https://www.linkedin.com/in/tuviaariel
                        </a>
                    </div>
                    <div className="flex">
                        <a
                            href="https://github.com/tuviariel"
                            target="_blank"
                            className="text-[#3094DB] cursor-pointer mr-4">
                            GitHub
                        </a>
                        <a href="https://github.com/tuviariel" target="_blank">
                            https://github.com/tuviariel
                        </a>
                    </div>
                    <div className="flex">
                        <a
                            href="https://drive.google.com/file/d/1FnZzBuBIY7hDpP5wSE_omyU1E9Fx76ZF/view?usp=sharing"
                            target="_blank"
                            className="text-[#3094DB] cursor-pointer mr-4">
                            CV
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1FnZzBuBIY7hDpP5wSE_omyU1E9Fx76ZF/view?usp=sharing"
                            target="_blank">
                            https://drive.google.com/file/[my-cv]
                        </a>
                    </div>
                </>
            </div>
            <div className="h-screen overflow-hidden hidden sm:block">
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
