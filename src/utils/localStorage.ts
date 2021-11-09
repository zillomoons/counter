
import {SettingsStateType} from "../bll/SettingsReducer";


export const saveState = (state: { settings: SettingsStateType }) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('settings_state', serializedState);
    } catch (err) {
        //Ignore write errors.
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('settings_state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}