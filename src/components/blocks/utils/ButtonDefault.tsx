import Button from "@mui/material/Button";

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
        color: "#fff",
        fontSize: '18px',
        fontWeight: 600,
        backgroundColor: '#F86F03',
        padding: '5px 10px',
        borderRadius: 20,
        transition: 'color, .3s ease',
        "&:hover": {
          backgroundColor: '#5cd2df'
        },
        // marginTop: ((props.type) === "submit" || props.name === "CV" || props.name === "LinkedIn" || props.name === "HeadHunters" ? '' : '20%'),
        // marginLeft: ((props.type) === "submit" || props.name === "CV" || props.name === "LinkedIn" || props.name === "HeadHunters" ? '' : '30%')
      }}
      onClick={props.callback}
    >
      {props.name}
    </Button>
  )
}