import React from 'react';

const Item = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = (e) => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = (e) => {
        setTodos(todos.map((data) => {
            if (data.id === todo.id) {
                return {
                    ...data, 
                    completed: !data.completed
                }
            }
            return data
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Item