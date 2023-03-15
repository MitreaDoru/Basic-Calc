import { useState } from "react"
import { create, all } from 'mathjs'
import userOperation from "./userOperation"
import React from "react"
import Input from "./Input"
import styled from './Calculator.module.css'
const Calculator = () => {
    const [result, setResult] = useState('')
    const calcValues = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/']

    const math = create(all, {})
    return (
        <div>
            <Input placeholder={result} />
            <div className={styled.actions}>

                <button className={styled.action} onClick={() => setResult('')}>Clear</button>
                <button className={styled.action} onClick={() => setResult(prev => prev.slice(0, -1))}>Undo</button>
            </div>
            <div>
                {calcValues.map(value => {
                    if (!isNaN(value) || value === '.') {
                        return <button className={styled.value} onClick={() => setResult(prev => prev + value)}>{value}</button>
                    } else if (value === '=') {
                        return <button className={styled.equal} onClick={() => setResult(math.evaluate(result).toString())}>{value}</button>

                    } else {
                        return (<React.Fragment><button className={styled.operators} onClick={() => setResult(prev => userOperation.operatorCheck(prev, value))}>{value}</button> <br /></React.Fragment>)

                    }
                })}
            </div>
        </div>
    )
}

export default Calculator