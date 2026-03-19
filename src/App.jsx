import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TaskCard from "./components/Taskcard";
import TaskDetail from "./pages/Taskdetail";
import Tasks from "./pages/Task";


function App() {
  return (
    // TODO: Wrap everything in BrowserRouter
    <BrowserRouter>
    <div className="min-h-screen bg-gray-50">
      {/* TODO: Add Navbar component here */}
      {<Navbar/>}
      
      {/* TODO: Create Routes wrapper */}
        {/* TODO: Add Route for Home page - path should be "/" */}
        <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/tasks" element={<Tasks/>}>Task page</Route>
        <Route path="/tasks/:id" element={<TaskDetail/>}>TaskDetail page</Route>
        
        {/* TODO: Add Route for Tasks page - path should be "/tasks" */}
        
        {/* TODO: Add Route for TaskDetail page - path should be "/tasks/:id" */}
        {/* Note: :id is a URL parameter that will be dynamic */}
      {/* TODO: Close Routes */}
        
        </Routes>
    </div>
    // TODO: Close BrowserRouter
    </BrowserRouter>
  );
}

export default App;