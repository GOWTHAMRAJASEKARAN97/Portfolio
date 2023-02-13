//@ts-ignore
import NetworkManagement from "../../assets/network.png";
//@ts-ignore
import SportsClubManagement from "../../assets/sports.png";
//@ts-ignore
import Portfolio from "../../assets/portfolio.png";

import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents, SiJavascript, SiTypescript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";

const ProjectData = [
  {
    image: NetworkManagement,
    title: "Mobile Network Management",
    text: "We can manage users and their networks via this app.And the registered user only can login the app.And also the registered user only can update and create the respective user profiles and their network operaters.",
    view: "https://gowthamrajasekaran97.github.io/React-task/",
    source: "https://github.com/GOWTHAMRAJASEKARAN97/React-task",
    techstack: [FaReact, SiStyledcomponents],
  },
  {
    image: SportsClubManagement,
    title: "Sports Club Management",
    text: "We can create a player profile according to the game category. And we can manage the player profiles like updation and deletion.We can filter players by game category using this app.",
    view: " https://gowthamrajasekaran97.github.io/JS-Task/",
    source: " https://github.com/GOWTHAMRAJASEKARAN97/JS-Task",
    techstack: [TiHtml5, DiCss3, SiJavascript],
  },
  {
    image: Portfolio,
    title: "Personal Portfolio",
    text: "Created my personal portfolio app. using Typescript layout, React Hook Forms with Controlled components and Mui",
    view: " https://gowthamrajasekaran97.github.io/JS-Task/",
    source: " https://github.com/GOWTHAMRAJASEKARAN97/JS-Task",
    techstack: [FaReact, SiTypescript, SiStyledcomponents],
  },
];

export default ProjectData;
