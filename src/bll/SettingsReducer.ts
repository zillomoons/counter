import {AppDispatch, AppStateType} from "./store";
import {Dispatch} from "redux";
import {setCountAC, showCountAC} from "./CounterReducer";

export type SettingsStateType = {
    startValue: number
    maxValue: number
}
type ActionsType = ReturnType<typeof changeStartValueAC> | ReturnType<typeof changeMaxValueAC>
const initialState: SettingsStateType = {
    startValue: 0,
    maxValue: 5
}
export const SettingsReducer = (state: SettingsStateType = initialState, action: ActionsType): SettingsStateType => {
    switch (action.type){
        case "CHANGE-STARTVALUE":
            return {...state, startValue: action.startValue};
        case "CHANGE-MAXVALUE":
            return {...state, maxValue: action.maxValue};
        default:
            return state;
    }
}

export const changeStartValueAC = (startValue: number) => {
    return { type: "CHANGE-STARTVALUE", startValue} as const;
}
export const changeMaxValueAC = (maxValue: number) => {
    return { type: "CHANGE-MAXVALUE", maxValue} as const;
}
// ThunkCreators
export const setMinValueTC = (min: number) => (dispatch: AppDispatch) => {
    dispatch(changeStartValueAC(min));
    dispatch(showCountAC(false));
}
export const setMaxValueTC = (max: number) => (dispatch: Dispatch) => {
    dispatch(changeMaxValueAC(max));
    dispatch(showCountAC(false));
}
export const setInitValuesTC = () => (dispatch: Dispatch, getState: ()=> AppStateType) => {
    dispatch(setCountAC(getState().settings.startValue));
    dispatch(showCountAC(true));
}