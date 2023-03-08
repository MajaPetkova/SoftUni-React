import "./App.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Spinner } from "./components/Spinner";
import { ToDoList } from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <Header />

      <main class="main">
        {/* <!-- Section container --> */}
        <section class="todo-list-container">
          <h1>Todo List</h1>

          <div class="add-btn-container">
            <button class="btn">+ Add new Todo</button>
          </div>

          <div class="table-wrapper">
            {/* <Spinner/> */}
            <ToDoList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
