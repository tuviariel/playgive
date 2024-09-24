import dots from "../../assets/dots.png";
export const Title = (props) => {
    const { name } = props;
    return (
        <div className="flex">
            <div className="text-gray-300 text-xs ml-5 mt-1 mr-auto capitalize">{name}</div>
            <img
                src={dots}
                alt="display options"
                className="text-gray-300 text-xs ml-5 mt-1 mr-3 cursor-not-allowed border border-[#252526] hover:border-gray-600 rounded-md"
            />
        </div>
    );
};
