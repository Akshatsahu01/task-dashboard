// TODO: Import useState and useEffect from 'react'
import { useState,useEffect } from "react";

export default function Home() {
  // TODO: Create state for 'advice' - initial value should be empty string ''
  const [advice,setadvice]=useState('')
  
  // TODO: Create state for 'loading' - initial value should be true
  
const [loading,setloding]=useState(true)
  // TODO: Create useEffect hook that runs once when component mounts
  useEffect(() => {
    // TODO: Fetch data from 'https://api.adviceslip.com/advice'
    // Steps:
    // 1. Use fetch() to get data
    // 2. Convert response to JSON with .then(res => res.json())
    // 3. Extract advice from data.slip.advice and update state
    // 4. Set loading to false
    // 5. Add .catch() for error handling
    const fetchdata= async ()=>{

        try{
        const data=await fetch(`https://api.adviceslip.com/advice`)
        const response=await data.json()
        console.log(response)
        setadvice(response.slip.advice)
        setloding(false)
        }catch(err){
            console.log(err)
        }

    }
    fetchdata()
    
  }, []); // Empty array means run once on mount

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to Task Dashboard
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Daily Advice
        </h2>
        
        {/* TODO: Add conditional rendering */}
        {/* If loading is true, show: <p className="text-gray-500">Loading...</p> */}
        {loading ?<p className="text-gray-500">Loading...</p> :<p className="text-lg text-gray-600 italic">{advice}</p>}
        {/* If loading is false, show: <p className="text-lg text-gray-600 italic">"{advice}"</p> */}
        
      </div>
    </div>
  );
}