import React from 'react';
import '../App.css';
import {Button} from './Button';
import {setCountAC, StateType} from "../bll/CounterReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";


export const Counter = () => {
    const state = useSelector<AppStateType, StateType>(state=>state.counter);
    const {count, showCount, maxValue, startValue} = state;
    const dispatch = useDispatch();
    const incCount = () => dispatch(setCountAC(count +1));
    const resetCount = () => dispatch(setCountAC(startValue));
    const error = (startValue < 0) || (maxValue < startValue + 1)
    const countStyle = count === maxValue ? 'numberFinal' : 'numberDefault'
    return (
        <div className='counter'>
            <div className='countDisplay'>
                {!error && showCount &&
                <div className={countStyle}>{count}</div>}
                {!error && !showCount && <div className={'intro'}>enter values and press 'set'</div>}
                {error && <div className={'errorMessage'}>incorrect value!</div>}
            </div>
            <div className='buttons'>
                <Button name={'inc'} disabled={showCount && count === maxValue} callback={incCount}/>
                <Button name={'reset'} disabled={count === startValue} callback={resetCount}/>
            </div>
        </div>
    );
};

