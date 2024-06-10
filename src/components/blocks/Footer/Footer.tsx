import { Container, Typography } from '@mui/material'
import {Trans} from 'react-i18next'
import styles from 'styles/Main.module.sass'

export const Footer = () => {

  return (
    <Container sx={{
      height: 'auto',
      paddingTop: 6,
      paddingBottom: 6,
      backgroundColor: '#170550',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
      maxWidth={false}
    >
      <Typography sx={{
        fontSize: 20,
        fontWeight: 600
      }}>
        <Trans i18nKey={"myNameFooter"}>
          Baranova Natalia
        </Trans>
      </Typography>

      <Typography sx={{
        fontSize: 20,
        fontWeight: 600
      }}>
        Copyright ©
        {/*<a href="https://www.digitalcoffeedesign.com/" style={{color: "#0A1929FF"}}>*/}
        {/*digitalcoffeedesign.com </a>*/}
        {new Date().getFullYear()}
      </Typography>

      <a href="mailto:baranova.natalia.frontend@gmail.com">
        <Typography sx={{
          fontSize: 20,
          fontWeight: 600
        }}>
          baranova.natalia.frontend@gmail.com
        </Typography>
      </a>
    </Container>
  )
}