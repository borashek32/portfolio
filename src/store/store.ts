import {combineReducers, legacy_createStore} from 'redux'
import {telegramReducer} from "./telegram/telegram-reducer";
import {simpleCounterReducer} from "./counters/simple-counter-reducer";
import {advancedCounterReducer} from "./counters/advanced-counter-reducer";
import {mainReducer} from "store/main/main.reducer";


const rootReducer = combineReducers({
  main: mainReducer,
  telegram: telegramReducer,
  simpleCounter: simpleCounterReducer,
  advancedCounter: advancedCounterReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store