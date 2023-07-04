import {Trans} from 'react-i18next'
import styles from 'styles/Main.module.sass'
import {memo} from "react"

export const Footer = memo(() => {

  return (
    <footer className={styles.footer}>
      <div>
        <Trans i18nKey={"myNameFooter"}>
          Baranova Natalya
        </Trans>
      </div>

      <div>
        Copyright ©
        {/*<a href="https://www.digitalcoffeedesign.com/" style={{color: "#0A1929FF"}}>*/}
        {/*digitalcoffeedesign.com </a>*/}
        {new Date().getFullYear()}
      </div>

      <a className={styles.email} href="mailto:borashek@inbox.ru">borashek@inbox.ru</a>
    </footer>
  )
})