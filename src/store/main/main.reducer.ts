import {v1} from "uuid"
import todolist from "components/blocks/MyApps/img/todolist.jpg"
import socialNetwork from "components/blocks/MyApps/img/social-network.jpg"
import counters from "components/blocks/MyApps/img/counters.png"
import cards from "components/blocks/MyApps/img/cards.jpg"
import inst from "components/blocks/MyApps/img/inst.png"
import brilliantStore from "components/blocks/MyApps/img/store.jpg"
import math from "components/blocks/MyApps/img/math.jpg"
import kids from "components/blocks/MyApps/img/kids-club.jpg"
import global from "components/blocks/MyApps/img/global-treid-m.jpg"
import petnet from "components/blocks/MyApps/img/petnet.jpg"
import restore from "components/blocks/MyApps/img/restore.jpg"
import reactLogo from "components/blocks/MySkills/img/logo192.png"
import nextLogo from "components/blocks/MySkills/img/nextJs.svg"
import reduxLogo from "components/blocks/MySkills/img/redux.png"
import tsLogo from "components/blocks/MySkills/img/ts.png"
import jsLogo from "components/blocks/MySkills/img/js.png"
import sbLogo from "components/blocks/MySkills/img/sb.svg"
import unit from "components/blocks/MySkills/img/unit.svg"
import postman from "components/blocks/MySkills/img/postman.png"
import rest from "components/blocks/MySkills/img/rest.svg"
import formik from "components/blocks/MySkills/img/formik.svg"
import hookForm from "components/blocks/MySkills/img/hookForm.png"
import cssLogo from "components/blocks/MySkills/img/css.webp"
import mui from "components/blocks/MySkills/img/mui.png"
import tailwind from "components/blocks/MySkills/img/tailwind.png"
import htmlLogo from "components/blocks/MySkills/img/html.jpeg"
import swagger from "components/blocks/MySkills/img/swagger.svg"
import {LangType, StateType} from "store/main/main.types"
import navigation from "components/blocks/MySkills/img/navigation.png"


export const initialState: StateType = {
  lang: 'ru',
  links: [
    {index: 0, name: "About Me", href: "aboutMe"},
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
        link: "https://www.pet-net.ru/",
        header: "Pet-net",
        imgPath: petnet,
        imgAlt: "pet-net.ru",
        target: true,
        desc: ''
      },
      {
        id: "app-" + v1(),
        index: 1,
        link: "https://mobile-awards.re-store.ru/",
        header: "Mobile awards",
        imgPath: restore,
        imgAlt: "pet-net.ru",
        target: true,
        desc: ''
      },
      {
        id: "app-" + v1(),
        index: 2,
        link: "https://kids-club-lime.vercel.app/",
        gh: "https://github.com/borashek32/dsk-gorki",
        header: "Kid's club",
        imgPath: kids,
        imgAlt: "sdk-gorki",
        target: true,
        desc: ''
      },
      {
        id: "app-" + v1(),
        index: 3,
        link: "https://global-treid-m.vercel.app/",
        gh: "https://github.com/borashek32/global-treid-m",
        header: "Global treid-M",
        imgPath: global,
        imgAlt: "global-treid-m",
        target: true,
        desc: ''
      },
      {
        id: "app-" + v1(),
        index: 4,
        link: "https://borashek32.github.io/social-network_ts_old/",
        gh: "https://github.com/borashek32/way-samurai_social-network_ts_old",
        header: "Social Network",
        imgPath: socialNetwork,
        imgAlt: "social-network",
        target: true,
        desc: ''
      },
      // {
      //   id: "app-" + v1(),
      //   index: 5,
      //   link: "/counters",
      //   gh: "https://github.com/borashek32/portfolio/tree/main/src/components/counters",
      //   header: "Time Tracker",
      //   imgPath: counters,
      //   imgAlt: "counters",
      //   target: false,
      //   desc: ''
      // },
      {
        id: "app-" + v1(),
        index: 5,
        link: "https://borashek32.github.io/cards",
        gh: "https://github.com/borashek32/cards",
        header: "Smart Learning Cards",
        imgPath: cards,
        imgAlt: "cards",
        target: true,
        desc: ''
      },
      {
        id: "app-" + v1(),
        index: 6,
        link: "https://inctagram-blazing-bonfires.vercel.app/sign-in",
        gh: "https://github.com/kozyrovladimir/inctagram_blazing_bonfires/tree/dev",
        header: "Instagram Clone",
        imgPath: inst,
        imgAlt: "inst",
        target: true,
        desc: ''
      },
      {
        id: "app-" + v1(),
        index: 7,
        link: "https://learning-math-front-react.vercel.app/",
        gh: "https://github.com/borashek32/learning-math-front-react",
        header: "Free Math Trainer",
        imgPath: math,
        imgAlt: "math-trainer",
        target: true,
        desc: ''
      },
      // {
      //   id: "app-" + v1(),
      //   index: 9,
      //   link: "https://borashek32.github.io/jewellery-store-native-front-webpack/",
      //   gh: "https://github.com/borashek32/jewellery-store-native-front-webpack",
      //   header: "Native JS Brilliant Store",
      //   imgPath: brilliantStore,
      //   imgAlt: "brilliant-store",
      //   target: true,
      //   desc: ''
      // },
      // {
      //   id: "app-" + v1(),
      //   index: 10,
      //   link: "https://borashek32.github.io/todolists/",
      //   gh: "https://github.com/borashek32/todolists",
      //   header: "Task Manager",
      //   imgPath: todolist,
      //   imgAlt: "todolists",
      //   target: true,
      //   desc: ''
      // },
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
        header: "ReactJS",
        imgPath: reactLogo,
        imgAlt: "react",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 1,
        link: "https://nextjs.org",
        header: "NextJS",
        imgPath: nextLogo,
        imgAlt: "next",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 2,
        link: "https://reactnative.dev/",
        header: "React Native",
        imgPath: reactLogo,
        imgAlt: "react",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 3,
        link: "https://redux.js.org/",
        header: "Redux",
        imgPath: reduxLogo,
        imgAlt: "redux",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 4,
        link: "https://www.typescriptlang.org/",
        header: "TypeScript",
        imgPath: tsLogo,
        imgAlt: "typescript",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 5,
        link: "https://www.javascript.com/",
        header: "JavaScript",
        imgPath: jsLogo,
        imgAlt: "javascript",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 6,
        link: "https://storybook.js.org/",
        header: "StoryBook",
        imgPath: sbLogo,
        imgAlt: "storybook",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 7,
        link: "https://jestjs.io/",
        header: "Unit Testing",
        imgPath: unit,
        imgAlt: "unit-testing",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 8,
        link: "https://community.postman.com/",
        header: "Postman",
        imgPath: postman,
        imgAlt: "postman",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 9,
        link: "https://www.redhat.com/en/topics/api/what-is-a-rest-api#:~:text=choose%20Red%20Hat%3F-,Overview,by%20computer%20scientist%20Roy%20Fielding.",
        header: "RestAPI",
        imgPath: rest,
        imgAlt: "restAPI",
        desc: "",
        target: true
      },
      {
        id: v1(),
        index: 10,
        link: "https://swagger.io/",
        header: "Swagger",
        imgPath: swagger,
        imgAlt: "swagger",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 11,
        link: "https://formik.org/",
        header: "Formik",
        imgPath: formik,
        imgAlt: "formik",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 12,
        link: "https://react-hook-form.com/",
        header: "React Hook Form",
        imgPath: hookForm,
        imgAlt: "hookForm",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 13,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        header: "CSS/SASS/SCSS",
        imgPath: cssLogo,
        imgAlt: "css/sass",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 14,
        link: "https://mui.com/",
        header: "Material UI",
        imgPath: mui,
        imgAlt: "mui",
        desc: "",
        target: true
      },
      {
        id: v1(),
        index: 15,
        link: "https://tailwindcss.com/",
        header: "Tailwind CSS",
        imgPath: tailwind,
        imgAlt: "tailwind",
        desc: "",
        target: true
      },
      {
        id: v1(),
        index: 16,
        link: "https://html.com/",
        header: "HTML",
        imgPath: htmlLogo,
        imgAlt: "html",
        desc: "",
        target: true,
      },
      {
        id: v1(),
        index: 17,
        link: "https://reactnavigation.org/",
        header: "React Navigation",
        imgPath: navigation,
        imgAlt: "navigation",
        desc: "",
        target: true,
      }
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
