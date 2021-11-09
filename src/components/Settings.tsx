import React, {ChangeEvent, useState} from "react";
import {Button} from "./Button";
import '../App.css'
import {NumberInput} from "./NumberInput";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {setInitValuesTC, setMaxValueTC, setMinValueTC, SettingsStateType} from "../bll/SettingsReducer";



export const Settings = () => {
    const settingsState = useSelector<AppStateType, SettingsStateType>(state=>state.settings);
    const {maxValue, startValue} = settingsState;
    const dispatch = useDispatch();

    const [disable, setDisable] = useState<boolean>(false);

    const onClickHandler = () => {
        dispatch(setInitValuesTC());
        setDisable(true);
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueTC(Number(e.currentTarget.value)));
        setDisable(false);
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueTC(Number(e.currentTarget.value)));
        setDisable(false);
    }
    const errorMin = startValue < 0
    const errorMax = maxValue < startValue + 1

    return (
        <div className={'settings'}>
            <div className={'setDisplay'}>
                <div className={'initValue'}>
                    <div>max value:</div>
                    <div>start value:</div>
                </div>
                <div className={'inputNumber'}>
                    <NumberInput value={maxValue} onChange={onChangeMaxHandler} error={errorMax}/>
                    <NumberInput value={startValue} onChange={onChangeMinHandler} error={errorMax || errorMin}/>
                </div>
            </div>
            <div className={'setButton'}>
                <Button name={'set'} disabled={errorMin || errorMax || disable} callback={onClickHandler}/>
            </div>
        </div>
    )
}