import TaskList from "./components/TaskList";
import './App.css';
import {useState,useEffect} from "react";
import data from './components/data.json';
import AddForm from './components/AddForm';
function App() {

  const [task, setTask] = useState(data);
    

    const AddTask = (taskname)=>{
      const newTask ={
          id: task.length+1,
          name:taskname,
      }
      setTask([...task,newTask])
  }
  const DeleteTask = (taskid)=>{
      const updateTask=task.filter(task=>task.id !== taskid);
      setTask(updateTask)
  }
  const EditTask=(taskid,newname)=>{
      const updateTask=task.map(task=>{
          if(task.id === taskid){
              return {...task,name:newname}
          }
          return task
      })
      setTask(updateTask)
  }
  return (
      <div className="App">
          <AddForm AddTask={AddTask}/>
          <TaskList task={task} onDeleteTask={DeleteTask} onEditTask={EditTask}/>
      </div>
  );
}

export default App;
