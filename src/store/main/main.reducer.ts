import {v1} from "uuid"
import todolist from "components/blocks/MyApps/img/todolist.jpg"
import socialNetwork from "components/blocks/MyApps/img/social-network.jpg"
import counters from "components/blocks/MyApps/img/counters.png"
import cards from "components/blocks/MyApps/img/cards.jpg"
import pb from "components/blocks/MyApps/img/pb.png"
import parts from "components/blocks/MyApps/img/parts.jpg"
import portfolio from "components/blocks/MyApps/img/portfolio.jpg"
import separateBlocks from "components/blocks/MyApps/img/separate-blocks.jpg"
import reactLogo from "components/blocks/MySkills/img/logo192.png"
import reduxLogo from "components/blocks/MySkills/img/redux.png"
import tsLogo from "components/blocks/MySkills/img/ts.png"
import jsLogo from "components/blocks/MySkills/img/js.png"
import sbLogo from "components/blocks/MySkills/img/sb.svg"
import unit from "components/blocks/MySkills/img/unit.svg"
import postman from "components/blocks/MySkills/img/postman.png"
import rest from "components/blocks/MySkills/img/rest.svg"
import formik from "components/blocks/MySkills/img/formik.svg"
import cssLogo from "components/blocks/MySkills/img/css.webp"
import mui from "components/blocks/MySkills/img/mui.png"
import tailwind from "components/blocks/MySkills/img/tailwind.png"
import htmlLogo from "components/blocks/MySkills/img/html.jpeg"
import {LangType, StateType} from "store/main/main.types"


export const initialState: StateType = {
  lang: 'en',
  links: [
    {index: 0, name: "About Me", href: "aboutMe"},
    {index: 1, name: "My Resumes", href: "hireMe"},
    {index: 2, name: "My Projects", href: "myProjects"},
    {index: 3, name: "My Skills", href: "mySkills"},
    {index: 4, name: "Contact", href: "contact"}
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
        index: 0,
        link: "https://borashek32.github.io/todolists/",
        gh: "https://github.com/borashek32/todolists",
        header: "Task Manager",
        imgPath: todolist,
        imgAlt: "todolists",
        target: true,
        // desc: "Task tracker is an online platform for organizing your personal or work tasks which can help you to increase the productivity, manage tasks effectively and improve time management. Made on React + Redux using all the advantages of these tools, following the right architecture and the best practices.",
        desc: ''
      },
      {
        id: "app-" + v1(),
        index: 1,
        link: "https://borashek32.github.io/personal-blog/",
        gh: "https://github.com/borashek32/personal-blog",
        header: "Personal Blog (in process)",
        imgPath: pb,
        imgAlt: "personal-blog",
        target: true,
        // desc: "Task tracker is an online platform for organizing your personal or work tasks which can help you to increase the productivity, manage tasks effectively and improve time management. Made on React + Redux using all the advantages of these tools, following the right architecture and the best practices.",
        desc: ''
      },
      {
        id: "app-" + v1(),
        index: 2,
        link: "https://borashek32.github.io/way-samurai_social-network_ts_old/",
        gh: "https://github.com/borashek32/way-samurai_social-network_ts_old",
        header: "Social Network",
        imgPath: socialNetwork,
        imgAlt: "social-network",
        target: true,
        // desc: "Social Network is an online platform for any company that allows people to create an account and communicate with other people on the website. It can be used in a company, for example. This app was build on old school class components, following all architectural principles of them."
        desc: ''
      },
      {
        id: "app-" + v1(),
        index: 3,
        link: "/counters",
        gh: "https://github.com/borashek32/portfolio/tree/main/src/components/counters",
        header: "Time Tracker",
        imgPath: counters,
        imgAlt: "counters",
        target: false,
        // desc: "To tell the truth, counters don't have a lot of practical use. They allow us to do some settings which influence on the way how the counter works. Anyways they are good examples of great opportunities which libraries of React and Redux provide. The advanced counter has a timer, what works on hooks and local storage."
        desc: ''
      },
      {
        id: "app-" + v1(),
        index: 4,
        link: "https://borashek32.github.io/cards",
        gh: "https://github.com/borashek32/cards",
        header: "Smart Learning Cards",
        imgPath: cards,
        imgAlt: "cards",
        target: true,
        // desc: "This app is a management system. It can be implemented at school, university or any work. It allow us to create packs and cards in them. Every card consists of a question and a correct answer. You reply to a question and can immediately check yourself. My system build on reusable components and it can be rewrote for any business easily."
        desc: ''
      },
      {
        id: "app-" + v1(),
        index: 5,
        link: "https://lemma-auto.ru",
        gh: "",
        header: "Shop of Auto Parts",
        imgPath: parts,
        imgAlt: "parts",
        target: true,
        // desc: "This app is a management system. It can be implemented at school, university or any work. It allow us to create packs and cards in them. Every card consists of a question and a correct answer. You reply to a question and can immediately check yourself. My system build on reusable components and it can be rewrote for any business easily."
        desc: ''
      },
      // {
      //   id: "app-" + v1(),
      //   index: 6,
      //   link: "https://www.digitalcoffeedesign.com/",
      //   gh: "https://github.com/borashek32/digitalcoffeedesign.com",
      //   header: "My Old Portfolio",
      //   imgPath: portfolio,
      //   imgAlt: "portfolio",
      //   target: true,
      //   // desc: "This app is a management system. It can be implemented at school, university or any work. It allow us to create packs and cards in them. Every card consists of a question and a correct answer. You reply to a question and can immediately check yourself. My system build on reusable components and it can be rewrote for any business easily."
      //   desc: ''
      // }
      // {
      //   id: "app-" + v1(),
      //   index: 4,
      //   link: "https://borashek32.github.io/way-samurai_hw-autotests",
      //   gh: "https://github.com/borashek32/way-samurai_hw-autotests",
      //   header: "Separate Blocks",
      //   imgPath: separateBlocks,
      //   imgAlt: "separate-blocks",
      //   target: true,
      //   // desc: "These blocks exist on every web page. I made them using all advantages of React, native CSS just to show you. I've made them like a stand to take a separate block to a new app, what is built. Some blocks depends on each other, because they are reusable. I've built them on functional components, using Hooks, local storage."
      //   desc: ''
      // },
      // {
      //   id: "app-" + v1(),
      //   link: "/telegram",
      //   gh: "https://github.com/borashek32/portfolio/tree/main/src/components/telegram",
      //   header: "Messenger",
      //   imgPath: tl,
      //   imgAlt: "messenger",
      //   target: false,
      //   // desc: "In this pet project I was trying to simulate behavior of the messenger like Telegram. Just imagine, that users are on separate PCs and my messenger allows them to write each other, edit own messages and delete them. Their messages appear immediately and synchronously on two parts of the screen as it is in a real messenger.",
      // desc: ''
      // }
    ]
  },
  hireMe: {
    id: "hireMe",
    name: "My Resumes"
  },
  contact: {
    id: "contact",
    name: "Contact Me",
    placeholderName: "Enter your name",
    placeholderEmail: "Enter your email",
    placeholderMessage: "Enter your message"
  },
  mySkills: {
    id: "mySkills",
    name: "My Skills",
    apps: [
      {
        id: v1(),
        index: 0,
        link: "https://reactjs.org",
        header: "React",
        imgPath: reactLogo,
        imgAlt: "react",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 1,
        link: "https://redux.js.org/",
        header: "Redux",
        imgPath: reduxLogo,
        imgAlt: "redux",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 2,
        link: "https://www.typescriptlang.org/",
        header: "TypeScript",
        imgPath: tsLogo,
        imgAlt: "typescript",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 3,
        link: "https://www.javascript.com/",
        header: "JavaScript",
        imgPath: jsLogo,
        imgAlt: "javascript",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 4,
        link: "https://storybook.js.org/",
        header: "StoryBook",
        imgPath: sbLogo,
        imgAlt: "storybook",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 5,
        link: "https://jestjs.io/",
        header: "Unit Testing",
        imgPath: unit,
        imgAlt: "unit-testing",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 6,
        link: "https://community.postman.com/",
        header: "Postman",
        imgPath: postman,
        imgAlt: "postman",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 7,
        link: "https://www.redhat.com/en/topics/api/what-is-a-rest-api#:~:text=choose%20Red%20Hat%3F-,Overview,by%20computer%20scientist%20Roy%20Fielding.",
        header: "RestAPI",
        imgPath: rest,
        imgAlt: "restAPI",
        desc: "",
        target: true
      },
      {
        id: v1(),
        index: 8,
        link: "https://formik.org/",
        header: "Formik",
        imgPath: formik,
        imgAlt: "formik",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 9,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        header: "CSS/SASS",
        imgPath: cssLogo,
        imgAlt: "css/sass",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 10,
        link: "https://mui.com/",
        header: "Material UI",
        imgPath: mui,
        imgAlt: "mui",
        desc: "",
        target: true
      },
      {
        id: v1(),
        index: 11,
        link: "https://tailwindcss.com/",
        header: "Tailwind CSS",
        imgPath: tailwind,
        imgAlt: "tailwind",
        desc: "",
        target: true
      },
      {
        id: v1(),
        index: 12,
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

type ActionType = ChangeLangType

type ChangeLangType = {
  type: "CHANGE_LANG_TYPE"
  lang: LangType
}

export const mainReducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case "CHANGE_LANG_TYPE": {
      return {
        ...state,
        lang: action.lang
      }
    }
    default:
      return state
  }
}

export const ChangeLangAC = (lang: LangType) => ({ type: "CHANGE_LANG_TYPE", lang })
