import Title from "./title";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import { useState } from "react";
export const Actions = (props) => {
    const { action, content, setContent, setSkill, route } = props;
    const [by, setBy] = useState("");
    return (
        <>
            <Title name={action} setBy={setBy} by={by} />
            <div className="overflow-y-auto scrollbar h-full pb-24">
                {action === "experience" ? (
                    <Experience content={content} setContent={setContent} route={route} />
                ) : action === "education" ? (
                    <Education content={content} setContent={setContent} route={route} />
                ) : action === "skills" ? (
                    <Skills setSkill={setSkill} by={by} />
                ) : (
                    ""
                )}
            </div>
        </>
    );
};
