import { Component } from "react";
import TaskItem from "./TaskItem"
import TaskContext from "../contexts/TaskContext";

class TaskList extends Component {
constructor (props){
    super(props);
    this.state={
        tasks:[
            {title: "Task 1",isCompleted: false},
            {title:"Task 2",isCompleted: false},
            {title: "Task 3",isCompleted: false}
        ],
        filter: "All",
        newTask: "",
        character: {}
    }
}

newTaskChangeHandler(e){
    this.setState({newTask: e.target.value})
// console.log(e.target)
}

componentDidMount(){
   fetch("https://swapi.dev/api/people/5")
   .then(res=> res.json())
   .then(result => {
    this.setState({character:result})})
}
componentDidUpdate(){
    console.log("update");
}

addNewTaskHandler (e){
    e.preventDefault();
   this.setState((state)=>({
      tasks:[...state.tasks, {title:state.newTask, isCompleted: false}],
      newTask: ""
   }))
}
taskClickHandler(taskTitle){
   this.setState(state =>({
       tasks:state.tasks.map (x=>x.title ===taskTitle ? {...x, isCompleted: !x.isCompleted} : x)
   }))
}
taskDeleteHandler(e, taskTitle){
  e.stopPropagation()
this.setState(state =>({
tasks: state.tasks.filter(x=> x.title !== taskTitle )
}))

}

render() {
    return (
      <TaskContext.Provider value={{taskDeleteHandler: this.taskDeleteHandler.bind(this)}}>
            <h2>Current character: {this.state.character.name}</h2>
            <h1>ToDo List</h1>
      <ul>
        {this.state.tasks.map(x=>
             <TaskItem 
             key={x.title} 
             title={x.title} 
             isCompleted={x.isCompleted}
             onClick={this.taskClickHandler.bind(this)}
             />
        )}
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
      
    </TaskContext.Provider>
    )
  }
}
export default TaskList;
