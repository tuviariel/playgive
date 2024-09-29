import back from "../assets/back.svg";
import arrow from "../assets/ascend.svg";
export const Header = (props) => {
    const { originalData, elementsArray, setCurrent, current, sort, setData, setTo, setFrom } =
        props;
    return (
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
                        setTo(["", "", "", "", "2019-06-24T14:00"]);
                        setFrom(["", "", "", "", "2019-07-24T18:00"]);
                    }}
                />
            </th>
            {elementsArray.map((elem, i) => {
                return (
                    <th className="border border-blue-800" key={i}>
                        <div className="flex">
                            <div
                                className={`${
                                    current.startsWith(elem) ? "font-bold" : "font-normal"
                                } capitalize`}>
                                {elem}:
                            </div>
                            <div className="border border-gray-800 rounded-md flex ml-auto">
                                <SortButton
                                    direction={"down"}
                                    elem={elem}
                                    sort={sort}
                                    current={current}
                                />
                                <SortButton
                                    direction={"up"}
                                    elem={elem}
                                    sort={sort}
                                    current={current}
                                />
                            </div>
                        </div>
                    </th>
                );
            })}
        </tr>
    );
};

const SortButton = (props) => {
    const { direction, elem, sort, current } = props;
    return (
        <img
            src={arrow}
            alt={direction}
            className={`w-5 h-5 p-0.5 cursor-pointer ${
                current === elem + direction ? "bg-blue-500" : "hover:bg-slate-300"
            } ${direction === "up" ? "rotate-180" : ""}`}
            onClick={() => sort(elem, direction)}
            title={direction === "down" ? "Descend" : "Ascend"}
        />
    );
};
