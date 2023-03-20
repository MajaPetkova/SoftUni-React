// import { useEffect, useState } from "react";
import { TaskContext } from "./contexts/TaskContext";
import { TaskList } from "./components/TaskList";
import styles from "./App.module.css";
import { CreateTask } from "./components/CreateTask";
import { useFetch } from "./components/hooks/useFetch";
import { useTodosApi } from "./components/hooks/useTodos";

function App() {
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3030/jsonstore/todos")
  //     .then((res) => res.json())
  //     .then((result) => setTasks(Object.values(result)));
  // },[]);
  const [tasks, setTasks, isLoading] = useFetch(
    "http://localhost:3030/jsonstore/todos",
    []
  );

  const { removeTodo, createTodo, updateTodo } = useTodosApi();

  const taskCreateHandler = async (newTask) => {
    const createdTask = await createTodo(newTask);

    setTasks((state) => [
      ...state,
      createdTask,
      // {
      //   _id: state[state.length - 1]?._id + 1 || 1,
      //   title: newTask,
      // },
    ]);
  };
  const taskDeleteHandler = (taskId) => {
    removeTodo(taskId).then(() => {
      setTasks((state) => state.filter((x) => x._id !== taskId));
    });
  };

  const toggleTask = async (task) => {
    const updatedTask= {...task, isCompleted : !task.isCompleted  }

    await updateTodo(task._id, updatedTask)
    setTasks((state) =>state.map((x) => x._id == task._id ? updatedTask : x)
    );
  };

  return (
    <TaskContext.Provider value={{ taskDeleteHandler, toggleTask }}>
      <div className={styles["site-wrapper"]}>
        <h1>TODO APP</h1>
        <main>
          {isLoading ? <p>Loading...</p> : <TaskList tasks={tasks} />}
          <CreateTask taskCreateHandler={taskCreateHandler} />
        </main>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
