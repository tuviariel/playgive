import { useEffect, useState } from "react";
import JsonData from "./sample.json";
import arrow from "./assets/arrow-down.svg";
import dots from "./assets/dots.svg";

const Fullpath = () => {
    //the Json Data State:
    const [data, setData] = useState([]);
    //a state indicator as to what is the current order selected:
    const [current, setCurrent] = useState("");
    //a state that enable to temporarily mark a row:
    const [mark, setMark] = useState(-1);
    //a state that saves the original order of the data:
    const [originalData, setOriginalData] = useState([]);
    //a state that enables to open sort and filter options:
    const [open, setOpen] = useState("");
    //state that define range of value to filter:
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);
    //an Array that enables to reuse code in headers of table:
    const elementsArray = ["cost", "conversions", "clicks", "impressions", "timestamp"];
    //filling the data information on load:
    useEffect(() => {
        setData([...JsonData.data]);
        setOriginalData([...JsonData.data]);
    }, []);

    //the sort function- one function for all sorting types:
    const sort = (arg, direction) => {
        setCurrent(arg + direction);
        let temp = data;
        temp.sort((a, b) => {
            if (direction === "up") {
                if (arg === "timestamp") {
                    return new Date(a[arg]) - new Date(b[arg]);
                } else {
                    return a[arg] - b[arg];
                }
            } else {
                if (arg === "timestamp") {
                    return new Date(b[arg]) - new Date(a[arg]);
                } else {
                    return b[arg] - a[arg];
                }
            }
        });
        setData([...temp]);
    };
    //the filter function:
    const filter = (arg) => {
        let temp = data;
        temp.filter((value) => {
            if ((from || from === 0) && (to || to === 0)) {
                return value[arg] <= from && value[arg] >= to;
            } else if (!from && from !== 0 && (to || to === 0)) {
                return value[arg] >= to;
            } else {
                return value[arg] <= from;
            }
        });
        setData([...temp]);
    };
    console.log();
    return (
        <div className="container">
            <div className="flex">
                <h3 className="text-center text-lg mr-auto">{JsonData.title}</h3>
                {current !== "" && (
                    <div
                        className="cursor-pointer"
                        onClick={() => {
                            setCurrent("");
                            setData([...originalData]);
                        }}>
                        Back to original order...
                    </div>
                )}
            </div>
            <table className="table-auto text-left w-2/3 mx-auto">
                <thead>
                    <tr>
                        <th className="border border-pink-800">#</th>
                        {elementsArray.map((elem, i) => {
                            return (
                                <th className="border border-pink-800" key={i}>
                                    <div className="flex">
                                        <div
                                            className={`${
                                                current.startsWith(elem)
                                                    ? "font-bold"
                                                    : "font-normal"
                                            } capitalize`}>
                                            {elem}:
                                        </div>
                                        <div className="relative ml-auto my-auto">
                                            <img
                                                src={dots}
                                                alt="Options"
                                                className={`h-4 w-4 cursor-pointer ${
                                                    open === elem ? "rotate-90" : ""
                                                }`}
                                                onClick={() => setOpen(open ? "" : elem)}
                                            />
                                            {open === elem && (
                                                <div className="absolute top-3 -right-2 bg-white p-3 border-gray-200 border-2 shadow-md rounded-md min-w-fit w-96">
                                                    <div className="flex">
                                                        <div className="">
                                                            {"Sort by " + elem + ":"}
                                                        </div>
                                                        <div className="border border-gray-800 rounded-md flex ml-auto">
                                                            <img
                                                                src={arrow}
                                                                alt="arrow"
                                                                className={`w-5 h-5 hover:bg-slate-500 rounded-lg cursor-pointer ${
                                                                    current === elem + "up"
                                                                        ? "bg-orange-500"
                                                                        : ""
                                                                }`}
                                                                onClick={() => sort(elem, "up")}
                                                                title="Ascend"
                                                            />
                                                            <img
                                                                src={arrow}
                                                                alt="arrow"
                                                                className={`w-5 h-5 rotate-180 hover:bg-slate-500 rounded-lg cursor-pointer ${
                                                                    current === elem + "down"
                                                                        ? "bg-orange-500"
                                                                        : ""
                                                                }`}
                                                                onClick={() => sort(elem, "down")}
                                                                title="Descend"
                                                            />
                                                        </div>
                                                    </div>
                                                    {elem !== "timestamp" && (
                                                        <div className="">
                                                            <div className="">
                                                                {"Filter by " + elem + ":"}
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <div>
                                                                    From (lower # including):
                                                                    <input
                                                                        type="number"
                                                                        min={0}
                                                                        value={from}
                                                                        onChange={(e) =>
                                                                            setFrom(e.target.value)
                                                                        }
                                                                        className="w-24 border"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    To (higher # including):
                                                                    <input
                                                                        type="number"
                                                                        min={0}
                                                                        value={to}
                                                                        onChange={(e) =>
                                                                            setTo(e.target.value)
                                                                        }
                                                                        className="w-24 border"
                                                                    />
                                                                </div>
                                                                <button
                                                                    className={`my-auto p-1 rounded-lg ${
                                                                        to === 0 || from >= to
                                                                            ? "cursor-not-allowed bg-gray-400"
                                                                            : "cursor-pointer bg-green-300"
                                                                    }`}
                                                                    onClick={() => filter(elem)}
                                                                    disabled={
                                                                        to === 0 || from > to
                                                                    }>
                                                                    Filter
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((item, i) => {
                            return (
                                <tr
                                    className={`${i % 2 !== 0 ? "bg-slate-400" : "bg-orange-400"} ${
                                        mark === item.clicks ? "bg-green-600 font-semibold" : ""
                                    } cursor-pointer`}
                                    onClick={() =>
                                        mark === item.clicks ? setMark(-1) : setMark(item.clicks)
                                    }
                                    key={i}>
                                    <td className="border border-pink-800 pl-1">{i + 1}</td>
                                    <td className="border border-pink-800 pl-1">{item.cost} $</td>
                                    <td className="border border-pink-800 pl-1">
                                        {item.conversions}
                                    </td>
                                    <td className="border border-pink-800 pl-1">{item.clicks}</td>
                                    <td className="border border-pink-800 pl-1">
                                        {item.impressions}
                                    </td>
                                    <td className="border border-pink-800 pl-1">
                                        {item.timestamp}
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};
export default Fullpath;
