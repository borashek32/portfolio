import c from 'styles/Counter.module.sass'
import {Button} from "../utils/Button";
import React from "react";
import {DisabledType, ErrorType, SettingsType} from "../../simpleCounter/SimpleCounter";
import Card from '@mui/material/Card';
import {NavLink} from "react-router-dom";

type ChangeCounterType = {
  value: number
  settings: SettingsType
  incCallback: () => void
  resetCallback: () => void
  timerCallback: () => void
  onOpenSetCallback: () => void
  disabled: DisabledType
  message: string
  error?: ErrorType
}

export const ChangeCounter = (props: ChangeCounterType) => {

  const counterClassName = c.counter
    + (props.error?.maxStartValues
    || props.error?.maxValue
    || props.error?.startValue
    || props.settings.maxValue === props.value
      ? ' ' + c.disabledCounter : '')
    + ' ' + c.counterBold

  const buttonIncClassName = c.button
    + (props.disabled.incButton ? ' ' + c.disabledButton : '')

  const buttonResClassName = c.button
    + (props.disabled.resButton ? ' ' + c.disabledButton : '')

  const buttonSetClassName = c.button + (props.disabled?.setButton ? ' ' + c.disabledButton : '')


  return (
    <Card sx={{
      backgroundColor: '#0A1929',
      border: '2px solid #61dafb',
      padding: 0.5,
      borderRadius: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 0.1,
      width: 300,
      height: 220
    }}>
      <div className={c.counterSubWrapper} style={{padding: '10px'}}>
        {props.message &&
          <p className={c.displayError + ' ' + c.message} style={{marginTop: '0'}}>
            {props.message}
          </p>
        }
        <p className={counterClassName}>{props.value}</p>
      </div>
      <div className={c.counterSubWrapper}>
        <div className={c.buttonsWrapper}>
          <Button
            name={"inc"}
            class={buttonIncClassName}
            callback={props.incCallback}
            value={props.value}
            disabled={props.disabled.incButton}
          />
          <Button
            name={"res"}
            class={buttonResClassName}
            callback={props.resetCallback}
            value={props.value}
            disabled={props.disabled.resButton}
          />
          <Button
            name={"timer"}
            class={buttonIncClassName}
            callback={props.timerCallback}
            value={props.value}
            disabled={props.disabled.timerButton}
          />
          <NavLink to="/counters/advanced-counter/settings" >
            <Button
              name={'set'}
              class={buttonSetClassName}
              callback={props.onOpenSetCallback}
            />
          </NavLink>
        </div>
      </div>
    </Card>
  )
}