import Title from "./title";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import { useState } from "react";
export const Actions = (props) => {
    const { action, content, setContent, setSkill } = props;
    const [by, setBy] = useState("");
    return (
        <>
            <Title name={action} setBy={setBy} by={by} />
            <div className="overflow-y-auto h-full">
                {action === "experience" ? (
                    <Experience content={content} setContent={setContent} />
                ) : action === "education" ? (
                    <Education content={content} setContent={setContent} />
                ) : action === "skills" ? (
                    <Skills setSkill={setSkill} by={by} />
                ) : (
                    ""
                )}
            </div>
        </>
    );
};
