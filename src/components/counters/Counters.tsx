import SimpleCounter from "./simpleCounter/SimpleCounter";
import AdvancedCounter from "./advancedCounter/AdvancedCounter";
import css from "styles/App.module.sass";
import {Back} from "components/blocks/utils/Back";

export const Counters = () => {
  return (
    <div className={css.container}>
      <Back />
      <div className={css.wrapper}>
        <SimpleCounter name={"Simple Counter"} />
        <AdvancedCounter name={"Advanced Counter"} />
      </div>
    </div>
  )
}