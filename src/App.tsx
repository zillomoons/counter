import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const addMinValue = (min: number) => setStartValue(min)
    const addMaxValue = (max: number) => setMaxValue(max)

    const [count, setCount] = useState<number>(startValue)
    const incrementCount = () => {
        if (count < maxValue){
            setCount(count + 1)
        }
    }
    const resetCount = () => setCount(startValue)
    const setInitValue = () => setCount(startValue)

    return (
        <div className="App">
            <Settings startValue={startValue}
                      maxValue={maxValue}
                      setInitValue={setInitValue}
                      addMinValue={addMinValue}
                      addMaxValue={addMaxValue}/>
            <Counter count={count}
                     startValue={startValue}
                     maxValue={maxValue}
                     reset={resetCount}
                     incCount={incrementCount}/>
        </div>
    );
}

export default App;
