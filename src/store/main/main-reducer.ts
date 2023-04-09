import {v1} from "uuid"
import tl from "components/blocks/MyApps/img/tl.jpg";
import todolist from "components/blocks/MyApps/img/todolist.jpg";
import counters from "components/blocks/MyApps/img/counters.png";
import socialNetwork from "components/blocks/MyApps/img/social-network.jpg";
import separateBlocks from "components/blocks/MyApps/img/separate-blocks.jpg";
import reactLogo from "../../components/blocks/MySkills/img/logo192.png";
import reduxLogo from "../../components/blocks/MySkills/img/redux.png";
import tsLogo from "../../components/blocks/MySkills/img/ts.png";
import jsLogo from "../../components/blocks/MySkills/img/js.png";
import sbLogo from "../../components/blocks/MySkills/img/sb.svg";
import htmlLogo from "../../components/blocks/MySkills/img/html.jpeg";
import cssLogo from "../../components/blocks/MySkills/img/css.webp";
import unit from "../../components/blocks/MySkills/img/unit.svg";
import postman from "../../components/blocks/MySkills/img/postman.png";
import rest from "../../components/blocks/MySkills/img/rest.svg";
import mui from "../../components/blocks/MySkills/img/mui.png";
import tailwind from "../../components/blocks/MySkills/img/tailwind.png";
import formik from "../../components/blocks/MySkills/img/formik.svg";


export type MainType = {
  aboutMe: AboutMeType
  myApps: MyAppsType
  hireMe: HireMeType
  contact: ContactType
  mySkills: MyAppsType
  links: LinkType[]
}

export type LinkType = {
  name: string
  href: string
}
export type AboutMeType = {
  id: "aboutMe"
  name: string
  desc: string
}
export type HireMeType = {
  id: "hireMe"
  name: string
}
export type ContactType = {
  name: string
  id: "contact"
}
export type MyAppType = {
  id: string
  link: string
  header: string
  imgPath: string
  imgAlt: string
  desc: string
  target: boolean
}
export type MyAppsType = {
  id: string
  name: string
  apps: MyAppType[]
}


export const initialState: MainType = {
  links: [
    {name: "About Me", href: "aboutMe"},
    {name: "My Resume", href: "hireMe"},
    {name: "My Projects", href: "myProjects"},
    {name: "My Skills", href: "mySkills"},
    {name: "Contact", href: "contact"}
  ],
  aboutMe: {
    id: "aboutMe",
    name: "About Me",
    desc: "My name is Baranova Nataly. I'm a front-end developer looking for the opportunities to grow professionally. Having 2-year background in back-end and full-stack development I have a deep understanding of all the software development processes and how Agile projects are run. Taking part in the whole software life cycle and permanent desire to learn something new made me realize that a work of a front-end developer would help me to grow professionally, develop my skills and enjoy the job I am doing every day. Being a part of the teams I developed good communication skills. Respect and a friendly attitude towards every one around are the ground rules of my life."
  },
  myApps: {
    id: "myProjects",
    name: "My Projects",
    apps: [
      {
        id: "app-" + v1(),
        link: "https://borashek32.github.io/way-samurai_todolist-thursday/",
        header: "TodoList",
        imgPath: todolist,
        imgAlt: "todolist",
        target: true,
        desc: "ToDoList is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management. Made on React + Redux using all the advantages of these tools, following the right architecture and the best practices.",
      },
      {
        id: "app-" + v1(),
        link: "https://borashek32.github.io/way-samurai_social-network_ts_old/",
        header: "Social Network",
        imgPath: socialNetwork,
        imgAlt: "social-network",
        target: true,
        desc: "Social Network is an online platform that allows people to create an account and communicate with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a new post. This app was build on old school class components, following all architectural principles of them."
      },
      {
        id: "app-" + v1(),
        link: "/counters",
        header: "Counters",
        imgPath: counters,
        imgAlt: "counters",
        target: false,
        desc: "Counters are test projects which (to tell the truth) don't have a lot of practical use. They allow us to do some settings which influence on the way how the counter works. Anyways they are good examples of great opportunities which libraries of React and Redux provide. The advanced counter has a timer, what works with hooks and local storage."
      },
      {
        id: "app-" + v1(),
        link: "https://borashek32.github.io/way-samurai_hw-autotests",
        header: "Separate Blocks",
        imgPath: separateBlocks,
        imgAlt: "separate-blocks",
        target: true,
        desc: "These blocks exist on every web page. I made them using all advantages of React, native CSS just to show you. I've made them like a stand to take a separate block to a new app, what is built. Some blocks depends on each other, because they are reusable. I've built them on functional components, using Hooks, local storage."
        },
      {
        id: "app-" + v1(),
        link: "/telegram",
        header: "Messenger",
        imgPath: tl,
        imgAlt: "messenger",
        target: false,
        desc: "In this pet project I was trying to simulate behavior of the messenger like Telegram. Just imagine, that users are on separate PCs and my messenger allows them to write each other, edit own messages and delete them. Their messages appear immediately and synchronously on two parts of the screen as it is in a real messenger.",
      }
    ]
  },
  hireMe: {
    id: "hireMe",
    name: "My Resume"
  },
  contact: {
    id: "contact",
    name: "Contact Me"
  },
  mySkills: {
    id: "mySkills",
    name: "My Skills",
    apps: [
      {
        id: v1(),
        link: "https://reactjs.org",
        header: "React",
        imgPath: reactLogo,
        imgAlt: "react",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        link: "https://redux.js.org/",
        header: "Redux",
        imgPath: reduxLogo,
        imgAlt: "redux",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        link: "https://www.typescriptlang.org/",
        header: "TypeScript",
        imgPath: tsLogo,
        imgAlt: "typescript",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        link: "https://www.javascript.com/",
        header: "JavaScript",
        imgPath: jsLogo,
        imgAlt: "javascript",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        link: "https://storybook.js.org/",
        header: "StoryBook",
        imgPath: sbLogo,
        imgAlt: "storybook",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        link: "https://jestjs.io/",
        header: "Unit Testing",
        imgPath: unit,
        imgAlt: "unit-testing",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        link: "https://community.postman.com/",
        header: "Postman",
        imgPath: postman,
        imgAlt: "postman",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        link: "https://www.redhat.com/en/topics/api/what-is-a-rest-api#:~:text=choose%20Red%20Hat%3F-,Overview,by%20computer%20scientist%20Roy%20Fielding.",
        header: "RestAPI",
        imgPath: rest,
        imgAlt: "restAPI",
        desc: "",
        target: true
      },
      {
        id: v1(),
        link: "https://formik.org/",
        header: "Formik",
        imgPath: formik,
        imgAlt: "formik",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        header: "CSS/SASS",
        imgPath: cssLogo,
        imgAlt: "css/sass",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        link: "https://mui.com/",
        header: "Material UI",
        imgPath: mui,
        imgAlt: "mui",
        desc: "",
        target: true
      },
      {
        id: v1(),
        link: "https://tailwindcss.com/",
        header: "Tailwind CSS",
        imgPath: tailwind,
        imgAlt: "tailwind",
        desc: "",
        target: true
      },
      {
        id: v1(),
        link: "https://html.com/",
        header: "HTML",
        imgPath: htmlLogo,
        imgAlt: "html",
        desc: "",
        target: true,
      },
    ]
  }
}

type ActionType = any

export const mainReducer = (state = initialState, action: ActionType): MainType => {
  switch (action.type) {
    default:
      return state
  }
}