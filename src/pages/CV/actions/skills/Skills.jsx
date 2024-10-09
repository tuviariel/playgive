import { useState } from "react";
import angular from "../../assets/angular.svg";
import react from "../../assets/react.svg";
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import js from "../../assets/js.svg";
import ts from "../../assets/typescript.svg";
import html from "../../assets/html-5.svg";
import css from "../../assets/css-3.svg";
import scss from "../../assets/scss.svg";
import tailwind from "../../assets/tailwindcss.svg";
import node from "../../assets/node.svg";
import express from "../../assets/express.svg";
import figma from "../../assets/figma.svg";
import zeplin from "../../assets/zeplin.svg";
import sql from "../../assets/sql.svg";
import nosql from "../../assets/nosqlDB.svg";
import npm from "../../assets/npm.svg";
import mongo from "../../assets/mongo.svg";
import firebase from "../../assets/firebase.svg";
import trello from "../../assets/trello.svg";
import slack from "../../assets/slack.svg";
import jira from "../../assets/jira.svg";
import github from "../../assets/github.svg";
import gitlab from "../../assets/gitlab.svg";

export const Skills = (props) => {
    const { setSkill } = props;
    const skills = [
        ["React", 6, react, 2],
        ["JavaScript", 7, js, 3],
        ["TypeScript", 3, ts, 4],
        ["HTML(5)", 7, html, 13],
        ["CSS(3)", 6, css, 14],
        ["SCSS", 3, scss, 16],
        ["Tailwindcss", 3, tailwind, 8],
        ["Angular.js", 1, angular, 22],
        ["Node.js", 2, node, 11],
        ["Express.js", 2, express, 12],
        ["Python", 1, python, 24],
        ["Java", 1, java, 23],
        ["Figma", 6, figma, 9],
        ["Zeplin", 1, zeplin, 25],
        ["SQL", 2, sql, 17],
        ["NoSQL", 5, nosql, 15],
        ["FireBase", 2, firebase, 18],
        ["MongoDB", 2, mongo, 10],
        ["Trello", 1, trello, 7],
        ["Slack", 1, slack, 19],
        ["Jira", 1, jira, 21],
        ["NPM", 1, npm, 6],
        ["GitHub", 6, github, 5],
        ["GitLab", 1, gitlab, 20],
    ];

    // console.log(content);
    return (
        <div className="scrollbar overflow-y-auto h-full">
            {skills.map((ex, i) => {
                return (
                    <div
                        key={i}
                        className={`flex py-2 ml-2 text-gray-400 hover:bg-[#2A2D2E] cursor-pointer text-sm h-10 ${
                            i === skills.length - 1 ? "mb-8" : ""
                        }`}
                        onClick={() => setSkill(ex[3])}>
                        <img src={ex[2]} alt={ex[0]} className="h-8 w-8 bg-slate-100 rounded-md" />
                        <div className="block ml-2">
                            <div className="font-bold">{ex[0]}</div>
                            <div className="font-normal -mt-1">
                                {(ex[1] === 1 ? "One year" : ex[1] + " Years") + " of experience."}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
