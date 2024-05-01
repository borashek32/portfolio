import {Input} from "@mui/material";
import * as React from "react";
import {ChangeEvent} from "react";


type InputDefaultType = {
  placeholder?: string
  name: string
  value: string
  onChange: (e: ChangeEvent<any>) => void
  onBlur: (e: ChangeEvent<any>) => void
}

export const InputDefault: React.FC<InputDefaultType> = ({placeholder, name, onChange, onBlur, value}) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      size="small"
      rows="1"
      margin="none"
      sx={{
        width: "600px",
        '@media (max-width: 730px)': {width: "500px"},
        '@media (max-width: 630px)': {width: "400px"},
        '@media (max-width: 530px)': {width: "300px"},
        '@media (max-width: 430px)': {width: "270px"},
        '@media (max-width: 350px)': {width: "200px"},
        '&::after': {borderBottom: '2px solid #F86F03'},
        input: {
          color: "#fff",
          "&::placeholder": {
            color: "#fff",
          },
          borderBottom: '2px solid #FFFFFF99',
          paddingTop: '10px',
        }
      }}
    />
  )
}