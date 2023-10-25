import React from 'react'
import Todo from './Todo'

const TodosBox = (props) => {
    const todo = props.data.map(
        (singleData, index) => {
            return (
                <Todo key={index} removeHandler={props.removeHandler} id={index} data={singleData.item} time={singleData.time} />
            )
        }
    )
    return (
        <div className=''>
            {todo}
            {/* <Todo />
        <Todo /> */}
        </div>
    )
}

export default TodosBox