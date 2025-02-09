import { useEffect, useRef, useState } from "react";

export const Terminal = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);
    const [last, setLast] = useState("");
    const [hovering, setHovering] = useState(false);
    const [working, setWorking] = useState(false);
    const inputLine = useRef(null);
    const addOutput = (text) => {
        let temp = output;
        temp.push(text);
        setOutput(temp);
        setInput("");
    };
    useEffect(() => {
        inputLine?.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [input]);
    return (
        <div
            className="scrollbar overflow-y-scroll border border-t-2 border-[#383838] h-24 max-h-24 hidden lg:block pb-4"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            {output.map((item) => {
                return <div className="text-white">{item}</div>;
            })}
            {!working && (
                <>
                    <div className="text-base">
                        <span className="text-green-600 mr-1">Terminal@Offer-Development-Job</span>
                        <span className="text-fuchsia-600 mr-1">atMyCompany</span>
                        <span className="text-yellow-400 mr-1">~/My-CV</span>
                        <span className={`text-cyan-600 relative`}>
                            {hovering && output.length > 0 && (
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
                            )}
                            (input "npm start" to begin):
                        </span>
                    </div>
                    <div className="flex text-white" ref={inputLine}>
                        $
                        <input
                            type="text"
                            className="bg-[#1e1e1e] w-full focus:outline-none ml-2"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="|_|"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setLast(input);
                                    if (input !== "npm start") {
                                        input !== "" &&
                                            addOutput(
                                                '> "' +
                                                    input +
                                                    '" is not a correct command. Did you mean to write "npm start"?'
                                            );
                                    } else {
                                        addOutput("> preparing connection with Tuvia Ariel...");
                                        setWorking(true);
                                        setTimeout(() => {
                                            if (window.matchMedia("(max-width: 768px)").matches) {
                                                window.location.href = "tel:+972-509-31-5511";
                                            } else {
                                                window.open(
                                                    "https://wa.me/972509315511?text=Hey%20Tuvia%2C%20I%27d%20like%20to%20interest%20you%20in%20a%20job%20at...",
                                                    "_blank"
                                                );
                                            }
                                            setTimeout(() => {
                                                setWorking(false);
                                            }, 2000);
                                        }, 3000);
                                    }
                                } else if (e.key === "ArrowUp") {
                                    setInput(last);
                                }
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};
