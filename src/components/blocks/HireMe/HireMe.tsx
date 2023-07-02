import s from "styles/Main.module.sass";
import * as React from "react";
import {Title} from "../utils/Title";
import {ButtonDefault} from "../utils/ButtonDefault";
import {useSelector} from "react-redux";
import {selectHireMe} from "components/blocks/HireMe/hireMe.selector";
import {useState} from "react";
import Notification from "components/blocks/utils/Notification";
import Loader from "../utils/Loader";


export const HireMe = () => {


  const hireMe = useSelector(selectHireMe)
  const [loader, setLoader] = useState(false)
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false)

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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
      <Title name={hireMe.name}/>
      {loader && <Loader />}
      {(open || error) && <Notification
        text={open ? "CV downloaded successfully" : "Something went wrong. Please try later or contact me"}
        severity={open ? "success" : "error"}
        handleClose={handleClose}
        open={open || error}
      />}
      <div className={s.blockHireMe}>
        <a href={'./cv_eng.pdf'} download>
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
}