import {Component} from "react";
import './App.css';
import TaskList from "./components/TaskList";


class App extends Component{
  render(){
    return(
      <div className="App">
      <main className="App-header">
         <TaskList/>
      </main>
    </div>
    )
  }
}




export default App;
