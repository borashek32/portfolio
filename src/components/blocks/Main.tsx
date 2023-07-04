import styles from 'styles/Main.module.sass'
import s from 'styles/App.module.sass'
import {AboutMe} from './AboutMe/AboutMe'
import {MySkills} from './MySkills/MySkills'
import {MyApps} from './MyApps/MyApps'
import {HireMe} from "./HireMe/HireMe"
import {Contact} from "./Contact/Contact"
import {Footer} from "./Footer/Footer"
import css from "styles/App.module.sass"
import {Nav} from "./Nav/Nav"
import Typed from "react-typed"
import {useTranslation} from "react-i18next"
import {LangType} from "store/main/main.types"
import * as React from "react"


type MainPropsType = {
  name: string
}

export const Main: React.FC<MainPropsType> = ({name}) => {

  const { i18n } = useTranslation()

  const handleChangeLanguage = (language: LangType) => {
    i18n.changeLanguage(language)
  }

  return (
    <div className={css.container}>
      <Nav handleChangeLanguage={handleChangeLanguage} />
      <div className={s.backgroundAnimation}>
        <div className={styles.mainFlexWrapper}>
          <div className={styles.mainContainer}>
            <h1 className={styles.title} id={'aboutMe'}>
              <Typed
                strings={[name]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </h1>
            <AboutMe/>
            <HireMe/>
            <MyApps/>
            <MySkills/>
            <Contact/>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}