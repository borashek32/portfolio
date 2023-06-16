import React from 'react'
import s from "styles/Main.module.sass";
import {Title} from "../utils/Title";
import {CardApp} from "../utils/CardApp";
import {useSelector} from "react-redux";
import {selectMyApps} from "components/blocks/MyApps/myApps.selector";


export const MyApps = () => {

  const myApps = useSelector(selectMyApps)

  const mappedMyApps = myApps.apps.map(app => {
    return (
      <CardApp
        id={app.id}
        key={app.id}
        link={app.link}
        header={app.header}
        imgPath={app.imgPath}
        imgAlt={app.imgAlt}
        desc={app.desc}
        target={app.target}
        gh={app.gh}
      />
    )
  })

  return (
    <div className={s.block}>
      <Title name={myApps.name} id={myApps.id} />
      <div className={s.blockFlex}>
        {mappedMyApps}
      </div>
      <div id={"mySkills"}></div>
    </div>
  )
}