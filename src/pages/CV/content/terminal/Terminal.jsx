import { useState } from "react";

export const Terminal = () => {
    const [input, setInput] = useState("");
    return (
        <div className="border border-t-2 border-[#383838] h-64">
            <div className="text-base">
                <span className="text-green-600 mr-1">Terminal@Offer-Development-Job</span>
                <span className="text-fuchsia-600 mr-1">atMyCompany</span>
                <span className="text-yellow-400 mr-1">~/My-CV</span>
                <span className="text-cyan-600">(input "npm start" to begin):</span>
            </div>
            <div className="flex text-white">
                ${" "}
                <input
                    type="text"
                    className="bg-[#1e1e1e] w-full focus:outline-none ml-1"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="|_|"
                    onKeyDown={(e) => {
                        setTimeout(() => {
                            if (e.key === "Enter" && input === "npm start") {
                                if (window.matchMedia("(max-width: 768px)").matches) {
                                    window.location.href = "tel:+972-509-31-5511";
                                } else {
                                    window.open(
                                        "https://wa.me/972509315511?text=Hey%20Tuvia%2C%20I%27d%20like%20to%20interest%20you%20in%20a%20job%20at...",
                                        "_blank"
                                    );
                                }
                            }
                        }, 2000);
                    }}
                />
            </div>
        </div>
    );
};
