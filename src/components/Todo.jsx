import React from 'react'
import { BsTrash3Fill } from 'react-icons/bs'
import { useState } from 'react'

const Todo = (props) => {
    const [done, setDone] = useState(false)
    return (
        <div onClick={() => setDone(!done)} className={`mt-5 select-none cursor-pointer flex justify-between w-full bg-slate-600 rounded-2xl p-4 `}>
            <div className='text-white	'>
                <span className='pr-2 text-[15px] text-slate-300'>
                    {props.time}
                </span>
                <span className={`pl-4 ${done === true ? 'line-through' : ''} text-[20px]`}>
                    {props.data}
                </span>
            </div>
            <div>
                <BsTrash3Fill onClick={() => props.removeHandler(props.id)} className=' text-[17px] text-slate-300' />
            </div>
        </div>
    )
}

export default Todo