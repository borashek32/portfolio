import {Trans} from 'react-i18next'
import styles from 'styles/Main.module.sass'

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div>
        <Trans i18nKey={"myNameFooter"}>
          Baranova Natalia
        </Trans>
      </div>

      <div>
        Copyright ©
        {/*<a href="https://www.digitalcoffeedesign.com/" style={{color: "#0A1929FF"}}>*/}
        {/*digitalcoffeedesign.com </a>*/}
        {new Date().getFullYear()}
      </div>

      <a className={styles.email} href="mailto:baranova.natalia.frontend@gmail.com">
        baranova.natalia.frontend@gmail.com
      </a>
    </footer>
  )
}