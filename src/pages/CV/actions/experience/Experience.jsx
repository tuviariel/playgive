import { useState } from "react";
import arrow from "../../assets/arrow-down.svg";
import Free from "../../assets/logoPic2.png";
import Leminda from "../../assets/leminda.svg";
import Beezi from "../../assets/BeeziB.svg";
import Vaivrach from "../../assets/vaivrach.jpg";
import Impact from "../../assets/impactB.png";
import LabSuit from "../../assets/labsuit.png";
import Work from "../../assets/job.svg";
import Type from "../../assets/work-type.svg";
import Years from "../../assets/year.svg";

export const Experience = (props) => {
    const { content, setContent } = props;
    const exp = [
        ["Freelance", "2024-today", "Full-Stack Web Developer", 0, "Freelance projects"],
        ["Leminda.AI", "2022-2023", "Front-End Web Developer", 1, "Full time job"],
        ["Beezi", "2020", "Front-End Web Developer", 2, "Internship project"],
        ["Va'ivrach", "2017-2021", "Full-Stack Web Developer", 3, "Part time job"],
        ["Impact", "2016", "Full-Stack Web Developer", 4, "Freelance project"],
        // ["LabSuit", "2014", "QA", 5, "Internship job"],
    ];
    const [open, setOpen] = useState([false, true, false, true, false, false]);
    const [rerender, setRerender] = useState();
    // console.log(content);
    return (
        <>
            {exp.map((ex, i) => {
                return (
                    <div
                        key={i}
                        className={`block mt-4 text-gray-400 hover:bg-[#2A2D2E] text-sm ${
                            content === ex[0] ? "bg-[#37373d]" : "bg-[#252526]"
                        }`}>
                        <div className="flex">
                            <img
                                src={arrow}
                                alt=""
                                className={`h-6 w-6 mt-2 cursor-pointer ${
                                    open[i] ? "" : "-rotate-90"
                                }`}
                                onClick={() => {
                                    setOpen((prev) => {
                                        let item = !prev[i];
                                        return [...prev, (prev[i] = item)];
                                    });
                                    setRerender(!rerender);
                                }}
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
                                className="h-8 w-8 bg-slate-100 rounded-md p-0.5 cursor-pointer"
                                onClick={() => setContent(ex[0])}
                            />
                            <div
                                className="font-bold cursor-pointer ml-2 my-auto"
                                onClick={() => setContent(ex[0])}>
                                {ex[0]}
                            </div>
                        </div>
                        {open[i] ? (
                            <div
                                className="block ml-8 cursor-pointer"
                                onClick={() => setContent(ex[0])}>
                                <div className="flex">
                                    <img src={Work} alt="Job Title" className="h-6 w-6" />
                                    <div className="ml-0.5">{ex[2]}</div>
                                </div>
                                <div className="flex">
                                    <img src={Years} alt="Year(s)" className="h-6 w-6" />
                                    <div className="ml-0.5">
                                        {"Year" + (ex[1].length > 4 ? "s" : "") + ": " + ex[1]}
                                    </div>
                                </div>
                                <div className="flex">
                                    <img src={Type} alt="Job Type" className="h-6 w-6" />
                                    <div className="ml-0.5">{ex[4]}</div>
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
