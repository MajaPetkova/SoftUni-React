import './App.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Spinner } from './components/Spinner';
import { ToDoItem } from './components/ToDoItem';
import { ToDoList } from './components/ToDoList';

function App() {
  return (
    <div className="App">
 <Header/>


  <main className="main">

    {/* <!-- Section container --> */}
    <section className="todo-list-container">
      <h1>Todo List</h1>

      <div className="add-btn-container">
        <button className="btn">+ Add new Todo</button>
      </div>

      <div className="table-wrapper">

     {/* <Spinner/> */}
       <ToDoList/>        
      </div>
    </section>
  </main>
<Footer/>
    </div>
  );
}

export default App;
