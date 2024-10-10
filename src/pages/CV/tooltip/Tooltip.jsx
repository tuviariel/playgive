import { useState } from "react";
import experienceIcon from "./assets/work.svg";
import educationIcon from "./assets/education.svg";
import skillsIcon from "./assets/skills.svg";
import experienceHover from "./assets/workHover.svg";
import educationHover from "./assets/educationHover.svg";
import skillsHover from "./assets/skillsHover.svg";
import summaryHover from "./assets/summaryHover.svg";
import summaryIcon from "./assets/summary.svg";

export const Tooltip = (props) => {
    const { current, actionContent, setActionContent, setContent } = props;
    const [hover, setHover] = useState(false);
    return (
        <div
            className={`relative px-3 cursor-pointer ${
                current === actionContent ? "border-l-2 border-white pl-2.5" : ""
            } ${actionContent === "experience" ? "mt-3" : ""}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() =>
                actionContent === "summary"
                    ? setContent("summary")
                    : setActionContent(actionContent)
            }>
            <img
                src={
                    actionContent === "experience"
                        ? hover || current === "experience"
                            ? experienceHover
                            : experienceIcon
                        : actionContent === "education"
                        ? hover || current === "education"
                            ? educationHover
                            : educationIcon
                        : actionContent === "skills"
                        ? hover || current === "skills"
                            ? skillsHover
                            : skillsIcon
                        : actionContent === "summary"
                        ? hover || current === "summary"
                            ? summaryHover
                            : summaryIcon
                        : ""
                }
                alt={"my-" + actionContent}
                className="w-10 h-auto"
            />
            <div className={hover ? "flex absolute left-10 bottom-1" : "hidden"}>
                <div className="bg-black border border-gray-400 border-t-0 border-r-0 rotate-45 h-1.5 w-1.5 z-10 mt-2"></div>
                <div className="border border-gray-400 bg-black text-white text-xs rounded-sm p-0.5 pl-1 -ml-1 capitalize">
                    {actionContent}
                </div>
            </div>
        </div>
    );
};
