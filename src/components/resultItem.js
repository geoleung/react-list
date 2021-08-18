import React from 'react';

const ResultItem = ({ name, result, results, setResults, todo, todos, setTodos }) => {
    const deleteHandler = (e) => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    console.log(result)
    const completeHandler = (e) => {
        e.preventDefault()
        // When a search result is clicked, add result to "saved" list

        // todos.push({
        //     name: result.name,
        //     id: result.id
        //     // name: e.target.attributes[1].textContent,
        //     // id: savedItem[1]
        // })
    }
    return(
        <a href="#" className={`todo-item`} onClick={completeHandler}>
            {result.name}, {`id=${result.id}`}
        </a>
    )
}

export default ResultItem