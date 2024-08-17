import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom"

// Import your website pages
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Team from "./Pages/Team/Team";
import Alumni from "./Pages/Alumni/Alumni";
import Error from "./Pages/Error/Error";
import Loader from "./Components/Loader/Loader"; // Import your Loader component

import Post from "./Components/Instagram/Post";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  console.log("New Routing")

  // Loader
  useEffect(() => {
    const fetchPing = async () => {
      try {
        const startTime = Date.now();
        //const response = await fetch("http://localhost:5173"); // Replace with an actual endpoint
        const endTime = Date.now();
        let loadingDelay = endTime - startTime;
        loadingDelay = 1.9 * loadingDelay;
        if (loadingDelay < 3000) loadingDelay += 2500;

        setTimeout(() => {
          setIsLoading(false);
        }, loadingDelay);

        // Use loadingDelay as needed, e.g., to show content or as a basis for further calculations
        console.log("Network speed estimation (milliseconds):", loadingDelay);
        console.log(
          `
                      
          
 _      _  ____  ____  _     _____
 / \  /|/ \/  _ \/  _ \/ \   /  __/
 | |\ ||| || | //| | //| |   |  \  
 | | \||| || |_\\| |_\\| |_/\|  /_ 
 \_/  \|\_/\____/\____/\____/\____\
                                   
 
          
                      `
        );
      } catch (error) {
        console.error("Error fetching ping:", error);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      }
    };
    fetchPing();
  }, []);

  return (
    <Routes>
      <Route path="/" element={isLoading ? <Loader /> : <Home />}/>
      <Route path="/projects" element={isLoading ? <Loader /> : <Projects />}/>
      <Route path="/team" element={isLoading ? <Loader /> : <Team />}/>
      <Route path="/alumni" element={isLoading ? <Loader /> : <Alumni />}/>
      <Route path="/post" element={<Post />}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  )
};

export default App;