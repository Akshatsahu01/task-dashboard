// This component receives 'task' as a prop
export default function TaskCard({ task }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex items-start gap-3">
        
        {/* TODO: Add a checkbox input */}
        {/* It should be checked if task.completed is true */}
        {/* Add readOnly attribute and className="mt-1" */}
        <input type="checkbox" className="mt-1" checked={task.completed} readOnly/>

        
        <div className="flex-1">
          {/* TODO: Display task.title in an h3 tag */}
          {/* Add className="font-semibold text-gray-800" */}
          
          <h3 className="font-semibold text-gray-800">{task.title}</h3>
          {/* TODO: Add conditional styling for status */}
          {/* Create a <p> tag with className="text-sm mt-1" */}
          {/* If task.completed is true: add "text-green-600" and show "Completed ✓" */}
          {/* If task.completed is false: add "text-orange-600" and show "Pending" */}
          {/* Hint: Use template literals or ternary operator for className */}
          {/* <p className="text-sm mt-1" >
           {task.Completed ? <p className="text-green-600">Completed ✓</p>:<p className="text-orange-600">Pending ✓</p>}
          </p> */}
          <p className={`"text-sm mt-1" ${ task.completed ? "text-green-600":"text-orange-600"}`}>
            {task.completed?"Completed ✓":"Pending"}

          </p>
          
        </div>
      </div>
    </div>
  );
}