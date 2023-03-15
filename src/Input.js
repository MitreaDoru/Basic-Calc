import styled from './Input.module.css'

const Input = ({ placeholder }) => {
    return <div>

        <input className={styled.input} placeholder={placeholder}></input>
    </div>
}

export default Input