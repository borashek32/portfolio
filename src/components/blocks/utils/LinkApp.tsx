import React from "react";
import gitImg from './gh.png'


type LinkProps = {
  gh: string | undefined
}

export const LinkApp: React.FC<LinkProps> = ({gh}) => {

  return (
    <a href={gh} target={"_blank"}>
      <img style={{width: "auto", height: "30px", flex: 0}} src={gitImg} alt="git"/>
    </a>
  )
}