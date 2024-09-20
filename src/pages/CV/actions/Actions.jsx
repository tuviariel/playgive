import Title from "./title";
export const Actions = (props) => {
    const { action } = props;
    return (
        <>
            <Title name={action} />
        </>
    );
};
