import { useState } from "react";

export const CreateTask = ({taskCreateHandler}) => {
  const [task, setTask] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(task)
    taskCreateHandler(task)
    setTask("")
  };

const onChangeHandler=(e)=>{
  setTask(e.target.value)  
}

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" name="taskName" placeholder="do the dishes" onChange={onChangeHandler}  value={task}/>
      <input type="submit" value="Add" />
    </form>
  );
};
