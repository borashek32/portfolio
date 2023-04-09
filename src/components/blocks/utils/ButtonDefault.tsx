import {pink} from "@mui/material/colors";
import Button from "@mui/material/Button";
import React from "react";


type ButtonDefaultType = {
  name: string
  style?: CSSStyleDeclaration
  type: "button" | "submit" | "reset" | undefined
  callback?: () => void
}

export const ButtonDefault = (props: ButtonDefaultType) => {

  return (
    <Button
      type={props.type}
      sx={{
        color: "#76ecfa",
        border: "1px solid #76ecfa",
        "&:hover": {color: pink[500], borderColor: pink[500]},
        marginTop: ((props.type) === "submit" || props.name === "CV" || props.name === "LinkedIn" || props.name === "HeadHunters" ? '' : '20%'),
        marginLeft: ((props.type) === "submit" || props.name === "CV" || props.name === "LinkedIn" || props.name === "HeadHunters" ? '' : '30%')
      }}
      variant="outlined"
      onClick={props.callback}
    >
      {props.name}
    </Button>
  )
}