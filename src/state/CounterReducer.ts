import { StateType } from "../App";

type ActionType = ReturnType<typeof ChangeStartValueAC> | ReturnType<typeof ChangeMaxValueAC>
    | ReturnType<typeof ShowCountAC>

export const CounterReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "CHANGE-STARTVALUE":
            return {...state, startValue: action.startValue};
        case "CHANGE-MAXVALUE":
            return {...state, maxValue: action.maxValue};
        case "SHOW-COUNT":
            return {...state, showCount: action.showCount};
        default:
            throw new Error('There is no such action type:(')
    }
}

export const ChangeStartValueAC = (startValue: number) => {
    return { type: "CHANGE-STARTVALUE", startValue} as const
}
export const ChangeMaxValueAC = (maxValue: number) => {
    return { type: "CHANGE-MAXVALUE", maxValue} as const
}
export const ShowCountAC = (showCount: boolean) => {
    return { type: "SHOW-COUNT", showCount} as const
}