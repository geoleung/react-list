import React from 'react';

import ResultItem from './resultItem';

const ResultList = ({results, setResults, filteredResults, todos, setTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {results.map(result => (
                    <ResultItem 
                    key={result.id} 
                    name={result.name}
                    setResults={setResults} 
                    results={results}
                    result={result}
                    setTodos={setTodos} 
                    todos={todos}
                />
                ))}
            </ul>
        </div>
    )
}

export default ResultList;