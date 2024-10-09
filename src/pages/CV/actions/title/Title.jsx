import { useState } from "react";
import dots from "../../assets/dots.png";
export const Title = (props) => {
    const { name, setBy, by } = props;
    const [open, setOpen] = useState(false);
    return (
        <div className="flex">
            <div className="text-gray-300 text-xs ml-5 mt-1 mr-auto capitalize">{name}</div>
            {name === "skills" && (
                <div className="relative">
                    <img
                        src={dots}
                        alt="display options"
                        className={`text-gray-300 text-xs ml-5 mt-1 mr-3 cursor-pointer border-2 border-[#252526] hover:border-[#37373d] rounded-md ${
                            open ? "border-[#37373d]" : ""
                        }`}
                        onClick={() => setOpen(!open)}
                    />
                    {open && (
                        <div className="absolute top-5 left-5 bg-[#252526] border border-[#37373d] rounded-md w-32 p-1 text-gray-300 text-xs">
                            <div
                                className="cursor-pointer rounded-md hover:bg-blue-600 p-1"
                                onClick={() => setBy("ascent")}>
                                Sort by A-B-C
                            </div>
                            <div
                                className="cursor-pointer rounded-md hover:bg-blue-600 p-1"
                                onClick={() => setBy("experience")}>
                                Sort by Experience
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
