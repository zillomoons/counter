
export type CounterStateType = {
    showCount: boolean
    count: number
}
type ActionsType = ReturnType<typeof showCountAC> | ReturnType<typeof setCountAC>

const initialState: CounterStateType = {
    showCount: false,
    count: 0,
};

export const CounterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case "SHOW-COUNT":
            return {...state, showCount: action.showCount};
        case "SET-COUNT-VALUE":
            return {...state, count: action.value};
        default:
            return state;
    }
}

export const showCountAC = (showCount: boolean) => {
    return { type: "SHOW-COUNT", showCount} as const;
}
export const setCountAC = (value: number) => {
    return {type: 'SET-COUNT-VALUE', value} as const;
}




