import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";
import {ChangeMaxValueAC, ChangeStartValueAC, CounterReducer, ShowCountAC} from "./state/CounterReducer";


export type StateType = {
    startValue: number
    maxValue: number
    showCount: boolean
}

function App() {

    const [state, dispatchState] = useReducer(CounterReducer, {
        startValue: 0,
        maxValue: 5,
        showCount: false,
    })
    const [count, setCount] = useState<number>(state.startValue)

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue');
        let maxValueAsString = localStorage.getItem('maxValue');
        if (startValueAsString && maxValueAsString) {
            dispatchState(ChangeStartValueAC(JSON.parse(startValueAsString)))
            dispatchState(ChangeMaxValueAC(JSON.parse(maxValueAsString)))
            // setState({...state, startValue: JSON.parse(startValueAsString), maxValue: JSON.parse(maxValueAsString)})
        }
    }, [])

    const addMinValue = (min: number) => {
        dispatchState(ChangeStartValueAC(min))
        dispatchState(ShowCountAC(false))
        // setState({...state, startValue: min, showCount: false})
    }
    const addMaxValue = (max: number) => {
        dispatchState(ChangeMaxValueAC(max))
        dispatchState(ShowCountAC(false))
        // setState({...state, maxValue: max, showCount: false})
    }
    const incrementCount = () => count < state.maxValue && setCount(count + 1)

    const resetCount = () => setCount(state.startValue);

    const setInitValue = () => {
        setCount(state.startValue);
        dispatchState(ShowCountAC(true))
        //setState({...state, showCount: true})
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
    }

    return (
        <div className="App">
            <Settings state={state}
                      setInitValue={setInitValue}
                      addMinValue={addMinValue}
                      addMaxValue={addMaxValue}/>
            <Counter count={count}
                     state={state}
                     reset={resetCount}
                     incCount={incrementCount}/>
        </div>
    );
}

export default App;
