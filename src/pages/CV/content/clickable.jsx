import angular from "../assets/angular.svg";
import react from "../assets/react.svg";
import python from "../assets/python.svg";
import java from "../assets/java.svg";
import js from "../assets/js.svg";
import ts from "../assets/typescript.svg";
import html from "../assets/html-5.svg";
import css from "../assets/css-3.svg";
import scss from "../assets/scss.svg";
import tailwind from "../assets/tailwindcss.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import figma from "../assets/figma.svg";
import zeplin from "../assets/zeplin.svg";
import sql from "../assets/sql.svg";
import nosql from "../assets/nosqlDB.svg";
import npm from "../assets/npm.svg";
import mongo from "../assets/mongo.svg";
import firebase from "../assets/firebase.svg";
import trello from "../assets/trello.svg";
import slack from "../assets/slack.svg";
import jira from "../assets/jira.svg";
import github from "../assets/github.svg";
import gitlab from "../assets/gitlab.svg";
import VSCode from "../assets/vs-code.svg";
const Clickable = (props) => {
    const { code, setSkill } = props;
    const codes = [
        "",
        "VSCode",
        "React",
        "JavaScript",
        "TypeScript",
        "GitHub",
        "NPM",
        "Trello",
        "Tailwindcss",
        "Figma",
        "MongoDB",
        "Node.js",
        "Express.js",
        "HTML(5)",
        "CSS(3)",
        "NoSQL",
        "SCSS",
        "SQL",
        "Firebase",
        "Slack",
        "GitLab",
        "Jira",
        "Angular.js",
        "Java",
        "Python",
        "Zeplin",
    ];
    const images = [
        "",
        VSCode,
        react,
        js,
        ts,
        github,
        npm,
        trello,
        tailwind,
        figma,
        mongo,
        node,
        express,
        html,
        css,
        nosql,
        scss,
        sql,
        firebase,
        slack,
        gitlab,
        jira,
        angular,
        java,
        python,
        zeplin,
    ];
    return (
        <span
            className="mx-1 inline-flex cursor-pointer hover:underline"
            onClick={() => setSkill(code)}>
            <img
                src={images[code]}
                alt={codes[code]}
                className={`h-5 w-4 inline-flex ${
                    code === 5 || code === 23 ? "rounded-full" : ""
                } ${code === 5 || code === 12 || code === 23 ? "bg-white" : ""}`}
            />
            {codes[code]}
        </span>
    );
};
export default Clickable;
