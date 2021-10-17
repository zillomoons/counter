import React from 'react';
import './App.css';
import {Button} from './Button';

type PropsType = {
    count: number
    incCount: () => void
    reset: () => void
    startValue: number
    maxValue: number
}
export const Counter = ({count, incCount, reset, startValue, maxValue}: PropsType ) => {
    const error = ( startValue < 0 ) || ( maxValue < startValue + 1)
    return (
        <div className='counter'>
            <div className='countDisplay'>
                <div className={count === maxValue ? 'numberFinal' : 'numberDefault'}>
                    {!error && count}
                    {/*{!count && <div className={'intro'}>enter values and press 'set'</div>}*/}
                    { error && <div className={'errorMessage'}>incorrect value!</div> }
                </div>
            </div>
            <div className='buttons'>
                <Button name={'inc'} disabled={count === maxValue} callback={incCount}/>
                <Button name={'reset'} disabled={count === startValue} callback={reset}/>
            </div>
        </div>
    );
};

