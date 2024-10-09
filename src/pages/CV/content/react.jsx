import ReactLogo from "../assets/react.svg";
import Freelance from "../assets/ProfilePicturePhoto.jpg";
import Leminda from "../assets/leminda.svg";
import Beezi from "../assets/BeeziB.svg";
import Vaivrach from "../assets/vaivrachL.png";
import Impact from "../assets/impactB.png";

const React = (props) => {
    const { setContent } = props;
    return (
        <div className="text-slate-50 ml-12 my-10 pr-12 mb-4">
            <div className="flex">
                <img src={ReactLogo} alt="React" className="h-10 w-10" />
                <div className="text-2xl">React</div>
            </div>
            <div className="mb-6">
                <span className="text-green-500 mr-2">6 years experience with</span>
                <span className="text-cyan-500 mr-2">React</span> a front-end JavaScript library for
                building user interfaces based on components. My Experience using React includes the
                fallowing:
            </div>
            <div
                className="my-3 flex cursor-pointer hover:underline"
                onClick={() => setContent("Freelance")}>
                <img
                    src={Freelance}
                    alt="Freelance"
                    className="h-6 w-6 ml-10 mr-2 bg-slate-100 rounded-md"
                />
                Freelance (2023 - Today).
            </div>
            <div
                className="my-3 flex cursor-pointer hover:underline"
                onClick={() => setContent("Leminda.AI")}>
                <img
                    src={Leminda}
                    alt="Freelance"
                    className="h-6 w-6 ml-10 mr-2 bg-slate-100 rounded-md"
                />
                Leminda.AI (2022 - 2023).
            </div>
            <div
                className="my-3 flex cursor-pointer hover:underline"
                onClick={() => setContent("Beezi")}>
                <img
                    src={Beezi}
                    alt="Beezi"
                    className="h-6 w-6 ml-10 mr-2 bg-slate-100 rounded-md"
                />
                Beezi (2020).
            </div>
            <div
                className="my-3 flex cursor-pointer hover:underline"
                onClick={() => setContent("Va'ivrach")}>
                <img
                    src={Vaivrach}
                    alt="Va'ivrach"
                    className="h-6 w-6 ml-10 mr-2 bg-slate-100 rounded-md"
                />
                Va'ivrach (2017 - 2021).
            </div>
            <div
                className="my-3 flex cursor-pointer hover:underline"
                onClick={() => setContent("Impact by Mati")}>
                <img
                    src={Impact}
                    alt="Impact"
                    className="h-6 w-6 ml-10 mr-2 bg-slate-100 rounded-md"
                />
                Impact by Mati (2016).
            </div>
        </div>
    );
};
export default React;
