import { useState } from "react";
import docIcon from "../assets/ProfilePicturePhoto.jpg";
import searchIcon from "../assets/ProfilePicturePhoto.jpg";
import shareIcon from "../assets/ProfilePicturePhoto.jpg";
import extraIcon from "../assets/ProfilePicturePhoto.jpg";
import screenIcon from "../assets/ProfilePicturePhoto.jpg";
import debugIcon from "../assets/ProfilePicturePhoto.jpg";
import userIcon from "../assets/ProfilePicturePhoto.jpg";
import settingsIcon from "../assets/ProfilePicturePhoto.jpg";
import docHover from "../assets/ProfilePicturePhoto.jpg";
import searchHover from "../assets/ProfilePicturePhoto.jpg";
import shareHover from "../assets/ProfilePicturePhoto.jpg";
import extraHover from "../assets/ProfilePicturePhoto.jpg";
import screenHover from "../assets/ProfilePicturePhoto.jpg";
import debugHover from "../assets/ProfilePicturePhoto.jpg";
import userHover from "../assets/ProfilePicturePhoto.jpg";
import settingsHover from "../assets/ProfilePicturePhoto.jpg";

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
                actionContent === "files"
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
                    actionContent === "files"
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
                <div className="border border-gray-400 bg-black text-white text-xs rounded-sm p-0.5 pl-1 -ml-1">
                    {actionContent === "files"
                        ? "Explorer"
                        : actionContent === "search"
                        ? "Search"
                        : actionContent === "share"
                        ? "Share"
                        : actionContent === "extra"
                        ? "Extra"
                        : actionContent === "screen"
                        ? "Screen"
                        : actionContent === "debug"
                        ? "Debug"
                        : actionContent === "user"
                        ? "User"
                        : "Settings"}
                </div>
            </div>
        </div>
    );
};
