import Title from "./title";
import Files from "../files";
export const Actions = (props) => {
    const { action, setContent } = props;
    return (
        <>
            <Title name={action} />
            {action === "explorer" ? (
                <Files setContent={setContent} />
            ) : action === "search" ? (
                <Files />
            ) : (
                <Files />
            )}
        </>
    );
};
