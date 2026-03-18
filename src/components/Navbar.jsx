// TODO: Import Link from react-router-dom

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex gap-6">
        {/* TODO: Create a Link to "/" with text "Home" */}
        {/* Add these classes: "hover:text-blue-200 font-semibold" */}
        <Link to="/" className="hover:text-blue-200 font-semibold">Home</Link>
        
        {/* TODO: Create a Link to "/tasks" with text "Tasks" */}
        {/* Add these classes: "hover:text-blue-200 font-semibold" */}
        <Link to="/tasks" className="hover:text-blue-200 font-semibold">Tasks</Link>
      </div>
    </nav>
  );
}