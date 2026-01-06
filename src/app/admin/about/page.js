
"use client";

import { useState } from "react";

export default function About() 

{

   const [task, setTask] = useState("");

  return <div className="text-red-400 text-2xl size-3.5">
     <input onChange={(e) => setTask(e.target.value)} />
      <p>{task}</p>
      <p>hello</p>

  </div>
  
  ;
}   