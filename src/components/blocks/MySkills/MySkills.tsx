import React from 'react'
import s from "styles/Main.module.sass";
import {Title} from "../utils/Title";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {selectMySkills} from "components/blocks/MySkills/mySkills.selector";


export const MySkills = () => {

  const mySkills = useSelector(selectMySkills)

  const mappedMySkills = mySkills.apps.map(app => {

    const imgStyles = s.blockLogo + ' ' + (app.header === "React" ? s.blockLogoReact
      : app.header === "Redux" ? s.blockLogoRedux : '')

    if (app.target) {
      return (
        <a
          key={app.id}
          href={app.link}
          className={s.navLinkClassSkills}
          target={"_blank"}
        >
          <div className={s.logoWrapper}>
            <img
              src={app.imgPath}
              alt={app.imgAlt}
              className={imgStyles}
            />
          </div>
          <h4 className={s.blockCardSectionsHeader}>{app.header}</h4>
        </a>
      )
    }

    return (
      <NavLink
        key={app.id}
        to={app.link}
        className={s.navLinkClassSkills}
      >
        <div className={s.logoWrapper}>
          <img
            src={app.imgPath}
            alt={app.imgAlt}
            className={imgStyles}
          />
        </div>
        <h4 className={s.blockCardSectionsHeader}>{app.header}</h4>
      </NavLink>
    )
  })

  return (
    <div className={s.block}>
      <Title name={mySkills.name} id={mySkills.id}/>
      <div className={s.blockFlex}>
        {mappedMySkills}
      </div>
    </div>
  )
}