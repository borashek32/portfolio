import SimpleCounter from "./simpleCounter/SimpleCounter";
import AdvancedCounter from "./advancedCounter/AdvancedCounter";
import css from "styles/App.module.sass";
import {blue} from "@mui/material/colors";
import {Back} from "components/blocks/utils/Back";

export const Counters = () => {
  return (
    <div className={css.container} style={{backgroundColor: blue[100]}}>
      <Back />
      <div className={css.wrapper}>
        <SimpleCounter name={"Simple Counter"} />
        <AdvancedCounter name={"Advanced Counter"} />
      </div>
    </div>
  )
}