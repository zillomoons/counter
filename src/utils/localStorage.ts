import {AppStateType} from "../bll/store";

export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('app_state', serializedState);
    } catch {
        throw Error('something went wrong');
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app_state');
        if (serializedState === null) {
            return undefined;
        }
        const persistedState = JSON.parse(serializedState);
        persistedState.counter.showCount = false;
        return persistedState;
    } catch (err) {
        return undefined;
    }
}