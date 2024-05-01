import { Box, Typography } from "@mui/material"
import {Trans} from "react-i18next"
// @ts-ignore
import Flip from 'react-reveal/Flip'

type Props = {
  id?: string
  title: string
  titleOtherColor?: string
}

export const Header = ({
  id,
  title,
  titleOtherColor
}: Props) => {

  return (
    <Flip>
        <Typography 
          id={id} 
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
            <Trans i18nKey={title} />
          </Typography>
          {titleOtherColor &&
            <Typography sx={{
              color: '#F86F03',
              fontSize: 40
              }}
            >
              <Trans i18nKey={titleOtherColor} />
            </Typography>
          }
        </Typography>
        <Box
          sx={{
            width: "300px",
            height: 2,
            backgroundColor: '#fff',
            marginBottom: 10
        }}
        ></Box>
      </Flip>
  )
}