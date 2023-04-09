import React from "react";
import gitImg from './gh.png'


type LinkProps = {
  gh: string | undefined
}

export const LinkApp: React.FC<LinkProps> = ({gh}) => {

  return (
    <a href={gh} target={"_blank"}>
      <img style={{border: "4px", margin: "2px 0px 10px 10px", width: "auto", height: "30px"}} src={gitImg} alt="git"/>
    </a>
  )
}