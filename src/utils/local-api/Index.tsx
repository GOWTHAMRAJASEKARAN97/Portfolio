//@ts-ignore
import NetworkManagement from "../../assets/network.png";
//@ts-ignore
import SportsClubManagement from "../../assets/sports.png";
//@ts-ignore

import Portfolio from "../../assets/portfolio.png";
import html from "../../assets/techstack/htmlLogo.svg";
import css from "../../assets/techstack/cssLogo.svg";
import js from "../../assets/techstack/javascriptLogo.svg";
import react from "../../assets/techstack/reactLogo.svg";
import reactQuery from "../../assets/techstack/reactQueryLogo.svg";
import reactRedux from "../../assets/techstack/reduxLogo.svg";
import sass from "../../assets/techstack/sassLogo.svg";
import styledComponents from "../../assets/techstack/styledComponentsLogo.png";
import ts from "../../assets/techstack/typescript.jpg";
import hookForms from "../../assets/techstack/hookfroms.jpg";
import mui from "../../assets/techstack/mui.png";

const ProjectData = [
  {
    image: NetworkManagement,
    title: "Mobile Network Management",
    text: "We can manage users and their networks via this app.And the registered user only can login the app.And also the registered user only can update and create the respective user profiles and their network operaters.",
    view: "https://gowthamrajasekaran97.github.io/React-task/",
    source: "https://github.com/GOWTHAMRAJASEKARAN97/React-task",
    techstack: [react, styledComponents],
  },
  {
    image: SportsClubManagement,
    title: "Sports Club Management",
    text: "We can create a player profile according to the game category. And we can manage the player profiles like updation and deletion.We can filter players by game category using this app.",
    view: " https://gowthamrajasekaran97.github.io/JS-Task/",
    source: " https://github.com/GOWTHAMRAJASEKARAN97/JS-Task",
    techstack: [html, css, js],
  },
  {
    image: Portfolio,
    title: "Personal Portfolio",
    text: "Created my personal portfolio app. using Typescript layout, React Hook Forms with Controlled components and Mui",
    view: "https://gowtham-rajasekaran.netlify.app/",
    source: "https://github.com/GOWTHAMRAJASEKARAN97/portfolio",
    techstack: [react, styledComponents, ts, hookForms, mui],
  },
];

export default ProjectData;
