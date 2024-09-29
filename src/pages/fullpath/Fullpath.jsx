import { useEffect, useState } from "react";
import JsonData from "./sample.json";
import fungal from "./assets/filters.svg";
import fungalNo from "./assets/filterNo.svg";
import Body from "./body";
import Filter from "./filter";
import Header from "./header";

const Fullpath = () => {
    //the Json Data State:
    const [data, setData] = useState([]);
    //a state indicator as to what is the current order selected:
    const [current, setCurrent] = useState("");
    //a state that saves the original order of the data:
    const [originalData, setOriginalData] = useState([]);
    //a state that enables to open filter options:
    const [filters, showFilters] = useState(false);
    //state that define range of value to filter:
    const [from, setFrom] = useState(["", "", "", "", "2019-06-24T14:00"]); //timestamp already set to ease the search for relevant values
    const [to, setTo] = useState(["", "", "", "", "2019-07-24T18:00"]); //timestamp already set to ease the search for relevant values
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
        //filter from the sorted data (if sorted), or filter and refilter from the original data:
        let temp = current !== "" ? data : originalData;
        //creating filterInfo:
        let filterInfo = [];
        elementsArray.map((elem, i) => {
            if (to[i] || from[i]) {
                let arr = [elem];
                if (to[i] && from[i]) {
                    arr.push("both");
                    arr.push(from[i]);
                    arr.push(to[i]);
                } else if (to[i]) {
                    arr.push("to");
                    arr.push(to[i]);
                } else {
                    arr.push("from");
                    arr.push(from[i]);
                }
                filterInfo.push(arr);
            }
        });
        console.log(filterInfo);
        //filtering all items in one loop O(n) using filterInfo:
        let newData = temp.filter((item) => {
            let itemPassed = filterInfo.every((elem) => {
                if (elem[0] === "timestamp") {
                    if (elem[1] === "both") {
                        return (
                            new Date(item[elem[0]]) >= new Date(elem[2]) &&
                            new Date(item[elem[0]]) <= new Date(elem[3])
                        );
                    } else if (elem[1] === "from") {
                        return new Date(item[elem]) >= new Date(elem[2]);
                    } else if (elem[1] === "to") {
                        return new Date(item[elem]) <= new Date(elem[2]);
                    }
                } else {
                    if (elem[1] === "both") {
                        console.log(elem, item);
                        return item[elem[0]] >= elem[2] && item[elem[0]] <= elem[3];
                    } else if (elem[1] === "from") {
                        return item[elem[0]] >= elem[2];
                    } else if (elem[1] === "to") {
                        return item[elem[0]] <= elem[2];
                    }
                }
            });
            console.log(itemPassed);
            if (itemPassed) return item;
        });
        setData([...newData]);
    };

    return (
        <div className="container">
            <h2 className="text-center text-2xl font-bold">{JsonData.title}</h2>
            <div className="flex font-semibold w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto">
                <img
                    src={filters ? fungalNo : fungal}
                    alt="filter"
                    className="h-5 w-5 mr-10 cursor-pointer"
                    onClick={() => showFilters(!filters)}
                    title={(filters ? "Hide" : "Show") + " filter options"}
                />{" "}
                You can click a row to mark it.
            </div>
            <table className="table-auto text-left w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto ">
                <thead>
                    <Header
                        originalData={originalData}
                        elementsArray={elementsArray}
                        setCurrent={setCurrent}
                        setData={setData}
                        setTo={setTo}
                        setFrom={setFrom}
                        current={current}
                        sort={sort}
                    />
                    {filters && (
                        <Filter
                            filter={filter}
                            to={to}
                            setTo={setTo}
                            from={from}
                            setFrom={setFrom}
                            elementsArray={elementsArray}
                        />
                    )}
                </thead>
                <Body data={data} />
            </table>
            {data && data.length === 0 && (
                <div className=" text-center w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto ">
                    Seems like the filter parameters don't include any data. Check the filter
                    parameters and try again...
                </div>
            )}
        </div>
    );
};
export default Fullpath;
