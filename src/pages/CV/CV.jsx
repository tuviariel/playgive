import { useEffect, useState } from "react";
import Tooltip from "./tooltip";
import portrait from "./assets/ProfilePicturePhoto.jpg";
import Files from "./files";
import Actions from "./actions";
export const CV = () => {
    const [actionContent, setActionContent] = useState("explorer");
    return (
        <div className="h-screen">
            <div className="bg-[#3c3c3c] h-[8%] w-full p-3 flex text-gray-300">
                <img src={portrait} alt="my-logo" className="mr-5 h-full w-auto rounded-full" />
                <div className="mt-1">
                    My name is Tuvia Ariel and I'm a Full Stack / Front End Web Developer
                </div>
            </div>
            <div className="flex flex-row h-[92%]">
                <div className="bg-[#333333] w-16 flex flex-col gap-4 content-start">
                    <Tooltip
                        current={actionContent}
                        actionContent={"explorer"}
                        setActionContent={setActionContent}
                    />
                    <Tooltip
                        current={actionContent}
                        actionContent={"search"}
                        setActionContent={setActionContent}
                    />
                    <Tooltip
                        current={actionContent}
                        actionContent={"share"}
                        setActionContent={setActionContent}
                    />
                    <Tooltip
                        current={actionContent}
                        actionContent={"extra"}
                        setActionContent={setActionContent}
                    />
                    <Tooltip
                        current={actionContent}
                        actionContent={"screen"}
                        setActionContent={setActionContent}
                    />
                    <Tooltip
                        current={actionContent}
                        actionContent={"debug"}
                        setActionContent={setActionContent}
                    />
                    <Tooltip
                        current={actionContent}
                        actionContent={"user"}
                        setActionContent={setActionContent}
                    />
                    <Tooltip
                        current={actionContent}
                        actionContent={"settings"}
                        setActionContent={setActionContent}
                    />
                </div>
                <div className="w-80 bg-[#252526]">
                    <Actions action={actionContent} />
                </div>
                <div className="w-full bg-[#1e1e1e]">{/* <Content content={data} /> */}</div>
            </div>
        </div>
    );
};
