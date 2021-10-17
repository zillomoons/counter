import React, {ChangeEvent, useState} from "react";
import {Button} from "./Button";
import './App.css'

type PropsType = {
    startValue: number
    maxValue: number
    addMinValue: (min: number)=>void
    addMaxValue:(max: number)=>void
    setInitValue: () => void
}

export const Settings = ({startValue,maxValue, addMaxValue, addMinValue, setInitValue, ...props}: PropsType) => {
    const onClickHandler = () => {
        setInitValue();
        setDisable(true);
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        addMaxValue(Number(e.currentTarget.value));
        setDisable(false);
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        addMinValue(Number(e.currentTarget.value));
        setDisable(false);
    }
    const errorMin = startValue < 0
    const errorMax = maxValue < startValue + 1
    const [disable, setDisable] = useState<boolean>(false)

    return (
        <div className={'settings'}>
            <div className={'setDisplay'}>
                <div className={'initValue'}>
                    <div>max value: </div>
                    <div>start value: </div>
                </div>
                <div className={'inputNumber'}>
                    <input type={'number'}
                           value={maxValue}
                           onChange={onChangeMaxHandler}
                           className={errorMax ? 'errorInput' : 'defaultInput'}/>
                    <input type={'number'}
                           value={startValue}
                           onChange={onChangeMinHandler}
                           className={errorMin || errorMax ? 'errorInput' : 'defaultInput'}/>
                </div>
            </div>
            <div className={'setButton'}>
                <Button name={'set'} disabled={errorMin || errorMax || disable} callback={onClickHandler}/>
            </div>
        </div>
    )
}