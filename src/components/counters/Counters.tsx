import SimpleCounter from "./simpleCounter/SimpleCounter";
import AdvancedCounter from "./advancedCounter/AdvancedCounter";
import css from "styles/App.module.sass";
import {blue} from "@mui/material/colors";
import UndoIcon from '@mui/icons-material/Undo';

export const Counters = () => {
  return (
    <div className={css.container} style={{backgroundColor: blue[100]}}>
      <div style={{marginLeft: '10px', marginTop: '20px'}}>
        <a href="/portfolio">
          <UndoIcon />
        </a>
      </div>
      <div className={css.wrapper}>
        <SimpleCounter name={"Simple Counter"} />
        <AdvancedCounter name={"Advanced Counter"} />
      </div>
    </div>
  )
}