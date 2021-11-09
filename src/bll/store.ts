import {applyMiddleware, combineReducers, createStore} from "redux";
import {CounterReducer} from "./CounterReducer";
import thunkMiddleWare from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage";
import {SettingsReducer} from "./SettingsReducer";

const rootReducer = combineReducers({
    counter: CounterReducer,
    settings: SettingsReducer,
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunkMiddleWare));

store.subscribe(()=>{
    saveState({
        settings: store.getState().settings,
    });
})

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;