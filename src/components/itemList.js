import React from 'react';

import Item from './item';

const ItemList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div className="todo-container">
            
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Item 
                    key={todo.id} 
                    text={todo.text}
                    setTodos={setTodos} 
                    todos={todos}
                    todo={todo}
                />
                ))}
            </ul>
        </div>
    )
}

export default ItemList;