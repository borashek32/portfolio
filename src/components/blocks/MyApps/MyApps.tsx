import React from 'react'
import s from "styles/Main.module.sass"
import {CardApp} from "../utils/CardApp"
import {useSelector} from "react-redux"
import {selectMyApps} from "components/blocks/MyApps/myApps.selector"
import {Trans} from "react-i18next"
// @ts-ignore
import Flip from "react-reveal/Flip"


export const MyApps = () => {

  const myApps = useSelector(selectMyApps)

  const mappedMyApps = myApps.apps.map(app => {
    return (
      <CardApp
        id={app.id}
        index={app.index}
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
      <Flip>
        <h2 id={myApps.id} className={s.blockTitle}>
          <Trans i18nKey={"myApps.name"}>{myApps.name}</Trans>
        </h2>
      </Flip>
      <div className={s.blockFlex}>
        {mappedMyApps}
      </div>
      <div id={"mySkills"}></div>
    </div>
  )
}
