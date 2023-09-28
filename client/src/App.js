import React from "react";
 
// We use Route in order to define the different routes of our application
import { Routes } from "react-router-dom";
 
// We import all the components we need in our app
import DayCards from "./components/DayCards";

 
const App = () => {
 return (
   <div>
     <DayCards />
     <Routes>
     </Routes>
   </div>
 );
};
 
export default App;