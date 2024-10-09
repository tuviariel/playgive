import Jira from "../assets/jira.svg";
import SQL from "../assets/sql.svg";
import python from "../assets/python.svg";
import Trello from "../assets/trello.svg";

const Teco = (props) => {
    const { setSkill } = props;
    return (
        <div className="text-slate-50 ml-12 my-10 pr-12 mb-4">
            <div className="flex">
                <div className="h-10 w-10 bg-slate-100 text-blue-800 text-xs flex font-bold pt-3 pl-0.5 mr-1">
                    Teco-1
                </div>
                <div className="text-2xl">Teco-1</div>
            </div>
            <div className="mb-6">
                <span className="text-fuchsia-600 mr-2">2014</span>
                <span className="text-yellow-500 mr-2">QA course,</span>a course led by Lior
                Klivanski and Ben Freidman giving us students all the fundamentals of a QA in the
                tech industry.
            </div>
            <ul className="list-disc text-base mb-12 w-full">
                <li>
                    <div>Analyzing product definitions and writing test forms (STD).</div>
                </li>
                <li>
                    <div>
                        Testing live products in various methods: Progression, Regression, Sanity,
                        Unit, Functional and End to End.
                    </div>
                </li>
                <li>
                    <div>
                        Reporting and managing Bugs until solution with
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(21)}>
                            <img src={Jira} alt="Jira" className="h-5 w-4 ml-auto mr-0.5" />
                            JIRA
                        </span>
                        and
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(7)}>
                            <img src={Trello} alt="Trello" className="h-5 w-4 ml-auto mr-0.5" />
                            Trello
                        </span>
                        .
                    </div>
                </li>
                <li>
                    <div>
                        Introduction to
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(17)}>
                            <img src={SQL} alt="SQL" className="h-5 w-4 ml-auto mr-0.5" />
                            SQL
                        </span>
                        ,
                        <span
                            className="mx-2 inline-flex cursor-pointer hover:underline"
                            onClick={() => setSkill(24)}>
                            <img src={python} alt="Python" className="h-5 w-4 ml-auto mr-0.5" />
                            Python
                        </span>{" "}
                        and Linux.
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default Teco;
