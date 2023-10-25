import React, { useRef } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const Input = (props) => {

    const inputBox = useRef();
    return (
        <div type='text' className='flex justify-around bg-slate-500 p-2 border-'>
            <input type="text" placeholder='Add a new task' className='p-3 focus:outline-none w-[90%] rounded-[10px]  shadow-sm' ref={inputBox} />
            <div className='cursor-pointer w-[50px] h-[50px] bg-slate-700 text-white text-4xl rounded-[50%] flex justify-center items-center' onClick={() => {
                props.handler(inputBox.current.value)
                inputBox.current.value = ''
            }}>
                <AiOutlinePlus />
            </div>
        </div>
    )
}

export default Input