import FreeLogo from "../assets/ProfilePicturePhoto.jpg";
import Tailwind from "../assets/tailwindcss.svg";
import ReactLogo from "../assets/react.svg";
import Mongo from "../assets/mongo.svg";
import TS from "../assets/typescript.svg";
import Express from "../assets/express.svg";
import node from "../assets/node.svg";
import Trello from "../assets/trello.svg";
import github from "../assets/github.svg";

const Freelance = (props) => {
    const { setSkill } = props;
    return (
        <div className="text-slate-50 ml-12 my-10 pr-12 mb-4">
            <div className="flex">
                <img src={FreeLogo} alt="Freelance" className="h-10 w-10 mr-2" />
                <div className="text-2xl">Freelance</div>
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2023 - Today</span>
                <span className="text-yellow-500 mr-2">Full-Stack Web Developer</span>as a
                Freelancer, due to the war brake-out, while living up north I'v decided not to
                search for a new Job just yet and instead put more energy learning more technologies
                and working on some projects for a living.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li>
                    <div>
                        Creating web applications using
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(2)}>
                            <img src={ReactLogo} alt="ReactJS" className="h-5 w-4 ml-auto mr-0.5" />
                            React
                        </span>
                        ,
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(8)}>
                            <img
                                src={Tailwind}
                                alt="Tailwind.css"
                                className="h-5 w-4 ml-auto mr-0.5"
                            />
                            Tailwind.css
                        </span>
                        , and
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(4)}>
                            <img src={TS} alt="TS" className="h-5 w-4 ml-auto mr-0.5" />
                            TypeScript
                        </span>
                        from scratch.
                    </div>
                </li>
                <li>
                    <div>
                        Building back-end with
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(11)}>
                            <img src={node} alt="NodeJS" className="h-5 w-4 ml-auto mr-0.5" />
                            Node.js
                        </span>
                        using
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(12)}>
                            <img
                                src={Express}
                                alt="ExpressJS"
                                className="h-5 w-4 ml-auto mr-0.5 bg-slate-100"
                            />
                            Express.js
                        </span>
                        while connecting to
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(10)}>
                            <img src={Mongo} alt="Mongo" className="h-5 w-4 ml-auto mr-0.5" />
                            MongoDB
                        </span>
                        .
                    </div>
                </li>
                <li>
                    <div>
                        Multitasking, prioritizing and managing schedule with
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(7)}>
                            <img src={Trello} alt="trello" className="h-5 w-4 ml-auto mr-0.5" />
                            Trello
                        </span>
                        .
                    </div>
                </li>
                <li>
                    <div>
                        Planned architecture to withstand high performance and stability as
                        MicroServices.
                    </div>
                </li>
                <li>
                    <div>Modifying and adding features in the component layout.</div>
                </li>
                <li>
                    <div>
                        Managing source control with
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(5)}>
                            <img
                                src={github}
                                alt="github"
                                className="h-5 w-4 ml-auto mr-0.5 bg-white rounded-full"
                            />
                            GitHub
                        </span>
                        .
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default Freelance;
