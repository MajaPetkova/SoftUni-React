import {useState, useEffect} from 'react';
import {TodoItem} from './TodoItem'

export const TodoList =()=>{
const[todos, setTodos]= useState([]);

    useEffect(()=>{
          fetch('http://localhost:3030/jsonstore/todos')
                .then (res =>res.json())
                .then(result =>{
                    setTodos(Object.values(result))
                    //    console.log(result)
                })
    },[]);

    const todoClickHandler = (todo)=>{
    //    console.log(todoId)
    fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`,{
        method: 'PUT',
        headers: {
            'content-type' : 'applicaton/json'
        },
        body: JSON.stringify({isCompleted: !todo.isCompleted })
       }) 
        .then(res =>res.json())
        .then(modifiedTodo =>{ 
            setTodos(oldTodos=>oldTodos.map(x => x._id === modifiedTodo._id ? modifiedTodo : x))

        })
    };

    return(
        <table className="table">
        <thead>
          <tr>
            <th className="table-header-task">Task</th>
            <th className="table-header-status">Status</th>
            <th className="table-header-action">Action</th>
          </tr>
        </thead>
        
        <tbody>
          {todos.map(todo => <TodoItem key={todo._id} {...todo} onClick={todoClickHandler}/>)}
        </tbody>
      </table>
    );

}