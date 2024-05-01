import React from 'react'
import s from 'styles/Main.module.sass'
import {useSelector} from "react-redux";
import {selectAboutMe} from "components/blocks/AboutMe/aboutMe.selector"
import {Trans} from "react-i18next"
// @ts-ignore
import Flip from 'react-reveal/Flip'
import { Box, Container, Typography } from '@mui/material';


export const AboutMe = () => {
  const aboutMe = useSelector(selectAboutMe)

  return (
    <Container 
      id={"hireMe"} 
      maxWidth={false}
      sx={{
        height: 'auto',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#170550',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '@media (max-width: 1000px)': {
          
        },
        '@media (max-width: 640px)': {
         
        }
      }}
    >
      <Flip>
        <Typography 
          id={aboutMe.id} 
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
          }}  
        >
          <Typography sx={{
              color: '#fff',
              fontSize: 40,
            }}
          >
            <Trans i18nKey={"aboutMe.about"} />
          </Typography>
          <Typography sx={{
              color: '#F86F03',
              fontSize: 40
            }}
          >
            <Trans i18nKey={"aboutMe.me"} />
          </Typography>
        </Typography>
        <Box 
          sx={{
            width: 200,
            height: 2,
            backgroundColor: '#fff',
            marginBottom: 10
        }}
        ></Box>
      </Flip>

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
    </Container>
  )
}