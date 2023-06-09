import React from "react";
import s from "./Telegram.module.sass";
import css from "styles/App.module.sass";
import {RightSide} from "./items/RightSide";
import {LeftSide} from "./items/LeftSide";
import {Back} from "components/blocks/utils/Back";

export type TelegramType = {
  name: string
}
export type MessageType = {
  _id: string
  userName: string
  value: string
}

export const Telegram: React.FC<TelegramType> = ({name}) => {

  return (
    <div className={s.mainContainer}>
      <Back />
      <div className={css.wrapper}>
        <div className={css.app}>
          <h1 className={css.title}>{name}</h1>
          <div className={s.telegramWrapper}>
            <LeftSide
              userName={"Nataly"}
            />
            <RightSide
              userName={"Igor"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}