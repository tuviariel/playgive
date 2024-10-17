import { useState } from "react";
import arrow from "../../assets/arrow-down.svg";
import JB from "../../assets/JohnBryce.jpg";
import Teco from "../../assets/teco.png";
import Moreshet from "../../assets/מורשת יעקב.jpeg";
import Work from "../../assets/job.svg";
import Years from "../../assets/year.svg";

export const Education = (props) => {
    const { content, setContent } = props;
    const exp = [
        ["John Bryce", "2015", "JavaEE Developer course", 0],
        ["Teco1", "2014", "QA course", 1],
        // ["Moreshet", "2011 - 2014", "BEd", 2],
    ];
    const [open, setOpen] = useState([true, false, false]);
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
                                src={ex[3] === 0 ? JB : ex[3] === 1 ? Teco : Moreshet}
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
                                {/* <div className="flex">
                                    <img src={Type} alt="Job Type" className="h-6 w-6" />
                                    <div className="ml-0.5">{ex[4]}</div>
                                </div> */}
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
