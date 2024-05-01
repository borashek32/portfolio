import { Container } from "@mui/material"
import { ReactElement } from "react"

type Props = {
  id: string
  bgColor: string
  children: ReactElement | ReactElement[] | any
}

export const AppContainer = ({
  id,
  bgColor,
  children,
}: Props) => {

  return (
    <Container 
      id={id} 
      maxWidth={false}
      sx={{
        height: 'auto',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: bgColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {children}
    </Container>
  )
}