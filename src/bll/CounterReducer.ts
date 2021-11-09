import {AppDispatch, AppStateType} from "./store";
import {Dispatch} from "redux";

export type StateType = {
    startValue: number
    maxValue: number
    showCount: boolean
    count: number
}
type ActionsType = ReturnType<typeof changeStartValueAC> | ReturnType<typeof changeMaxValueAC>
    | ReturnType<typeof showCountAC> | ReturnType<typeof setCountAC>

const initialState: StateType = {
    startValue: 0,
    maxValue: 5,
    showCount: false,
    count: 0,
};

export const CounterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "CHANGE-STARTVALUE":
            return {...state, startValue: action.startValue};
        case "CHANGE-MAXVALUE":
            return {...state, maxValue: action.maxValue};
        case "SHOW-COUNT":
            return {...state, showCount: action.showCount};
        case "SET-COUNT-VALUE":
            return {...state, count: action.value};
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
export const showCountAC = (showCount: boolean) => {
    return { type: "SHOW-COUNT", showCount} as const;
}
export const setCountAC = (value: number) => {
    return {type: 'SET-COUNT-VALUE', value} as const;
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
    dispatch(setCountAC(getState().counter.startValue));
    dispatch(showCountAC(true));
}

