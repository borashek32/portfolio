import { useSelector } from "react-redux"
import { selectAboutMe } from "components/blocks/AboutMe/aboutMe.selector"
import { Trans } from "react-i18next"
import { Box, Container, Typography } from '@mui/material'
import { Header } from '../utils/Header'
import { AppContainer } from '../utils/AppContainer'


export const AboutMe = () => {
  const aboutMe = useSelector(selectAboutMe)

  return (
    <AppContainer 
      id={aboutMe.id}
      bgColor='#170550'
    >
      <Header
        title='aboutMe.about'
        titleOtherColor='aboutMe.me'
      />

      <Container 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
          '@media (max-width: 1000px)': {
            flexDirection: 'column'
          },
        }}>
        <Box
          sx={{
            borderRadius: '15px'
          }}
        >
          <img 
          src={require('./me.jpg')} 
          alt="me" 
          width='300px' 
          style={{borderRadius: '15px'}}
        />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 600,
              marginBottom: 2,
              '@media (max-width: 1000px)': {
                textAlign: 'center'
              },
            }}
          >
            <Trans i18nKey={"aboutMe.title"} />
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 600,
              '@media (max-width: 1000px)': {
                textAlign: 'center'
              },
              '@media (max-width: 800px)': {
                fontWeight: 500
              },
            }}
          >
            <Trans i18nKey={"aboutMe.desc"} />
          </Typography>
        </Box>
      </Container>
    </AppContainer>
  )
}