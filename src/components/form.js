import React from 'react';

const Form = ({ inputText, setInputText, results, setResults, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
        // After user types, start timer to send a request to API when the timer ends
        // If timer is active and user types again, reset the timer

        // setTimeout(submitTodoHandler, 250)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        // Send a get request to API using typed input as query
        // If data is received, set the results to display back to user
        
        // fetch(`https://cors-anywhere.herokuapp.com/https://latest.demo.gene42.com/rest/vocabularies/categories/phenotype/suggest?input=${inputText}`, {
        //     method: 'GET',
        //     // mode: 'cors',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => {
        //         setResults(
        //             results = res
        //         )
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })

        setInputText("")
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Search for a clinical term" autoFocus />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                {/* <i className="fas fa-plus-square"></i> */}
                Search
            </button>
        </form>
    )
}

export default Form;