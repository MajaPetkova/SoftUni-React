import { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((res) => res.json())
      .then((data) => setToDos(Object.values(data)));
  }, []);

  const onChangeHandler = (todo) => {
    // console.log(todoId)
    fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted }),
    })
      .then((res) => res.json())
      .then((modifiedTodo) =>
        setToDos((oldToDos) =>
          oldToDos.map((x) => (x._id === modifiedTodo._id ? modifiedTodo : x))
        ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((x) => (
          <ToDoItem key={x._id} {...x} onClick={onChangeHandler} />
        ))}
      </tbody>
    </table>
  );
};
