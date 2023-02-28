import { useState } from "react"
import { create, all } from 'mathjs'
import userOperation from "./userOperation"
import React from "react"
import Input from "./Input"
const Calculator = () => {
    const [result, setResult] = useState('')
    const calcValues = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/']

    const math = create(all, {})
    return (
        <div>
            <div>
                <Input placeholder={result} />
                <button onClick={() => setResult('')}>Clear</button>
                <button onClick={() => setResult(prev => prev.slice(0, -1))}>Undo</button>
            </div>
            <div>
                {calcValues.map(value => {
                    if (!isNaN(value) || value === '.') {
                        return <button onClick={() => setResult(prev => prev + value)}>{value}</button>
                    } else if (value === '=') {
                        return <button onClick={() => setResult(math.evaluate(result).toString())}>{value}</button>

                    } else {
                        return (<React.Fragment><button onClick={() => setResult(prev => userOperation.operatorCheck(prev, value))}>{value}</button> <br /></React.Fragment>)

                    }
                })}
            </div>
        </div>
    )
}

export default Calculator