import React from "react"
import { NavLink } from "react-router-dom"
import styles from './MyApps.module.sass'
import { LinkApp } from "components/blocks/utils/LinkApp"
import { Trans } from "react-i18next"
import { Box, Typography } from "@mui/material"

type CardAppType = {
  id: string
  index: number
  link: string
  header: string
  imgPath: string
  imgAlt: string
  desc: string
  target: boolean
  gh: string | undefined
}

export const CardApp: React.FC<CardAppType> = ({
  id,
  index,
  link,
  header,
  imgPath,
  imgAlt,
  desc,
  target,
  gh,
}) => {

  return (
    <Box className={styles.cardApp}>
      <Box sx={{}}>
        <img src={imgPath} alt={imgAlt} className={styles.cardImg} style={{borderRadius: 10}} />
      </Box>

      <Box className={styles.cardAppHover}>
        {target ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <Typography sx={{
              fontSize: 18
            }}>
              <Trans key={index} i18nKey={`myApps.apps.${index}.header`}>
                {header}
              </Trans>
              <LinkApp gh={gh}/>
            </Typography>
          </a>
        ) : (
          <NavLink to={link}>
            <Typography sx={{
              fontSize: 18
            }}>
              <Trans key={index} i18nKey={`myApps.apps.${index}.header`}>
                {header}
              </Trans>
            </Typography>
            <LinkApp gh={gh}/>
          </NavLink>
        )}
      </Box>
    </Box>
  )
} 
