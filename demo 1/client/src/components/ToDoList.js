import { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((res) => res.json())
      .then((data) => setToDos(Object.values(data)));
  }, []);

const onChangeHandler =(todoId)=>{
console.log(todoId)
}

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
    {toDos.map(x=> <ToDoItem key ={x._id} {...x} onClick={onChangeHandler} />)}
      </tbody>
    </table>
  );
};
