import { useEffect, useState } from "react";
import Tooltip from "./tooltip";
import portrait from "./assets/ProfilePicturePhoto.jpg";
import Files from "./actions/experience";
import Actions from "./actions";
import Content from "./content";

const CV = () => {
    const [actionContent, setActionContent] = useState("experience");
    const [content, setContent] = useState("welcome");
    const tooltips = [
        "experience",
        "education",
        "skills",
        // "communication",
        // "location",
        "information",
    ];
    return (
        <div className="h-screen overflow-hidden">
            <div className="bg-[#3c3c3c] h-[8%] w-full p-3 flex text-gray-300">
                <img src={portrait} alt="my-logo" className="mr-5 h-full w-auto rounded-full" />
                <div className="mt-1 flex">
                    Tuvia Ariel | Full Stack / Front End Web Developer
                    <div className="bg-[#464646] border border-[#505050] rounded-md py-auto px-24 ml-36 flex">
                        CV review
                    </div>
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
                            />
                        );
                    })}
                </div>
                <div className="w-80 bg-[#252526]">
                    <Actions action={actionContent} content={content} setContent={setContent} />
                </div>
                <div className="w-full bg-[#1e1e1e]">
                    <Content content={content} setContent={setContent} />
                </div>
            </div>
        </div>
    );
};
export default CV;
