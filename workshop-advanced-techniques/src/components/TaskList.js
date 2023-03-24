import { Component } from "react";
import TaskItem from "./TaskItem"


class TaskList extends Component {
constructor (props){
    super(props);
    this.state={
        tasks:[
            "Task 1",
            "Task 2",
            "Task 3"
        ],
        filter: "All",
        newTask: ""
    }
}

newTaskChangeHandler(e){
    this.setState({newTask: e.target.value})
// console.log(e.target)
}
addNewTaskHandler (e){
    e.preventDefault();
   this.setState((state)=>({
      tasks:[...state.tasks, state.newTask],
      newTask: ""
   }))
}

  render() {
    return (
        <div>
            <h1>ToDo List</h1>
      <ul>
        {this.state.tasks.map(x=><TaskItem key={x} title={x}/>)}
        {/* <TaskItem title ="Task 1"/>
        <TaskItem title ="Task 2"/>
        <TaskItem title ="Task 3"/> */}
      </ul>

      <form onSubmit={this.addNewTaskHandler.bind(this)}>
        <label forHtml= "new-task"></label>
        <input 
        id="new-task" 
        type="text" 
        name="newTask" 
        value={this.state.newTask}
        onChange={this.newTaskChangeHandler.bind(this)}
        />
        <input type="submit" value="Add"/>
      </form>
      </div>
    );
  }
}
export default TaskList;
