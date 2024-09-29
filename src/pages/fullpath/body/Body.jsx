import { useState } from "react";
export const Body = (props) => {
    const { data } = props;
    //a state that enable to temporarily mark a row:
    const [mark, setMark] = useState(-1);
    return (
        <tbody>
            {data &&
                data.length > 0 &&
                data.map((item, i) => {
                    return (
                        <tr
                            className={`${i % 2 !== 0 ? "bg-blue-200" : "bg-blue-400"} ${
                                mark === item.clicks ? "bg-blue-700 font-semibold text-white" : ""
                            } cursor-pointer`}
                            onClick={() =>
                                mark === item.clicks ? setMark(-1) : setMark(item.clicks)
                            }
                            title={`Click the row to ${mark === item.clicks ? "un" : ""}mark it:`}
                            key={i}>
                            <td className="border border-blue-800 pl-1">{i + 1}</td>
                            <td className="border border-blue-800 pl-1">{item.cost} $</td>
                            <td className="border border-blue-800 pl-1">{item.conversions}</td>
                            <td className="border border-blue-800 pl-1">{item.clicks}</td>
                            <td className="border border-blue-800 pl-1">{item.impressions}</td>
                            <td className="border border-blue-800 pl-1">{item.timestamp}</td>
                        </tr>
                    );
                })}
        </tbody>
    );
};
