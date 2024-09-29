import { useState } from "react";
import filtering from "../assets/filter.svg";

export const Filter = (props) => {
    const { filter, from, setFrom, to, setTo, elementsArray } = props;
    const [disabled, setDisabled] = useState(false);
    return (
        <tr>
            <th className="border border-blue-800">
                <img
                    src={filtering}
                    alt="filter"
                    title={disabled ? "Fix error to continue" : "Filter"}
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
                            <FilterInput
                                type={"from"}
                                elem={elem}
                                i={i}
                                from={from}
                                setFrom={setFrom}
                                setDisabled={setDisabled}
                                to={to}
                            />
                            <FilterInput
                                type={"to"}
                                elem={elem}
                                i={i}
                                to={to}
                                setTo={setTo}
                                setDisabled={setDisabled}
                                from={from}
                            />
                        </div>
                    </th>
                );
            })}
        </tr>
    );
};

const FilterInput = (props) => {
    const { type, elem, i, from, setFrom, to, setTo, setDisabled } = props;
    return (
        <div className="flex gap-1 capitalize">
            {type + ":"}
            <input
                type={elem === "timestamp" ? "datetime-local" : "number"}
                min={0}
                value={type === "from" ? from[i] : to[i]}
                onChange={(e) => {
                    if (type === "from") {
                        setFrom((prev) => {
                            let updated = [...prev];
                            updated[i] = e.target.value;
                            return updated;
                        });
                        setDisabled(
                            e.target.value &&
                                to[i] &&
                                (+e.target.value > +to[i] ||
                                    (+e.target.value === +to[i] && +to[i] > 0))
                        );
                    } else {
                        setTo((prev) => {
                            let updated = [...prev];
                            updated[i] = e.target.value;
                            return updated;
                        });
                        setDisabled(
                            e.target.value &&
                                from[i] &&
                                (+from[i] > +e.target.value ||
                                    (+from[i] === +e.target.value && +e.target.value > 0))
                        );
                    }
                }}
                title={
                    from[i] && to[i]
                        ? +from[i] > +to[i]
                            ? "The 'From' value can't be larger than the 'To' value"
                            : from[i] === to[i] && +to[i] > 0
                            ? "The 'From' value can't equal the 'To' value"
                            : ""
                        : ""
                }
                className={`ml-auto border-2 ${
                    elem === "timestamp" ? "w-28" : type === "to" ? "w-16" : "w-12"
                } ${
                    from[i] && to[i] && (+from[i] > +to[i] || (from[i] === to[i] && +to[i] > 0))
                        ? "border-red-500"
                        : "border-black"
                }`}
            />
            {elem === "cost" && "$"}
        </div>
    );
};
