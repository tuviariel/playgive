import Title from "./title";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import Information from "./skills";
export const Actions = (props) => {
    const { action, content, setContent } = props;
    return (
        <>
            <Title name={action} />
            <div className="overflow-y-scroll scroll-smooth visible snap-y">
                {action === "experience" ? (
                    <Experience content={content} setContent={setContent} />
                ) : action === "education" ? (
                    <Education />
                ) : action === "skills" ? (
                    <Skills />
                ) : action === "information" ? (
                    <Information />
                ) : action === "search" ? (
                    ""
                ) : (
                    ""
                )}
            </div>
        </>
    );
};
