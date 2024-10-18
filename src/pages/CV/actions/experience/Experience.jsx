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
    const { content, setContent, route } = props;
    const exp = [
        ["Freelance", "2024-today", "Full-Stack Web Developer", "Freelance projects"],
        ["Leminda.AI", "2022-2023", "Front-End Web Developer", "Full time job"],
        ["Beezi", "2020", "Front-End Web Developer", "Internship project"],
        ["Va'ivrach", "2017-2021", "Full-Stack Web Developer", "Part time job"],
        ["Impact", "2016", "Full-Stack Web Developer", "Freelance project"],
        ["LabSuit", "2014", "QA", "Internship job"],
    ];
    const [open, setOpen] = useState([false, true, false, true, false, false]);
    // const [rerender, setRerender] = useState();
    // console.log(content);
    return (
        <>
            {exp.map((ex, i) => {
                if ((route === "/qa" && i === 5) || i < 5 || (route === "/all" && i === 5)) {
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
                                            const newState = [...prev];
                                            newState[i] = !prev[i];
                                            return newState;
                                        });
                                        // setRerender(!rerender);
                                    }}
                                />
                                <img
                                    src={
                                        i === 0
                                            ? Free
                                            : i === 1
                                            ? Leminda
                                            : i === 2
                                            ? Beezi
                                            : i === 3
                                            ? Vaivrach
                                            : i === 4
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
                                        <div className="ml-0.5">{ex[3]}</div>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    );
                }
            })}
        </>
    );
};
