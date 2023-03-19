// import { useEffect, useState } from "react";
import { TaskList } from "./components/TaskList";
import styles from "./App.module.css";
import { CreateTask } from "./components/CreateTask";
import { useFetch } from "./components/hooks/useFetch";


function App() {
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3030/jsonstore/todos")
  //     .then((res) => res.json())
  //     .then((result) => setTasks(Object.values(result)));
  // },[]);
const [tasks, setTasks]= useFetch("http://localhost:3030/jsonstore/todos", [])

  const taskCreateHandler = (newTask) => {
    setTasks((state) => [
      ...state,
      {
        _id: state[state.length - 1]?._id + 1 || 1,
        title: newTask,
      },
    ]);
  };
  const taskDeleteHandler = (taskId) => {
    setTasks((state) => state.filter((x) => x._id !== taskId));

  };
  return (
    <div className={styles["site-wrapper"]}>
      <h1>TODO APP</h1>
      <main>
        <TaskList tasks={tasks} taskDeleteHandler={taskDeleteHandler} />
        <CreateTask taskCreateHandler={taskCreateHandler} />
      </main>
    </div>
  );
}

export default App;
