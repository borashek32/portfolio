import React from 'react'
import {AlertTitle} from "@mui/material"
import {pink} from "@mui/material/colors"
import {Link as SmoothLink} from "react-scroll"


type NavbarLinkType = {
  name: string
  href: string
  onClose: () => void
}

export const NavbarLink: React.FC<NavbarLinkType> = ({name, href, onClose}) => {

  return (
    <SmoothLink to={href} spy={true} smooth={true} offset={50} duration={500}>
      <AlertTitle
        onClick={onClose}
        sx={{
          my: 4,
          width: "100%",
          color: '#0A1929FF',
          fontWeight: 600,
          fontSize: "14px",
          display: 'block',
          textTransform: "uppercase",
          "&:hover": {color: pink[500]},
          '@media (max-width: 900px)': {
            color: '#fff',
            fontSize: "20px",
            marginRight: 0
          },
          whiteSpace: "nowrap",
          marginRight: "15px",
          cursor: 'pointer'
        }}
      >{name}</AlertTitle>
    </SmoothLink>
  )
}