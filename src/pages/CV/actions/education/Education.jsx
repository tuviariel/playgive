import { useState } from "react";
import arrow from "../../assets/arrow-down.svg";
import JB from "../../assets/JohnBryce.jpg";
import Teco from "../../assets/teco.png";
import Moreshet from "../../assets/מורשת יעקב.jpeg";
import Work from "../../assets/job.svg";
import Years from "../../assets/year.svg";

export const Education = (props) => {
    const { content, setContent, route } = props;
    const exp = [
        ["John Bryce", "2015", "JavaEE Developer course"],
        ["Teco1", "2014", "QA course"],
        ["Moreshet", "2011 - 2014", "BEd"],
    ];
    const [open, setOpen] = useState([true, false, false]);
    // const [rerender, setRerender] = useState();
    // console.log(content);
    return (
        <>
            {exp.map((ex, i) => {
                if ((route === "/qa" && i === 1) || i === 0 || (route === "/all" && i >= 0)) {
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
                                    src={i === 0 ? JB : i === 1 ? Teco : Moreshet}
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
                }
            })}
        </>
    );
};
