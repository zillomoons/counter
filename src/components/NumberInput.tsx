import React, {ChangeEvent} from "react";
import './../App.css'

type PropsType ={
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void
    error: boolean
}

export const NumberInput = ({value, onChange, error}: PropsType) => {
    return <input type={'number'}
                  value={value}
                  onChange={onChange}
                  className={error ? 'errorInput' : 'defaultInput'}/>
}