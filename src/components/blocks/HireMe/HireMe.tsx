import s from "styles/Main.module.sass";
import * as React from "react";
import {Title} from "../utils/Title";
import {ButtonDefault} from "../utils/ButtonDefault";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {selectHireMe} from "components/blocks/HireMe/hireMe.selector";


export const HireMe = () => {

  const hireMe = useSelector(selectHireMe)

  return (
    <div className={s.block} id={"myProjects"}>

      <Title name={hireMe.name}/>

      <div className={s.blockHireMe}>
        <NavLink to={'/cv'}>
          <ButtonDefault name={"CV"} type={"button"} />
        </NavLink>
        <a href="https://www.linkedin.com/in/nataly-baranova-972952253/" target={'_blank'}>
          <ButtonDefault name={"LinkedIn"} type={"button"} />
        </a>
        <a href="https://hh.ru/applicant/resumes?hhtmFrom=settings&hhtmFromLabel=header" target={'_blank'}>
          <ButtonDefault name={"HeadHunters"} type={"button"} />
        </a>
      </div>
    </div>
  )
}