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


type MainPropsType = {
  name: string
}

export const Main: React.FC<MainPropsType> = ({name}) => {


  return (
    <div className={css.container}>
      <Nav/>
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