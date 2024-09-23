import { useState } from "react";
import arrow from "../../assets/arrow-down.svg";
import Free from "../../assets/ProfilePicturePhoto.jpg";
import Leminda from "../../assets/ProfilePicturePhoto.jpg";
import Beezi from "../../assets/ProfilePicturePhoto.jpg";
import Vaivrach from "../../assets/ProfilePicturePhoto.jpg";
import Impact from "../../assets/ProfilePicturePhoto.jpg";
import LabSuit from "../../assets/ProfilePicturePhoto.jpg";
import Years from "../../assets/year.svg";

export const Experience = (props) => {
    const { content, setContent } = props;
    const exp = [
        ["Freelance", "2024-today", "Full-Stack Web Developer", 0],
        ["Leminda.AI", "2022-2023", "Front-End Web Developer", 1],
        ["Beezi.app", "2019", "Front-End Web Developer", 2],
        ["Va'ivrach", "2017-2021", "Full-Stack Web Developer", 3],
        ["Impact by Mati", "2016", "Full-Stack Web Developer", 4],
        ["LabSute", "2014", "QA", 5],
    ];
    const [open, setOpen] = useState([true, true, true, true, true, true]);
    console.log(content);
    return (
        <>
            {exp.map((ex, i) => {
                return (
                    <div
                        key={i}
                        className={`block mt-4 text-gray-400 hover:bg-[#2A2D2E] text-sm ${
                            content === exp[0] ? "bg-[#37373d]" : ""
                        }`}>
                        <div className="flex">
                            <img
                                src={arrow}
                                alt=""
                                className={`h-6 w-6 mt-2 cursor-pointer ${
                                    open[i] ? "" : "rotate-90"
                                }`}
                                onClick={() =>
                                    setOpen((prev) => {
                                        let item = !prev[i];
                                        return [...prev, (prev[i] = item)];
                                    })
                                }
                            />
                            <img
                                src={
                                    ex[3] === 0
                                        ? Free
                                        : ex[3] === 1
                                        ? Leminda
                                        : ex[3] === 2
                                        ? Beezi
                                        : ex[3] === 3
                                        ? Vaivrach
                                        : ex[3] === 4
                                        ? Impact
                                        : LabSuit
                                }
                                alt={ex[0]}
                                className="h-8 w-8 "
                            />
                            <div className="font-bold cursor-pointer">{ex[0]}</div>
                        </div>
                        {open[i] ? (
                            <div className="block ml-8" onClick={() => setContent(ex[0])}>
                                <div className="flex">
                                    <img src={Free} alt="Job Title" className="h-8 w-8" />
                                    <div className="">{ex[2]}</div>
                                </div>
                                <div className="flex">
                                    <img src={Years} alt="Year(s)" className="h-8 w-8" />
                                    <div className="">
                                        {"Year" +
                                            (ex[1].length > 4 ? "s" : "") +
                                            ": " +
                                            ex[1] +
                                            "."}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                );
            })}
        </>
    );
};
