// TODO: Import useState and useEffect from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskCard from "../components/Taskcard";

// TODO: Import Link from 'react-router-dom'

// TODO: Import TaskCard component from '../components/TaskCard'


export default function Tasks() {
  // TODO: Create state for 'tasks' - initial value should be empty array []
  const [tasks,settasks]=useState([])
  
  // TODO: Create state for 'loading' - initial value should be true
  const [loading,setloding]=useState(true)
  

  // TODO: Create useEffect hook
  useEffect(() => {
    // TODO: Fetch data from 'https://jsonplaceholder.typicode.com/todos?_limit=10'
    // This API returns an array of 10 task objects
    // Steps:
    // 1. Use fetch() to get data
    // 2. Convert response to JSON
    // 3. Update tasks state with the data
    // 4. Set loading to false
    // 5. Add error handling with .catch()
    const fetchdata=async ()=>{
        try{
            const data=await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            const response=await data.json()
            settasks(response)
            setloding(false)

        }catch(err){
            console.log(err)
        }
    }
    fetchdata()
    
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Tasks</h1>
      
      {/* TODO: Add conditional rendering */}
      {/* If loading, show: <p className="text-gray-500">Loading tasks...</p> */}
      {/* If not loading, show the grid below */}
      {loading ? <p className="text-gray-500">Loading tasks...</p>:
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* TODO: Map over tasks array */}
          {/* For each task: */}
          {/* 1. Wrap in a Link component with to={`/tasks/${task.id}`} */}
          {/* 2. Don't forget to add key={task.id} to the Link */}
          {/* 3. Inside Link, render <TaskCard task={task} /> */}
          {tasks.map((task)=>(
            <Link to={`/tasks/${task.id}`}  key={task.id}><TaskCard task={task} /></Link>
          ))}
          
        </div>
      }


      
      
    </div>
  );
}