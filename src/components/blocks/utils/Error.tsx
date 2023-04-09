import React from "react";
import {Box} from "@mui/material";


type ErrorType = {
  error?: string
}

export const Error: React.FC<ErrorType> = ({error}) => {
  return (
    <Box sx={{
      position: 'absolute',
      paddingTop: '4px',
      bottom: '-16px',
      borderTop: '2px solid red',
      zIndex: 1000000000000,
      width: '600px',
      '@media (max-width: 730px)': {width: "500px"},
      '@media (max-width: 630px)': {width: "400px"},
      '@media (max-width: 530px)': {width: "300px"},
      '@media (max-width: 430px)': {width: "270px"},
      '@media (max-width: 350px)': {width: "200px"},
    }}>
      <p style={{color: 'red', fontSize: '12px'}}>
        {error}
      </p>
    </Box>
  )
}