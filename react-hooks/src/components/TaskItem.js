import { useEffect, useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import styles from "./TaskItem.module.css";

export const TaskItem = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { taskDeleteHandler, toggleTask, changeTitleHandler } = useContext(TaskContext);

  useEffect(() => {
    console.log("Mount");

    return () => {
      console.log("Unmount");
    };
  }, []);

  const taskEditHandler = () => {
    setIsEdit(true)
  };

  const onEdit= (e)=>{
    e.preventDefault();
    // const formData= new FormData(e.target);
    // const title= formData.get("title")
    const {title} = Object.fromEntries(new FormData(e.target))
    changeTitleHandler(task, title);
    setIsEdit(false)
  }


  return (
    <li>
        {isEdit
            ? <form onSubmit={onEdit}>
                  <input type="text" name="title" defaultValue={task.title} />
                  <input type="submit" value="edit"/>
             </form>
            : <>
                  <span
                     className={task.isCompleted ? styles.completed : ""}
                     onClick={() => toggleTask(task)}
                  >
                  {task.title}
                 </span>
                    <button onClick={() => taskDeleteHandler(task._id)}>x</button>
                    <button onClick={taskEditHandler}>Edit</button>
             </> }
      
    </li>
  );
};
