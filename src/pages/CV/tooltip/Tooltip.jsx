import { useState } from "react";
import docIcon from "./assets/docs.png";
import searchIcon from "./assets/search.png";
import shareIcon from "./assets/share.png";
import extraIcon from "./assets/extra.png";
import screenIcon from "./assets/screen.png";
import debugIcon from "./assets/debug.png";
import userIcon from "./assets/user.png";
import settingsIcon from "./assets/settings.png";
import docHover from "./assets/docsHover.png";
import searchHover from "./assets/searchHover.png";
import shareHover from "./assets/shareHover.png";
import extraHover from "./assets/extraHover.png";
import screenHover from "./assets/screenHover.png";
import debugHover from "./assets/debugHover.png";
import userHover from "./assets/userHover.png";
import settingsHover from "./assets/settingsHover.png";

export const Tooltip = (props) => {
    const { current, actionContent, setActionContent } = props;
    const [hover, setHover] = useState(false);
    return (
        <div
            className={`relative px-3 cursor-pointer ${
                actionContent !== "settings" &&
                actionContent !== "user" &&
                current === actionContent
                    ? "border-l-2 border-white pl-2.5"
                    : ""
            } ${
                actionContent === "explorer"
                    ? "mt-3"
                    : actionContent === "debug"
                    ? "mb-auto"
                    : actionContent === "settings"
                    ? "mb-3"
                    : ""
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setActionContent(actionContent)}>
            <img
                src={
                    actionContent === "explorer"
                        ? hover
                            ? docHover
                            : docIcon
                        : actionContent === "search"
                        ? hover
                            ? searchHover
                            : searchIcon
                        : actionContent === "share"
                        ? hover
                            ? shareHover
                            : shareIcon
                        : actionContent === "extra"
                        ? hover
                            ? extraHover
                            : extraIcon
                        : actionContent === "screen"
                        ? hover
                            ? screenHover
                            : screenIcon
                        : actionContent === "debug"
                        ? hover
                            ? debugHover
                            : debugIcon
                        : actionContent === "user"
                        ? hover
                            ? userHover
                            : userIcon
                        : hover
                        ? settingsHover
                        : settingsIcon
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
