import React from 'react'
import s from 'styles/Main.module.sass'
import {Title} from "../utils/Title"
import {useSelector} from "react-redux";
import {selectAboutMe} from "components/blocks/AboutMe/aboutMe.selector";


export const AboutMe = () => {

  const blockAboutWrapper = s.blockWrapper + " " + s.blockAboutWrapper

  const aboutMe = useSelector(selectAboutMe)

  return (
    <div className={s.block} id={"hireMe"}>
      <Title name={aboutMe.name} />
      <div className={blockAboutWrapper}>
        <div className={s.blockImg}>
          <img src={require('./me.jpg')} alt="me" width='200px'/>
        </div>
        <div className={s.blockAbout}>
          <div className={s.blockFlex}>
            {aboutMe.desc}
          </div>
        </div>
      </div>
    </div>
  )
}