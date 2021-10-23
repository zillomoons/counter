import React from 'react';
import '../App.css';
import {Button} from './Button';
import {StateType} from "../App";

type PropsType = {
    count: number
    incCount: () => void
    reset: () => void
    state: StateType
}
export const Counter = ({count, incCount, reset, state}: PropsType) => {
    const error = (state.startValue < 0) || (state.maxValue < state.startValue + 1)
    return (
        <div className='counter'>
            <div className='countDisplay'>
                {!error && state.showCount &&
                <div className={count === state.maxValue ? 'numberFinal' : 'numberDefault'}>{count}</div>}
                {!error && !state.showCount && <div className={'intro'}>enter values and press 'set'</div>}
                {error && <div className={'errorMessage'}>incorrect value!</div>}
            </div>
            <div className='buttons'>
                <Button name={'inc'} disabled={state.showCount && count === state.maxValue} callback={incCount}/>
                <Button name={'reset'} disabled={count === state.startValue} callback={reset}/>
            </div>
        </div>
    );
};

