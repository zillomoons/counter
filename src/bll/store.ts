import {applyMiddleware, combineReducers, createStore} from "redux";
import {CounterReducer} from "./CounterReducer";
import thunkMiddleWare from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage";

const rootReducer = combineReducers({
    counter: CounterReducer,
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunkMiddleWare));

store.subscribe(()=>{
    saveState(store.getState());
})

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;