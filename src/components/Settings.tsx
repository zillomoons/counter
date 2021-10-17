import React, {ChangeEvent, useState} from "react";
import {Button} from "./Button";
import '../App.css'
import {NumberInput} from "./NumberInput";

type PropsType = {
    startValue: number
    maxValue: number
    addMinValue: (min: number)=>void
    addMaxValue:(max: number)=>void
    setInitValue: () => void
}

export const Settings = ({startValue,maxValue, addMaxValue, addMinValue, setInitValue}: PropsType) => {
    const [disable, setDisable] = useState<boolean>(false)
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

    return (
        <div className={'settings'}>
            <div className={'setDisplay'}>
                <div className={'initValue'}>
                    <div>max value: </div>
                    <div>start value: </div>
                </div>
                <div className={'inputNumber'}>
                    <NumberInput value={maxValue} onChange={onChangeMaxHandler} error={errorMax} />
                    <NumberInput value={startValue} onChange={onChangeMinHandler} error={errorMax || errorMin} />
                </div>
            </div>
            <div className={'setButton'}>
                <Button name={'set'} disabled={errorMin || errorMax || disable} callback={onClickHandler}/>
            </div>
        </div>
    )
}