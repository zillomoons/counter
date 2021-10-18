import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [showCount,setShowCount] = useState<boolean>(false);
    const [count, setCount] = useState<number>(startValue)

    useEffect(()=> {
        let startValueAsString = localStorage.getItem('startValue');
        let maxValueAsString = localStorage.getItem('maxValue');
        if (startValueAsString && maxValueAsString){
            setStartValue(JSON.parse(startValueAsString));
            setMaxValue(JSON.parse(maxValueAsString));
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [startValue, maxValue])

    const addMinValue = (min: number) => {
        setStartValue(min);
        setShowCount(false);
    }
    const addMaxValue = (max: number) => {
        setMaxValue(max);
        setShowCount(false);
    }
    const incrementCount = () => count < maxValue && setCount(count + 1)

    const resetCount = () => setCount(startValue);

    const setInitValue = () => {
        setCount(startValue);
        setShowCount(true)
    }

    return (
        <div className="App">
            <Settings startValue={startValue}
                      maxValue={maxValue}
                      setInitValue={setInitValue}
                      addMinValue={addMinValue}
                      addMaxValue={addMaxValue}/>
            <Counter count={count}
                     showCount={showCount}
                     startValue={startValue}
                     maxValue={maxValue}
                     reset={resetCount}
                     incCount={incrementCount}/>
        </div>
    );
}

export default App;
