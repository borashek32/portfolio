import styles from "styles/Main.module.sass"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectMySkills } from "components/blocks/MySkills/mySkills.selector"
import { Header } from "../utils/Header"
import { AppContainer } from "../utils/AppContainer"

export const MySkills = () => {
  const mySkills = useSelector(selectMySkills)

  const mappedMySkills = mySkills.apps.map(app => {
    const imgStyles = styles.blockLogo + ' '
      + (app.header === "React" ? styles.blockLogoReact
      : app.header === "Redux" ? styles.blockLogoRedux : '')

    if (app.target) {
      return (
        <a
          key={app.id}
          href={app.link}
          className={styles.navLinkClassSkills}
          target={"_blank"}
        >
          <div className={styles.logoWrapper}>
            <img
              src={app.imgPath}
              alt={app.imgAlt}
              className={imgStyles}
            />
          </div>
          <h4 className={styles.blockCardSectionsHeader}>{app.header}</h4>
        </a>
      )
    }

    return (
      <NavLink
        key={app.id}
        to={app.link}
        className={styles.navLinkClassSkills}
      >
        <div className={styles.logoWrapper}>
          <img
            src={app.imgPath}
            alt={app.imgAlt}
            className={imgStyles}
          />
        </div>
        <h4 className={styles.blockCardSectionsHeader}>{app.header}</h4>
      </NavLink>
    )
  })

  return (
    <AppContainer
      id={mySkills.id}
      bgColor="#170550"
    >
      <Header 
        id={mySkills.name}
        title='mySkills.my'
        titleOtherColor='mySkills.skills'
      />
      <div className={styles.blockFlex}>
        {mappedMySkills}
      </div>
    </AppContainer>
  )
}
