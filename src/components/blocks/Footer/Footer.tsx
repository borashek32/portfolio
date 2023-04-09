import styles from 'styles/Main.module.sass'

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div>Baranova Natalya</div>
      <div>
        Copyright ©
        {/*<a href="https://www.digitalcoffeedesign.com/" style={{color: "#0A1929FF"}}>*/}
        {/*digitalcoffeedesign.com </a>*/}
        {new Date().getFullYear()}
      </div>
      <a className={styles.email} href="mailto:borashek@inbox.ru">borashek@inbox.ru</a>
    </footer>
  )
}