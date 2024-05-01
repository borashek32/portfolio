import React from "react";
import gitImg from './gh.png'


type LinkProps = {
  gh: string | undefined
}

export const LinkApp: React.FC<LinkProps> = ({gh}) => {

  return (
    <a href={gh} target={"_blank"} style={{display: 'flex', justifyContent: 'center'}}>
      {gh
        ? <img style={{
          width: "auto", 
          height: "30px", 
          flex: 0, 
          textAlign: 'center',
        }} 
        src={gitImg} 
        alt="git"
      />
        : <p style={{color: "#fff"}}>Private GitHub (no access)</p>
      }
    </a>
  )
}
