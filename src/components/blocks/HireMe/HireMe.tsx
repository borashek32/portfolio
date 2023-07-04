import s from "styles/Main.module.sass" 
import * as React from "react" 
import {ButtonDefault} from "../utils/ButtonDefault" 
import {useSelector} from "react-redux" 
import {selectHireMe} from "components/blocks/HireMe/hireMe.selector" 
import {memo, useState} from "react"
import Notification from "components/blocks/utils/Notification" 
import Loader from "../utils/Loader" 
import {Trans} from "react-i18next"
import {selectLang} from "components/blocks/Nav/nav.selector"
// @ts-ignore
import Flip from "react-reveal/Flip"

export const HireMe = memo(() => {

  const hireMe = useSelector(selectHireMe)
  const [loader, setLoader] = useState(false)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)

  const lang = useSelector(selectLang)

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const downloadPDF = () => {
    try {
      setLoader(true)
      setError(false)
      setTimeout(() => {
        setLoader(false)
        setOpen(true)
      }, 1000)
    } catch {
      setError(true)
    }
  }

  return (
    <div className={s.block} id={"myProjects"}>
      <Flip>
        <h2 id={hireMe.id} className={s.blockTitle}>
          <Trans i18nKey={"hireMe.name"}>{hireMe.name}</Trans>
        </h2>
      </Flip>

      {loader && <Loader />}

      {(open || error) && <Notification
        text={open ? "CV downloaded successfully" : "Something went wrong. Please try later or contact me"}
        severity={open ? "success" : "error"}
        handleClose={handleClose}
        open={open || error}
      />}

      <div className={s.blockHireMe}>
        <a href={lang === 'ru' ? './cv_rus.pdf' : lang === 'en' ? './cv_eng.pdf' : './cv_esp.pdf'} download>
          <ButtonDefault name={"CV"} type={"button"} callback={downloadPDF} />
        </a>

        <a href="https://www.linkedin.com/in/nataly-baranova-972952253/" target={'_blank'}>
          <ButtonDefault name={"LinkedIn"} type={"button"} />
        </a>

        <a href="https://hh.ru/applicant/resumes?hhtmFrom=settings&hhtmFromLabel=header" target={'_blank'}>
          <ButtonDefault name={"HeadHunters"} type={"button"} />
        </a>
      </div>
    </div>
  )
})