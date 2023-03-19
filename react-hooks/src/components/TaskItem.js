import { useEffect, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export const TaskItem =({title, taskId})=>{
    const {taskDeleteHandler}= useContext(TaskContext);

    useEffect(()=>{
        console.log("Mount");

        return ()=>{
            console.log("Unmount")
        }
    }, []);

    return(
        <li>{title} 
          <button onClick={()=>taskDeleteHandler(taskId)}>x</button>
        </li>
    )
}