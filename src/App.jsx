import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./Components/Loader/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPing = async () => {
      try {
        const startTime = Date.now();
        const endTime = Date.now();
        let loadingDelay = endTime - startTime;
        loadingDelay = 1.9 * loadingDelay;
        if (loadingDelay < 3000) loadingDelay += 2500;

        setTimeout(() => {
          setIsLoading(false);
        }, loadingDelay); // Use loadingDelay as needed, e.g., to show content or as a basis for further calculations
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

  return isLoading ? <Loader /> : <Outlet />;
};

export default App;
