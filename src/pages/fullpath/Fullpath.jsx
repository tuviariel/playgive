import { useEffect, useState } from "react";
import JsonData from "./sample.json";
import arrow from "./assets/ascend.svg";
import back from "./assets/back.svg";
import filtering from "./assets/filter.svg";
import fungal from "./assets/filters.svg";
import fungalNo from "./assets/filterNo.svg";

const Fullpath = () => {
    //the Json Data State:
    const [data, setData] = useState([]);
    //a state indicator as to what is the current order selected:
    const [current, setCurrent] = useState("");
    //a state that enable to temporarily mark a row:
    const [mark, setMark] = useState(-1);
    //a state that saves the original order of the data:
    const [originalData, setOriginalData] = useState([]);
    //a state that enables to open filter options:
    const [filters, showFilters] = useState(false);
    const [disabled, setDisabled] = useState(false);
    //state that define range of value to filter:
    const [from, setFrom] = useState(["", "", "", "", ""]);
    const [to, setTo] = useState(["", "", "", "", ""]);
    //an Array that enables iterate data elements:
    const elementsArray = ["cost", "conversions", "clicks", "impressions", "timestamp"];
    //filling the data information on load:
    useEffect(() => {
        setData([...JsonData.data]);
        setOriginalData([...JsonData.data]);
    }, []);
    //the sort function:
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
    const filter = () => {
        let temp = current !== "" ? data : originalData;
        elementsArray.map((elem, i) => {
            if (to[i] || from[i]) {
                let newArray = temp.filter((item) => {
                    if (from[i] >= 0 && to[i] > 0) {
                        return item[elem] >= from[i] && item[elem] <= to[i];
                    } else if (!from[i] && to[i] > 0) {
                        return item[elem] <= to[i];
                    } else if (from[i] >= 0 && !to[i]) {
                        return item[elem] >= from[i];
                    }
                });
                temp = [...newArray];
            }
        });

        setData([...temp]);
    };
    console.log();
    return (
        <div className="container">
            <h2 className="text-center text-xl">{JsonData.title}</h2>
            <div className="flex font-semibold capitalize w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto">
                <img
                    src={filters ? fungalNo : fungal}
                    alt="filter"
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => showFilters(!filters)}
                />{" "}
                filter
            </div>
            <table className="table-auto text-left w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto ">
                <thead>
                    <tr>
                        <th className="border border-blue-800">
                            <img
                                src={back}
                                alt="Back to original"
                                title="Back to original"
                                className={`h-5 w-5 p-1 m-auto hover:bg-slate-300 cursor-pointer`}
                                onClick={() => {
                                    setCurrent("");
                                    setData([...originalData]);
                                    setTo(["", "", "", "", ""]);
                                    setFrom(["", "", "", "", ""]);
                                }}
                            />
                        </th>
                        {elementsArray.map((elem, i) => {
                            return (
                                <th className="border border-blue-800" key={i}>
                                    <div className="flex">
                                        <div
                                            className={`${
                                                current.startsWith(elem)
                                                    ? "font-bold"
                                                    : "font-normal"
                                            } capitalize`}>
                                            {elem}:
                                        </div>
                                        <div className="border border-gray-800 rounded-md flex ml-auto">
                                            <img
                                                src={arrow}
                                                alt="arrow"
                                                className={`w-5 h-5 p-0.5 cursor-pointer ${
                                                    current === elem + "down"
                                                        ? "bg-blue-500"
                                                        : "hover:bg-slate-300"
                                                }`}
                                                onClick={() => sort(elem, "down")}
                                                title="Descend"
                                            />
                                            <img
                                                src={arrow}
                                                alt="arrow"
                                                className={`w-5 h-5 rotate-180 p-0.5 cursor-pointer ${
                                                    current === elem + "up"
                                                        ? "bg-blue-500"
                                                        : "hover:bg-slate-300"
                                                }`}
                                                onClick={() => sort(elem, "up")}
                                                title="Ascend"
                                            />
                                        </div>
                                    </div>
                                </th>
                            );
                        })}
                    </tr>
                    {filters && (
                        <tr>
                            <th className="border border-blue-800">
                                <img
                                    src={filtering}
                                    alt="filter"
                                    title="filter"
                                    className={`h-5 w-5 p-1 m-auto rounded-full ${
                                        disabled
                                            ? "cursor-not-allowed"
                                            : "cursor-pointer hover:bg-slate-300 bg-green-600"
                                    }`}
                                    onClick={() => !disabled && filter()}
                                />
                            </th>
                            {elementsArray.map((elem, i) => {
                                return (
                                    <th className="border border-blue-800" key={i}>
                                        <div>
                                            <div className="flex gap-2">
                                                From:
                                                <input
                                                    type="number"
                                                    min={0}
                                                    value={from[i]}
                                                    onChange={(e) => {
                                                        setFrom((prev) => {
                                                            let updated = [...prev];
                                                            updated[i] = e.target.value;
                                                            return updated;
                                                        });
                                                        setDisabled(
                                                            +e.target.value > +to[i] ||
                                                                (+e.target.value === +to[i] &&
                                                                    +to[i] > 0)
                                                        );
                                                    }}
                                                    title={
                                                        Number(from[i]) > Number(to[i])
                                                            ? "The 'From' value can't be larger than the 'To' value"
                                                            : from[i] === to[i] && +to[i] > 0
                                                            ? "The 'From' value can't equal the 'To' value"
                                                            : ""
                                                    }
                                                    className={`ml-auto w-12 border ${
                                                        +from[i] > +to[i] ||
                                                        (from[i] === to[i] && +to[i] > 0)
                                                            ? "border-red-500"
                                                            : "border-black"
                                                    }`}
                                                />
                                                {elem === "cost" && "$"}
                                            </div>
                                            <div className="flex gap-2">
                                                To:
                                                <input
                                                    type="number"
                                                    min={0}
                                                    value={to[i]}
                                                    onChange={(e) => {
                                                        setTo((prev) => {
                                                            let updated = [...prev];
                                                            updated[i] = e.target.value;
                                                            return updated;
                                                        });
                                                        setDisabled(
                                                            +from[i] > +e.target.value ||
                                                                (+from[i] === +e.target.value &&
                                                                    +e.target.value > 0)
                                                        );
                                                    }}
                                                    title={
                                                        Number(from[i]) > Number(to[i])
                                                            ? "The 'From' value can't be larger than the 'To' value"
                                                            : from[i] === to[i] && +to[i] > 0
                                                            ? "The 'From' value can't equal the 'To' value"
                                                            : ""
                                                    }
                                                    className={`ml-auto w-16 border ${
                                                        Number(from[i]) > Number(to[i]) ||
                                                        (from[i] === to[i] && +to[i] > 0)
                                                            ? "border-red-500"
                                                            : "border-black"
                                                    }`}
                                                />
                                                {elem === "cost" && "$"}
                                            </div>
                                        </div>
                                    </th>
                                );
                            })}
                        </tr>
                    )}
                </thead>
                <tbody>
                    {data &&
                        data.map((item, i) => {
                            return (
                                <tr
                                    className={`${i % 2 !== 0 ? "bg-blue-200" : "bg-blue-400"} ${
                                        mark === item.clicks
                                            ? "bg-blue-700 font-semibold text-white"
                                            : ""
                                    } cursor-pointer`}
                                    onClick={() =>
                                        mark === item.clicks ? setMark(-1) : setMark(item.clicks)
                                    }
                                    key={i}>
                                    <td className="border border-blue-800 pl-1">{i + 1}</td>
                                    <td className="border border-blue-800 pl-1">{item.cost} $</td>
                                    <td className="border border-blue-800 pl-1">
                                        {item.conversions}
                                    </td>
                                    <td className="border border-blue-800 pl-1">{item.clicks}</td>
                                    <td className="border border-blue-800 pl-1">
                                        {item.impressions}
                                    </td>
                                    <td className="border border-blue-800 pl-1">
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
