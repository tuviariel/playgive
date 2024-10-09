import MoreshetLogo from "../assets/מורשת יעקב.jpeg";

const Moreshet = (props) => {
    const { setContent } = props;
    return (
        <div className="text-slate-50 ml-12 my-10 pr-12 mb-4">
            <div className="flex">
                <img src={MoreshetLogo} alt="Moreshet Ya'akov College" className="h-10 w-10 mr-2" />
                <div className="text-2xl">Moreshet Ya'akov College</div>
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2011 - 2014</span>
                <span className="text-yellow-500 mr-2">Moreshet Ya'akov College,</span> graduated a
                B.Ed degree (3 years). Participated in the Ministry of education honors program. I
                know the degree doesn't represent any of my technical skills or experience but I'm
                mentioning it here because I believe the degree does show my persistance and..
            </div>
        </div>
    );
};
export default Moreshet;
