import { Component } from "react";
import styles from "./TaskItem.module.css"

class TaskItem extends Component{
    render(){
        const className = this.props.isCompleted ? styles.completed : "";
        return(
            <li className={className} >{this.props.title}</li>
        )
    }
}
export default TaskItem;