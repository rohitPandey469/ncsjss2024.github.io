// Loader.jsx
import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import "./Loader.css";
import LottieLoader from "react-lottie-loader";

const Loader = () => {
  const [animationData, setAnimationData] = useState(null);
  // const [loadingMessage, setLoadingMessage] = useState(
  //   "Decrypting secure content..."
  // );
  // const location = useLocation();
  const windowWidth = window.innerWidth;

  useEffect(() => {
    // Define different loader paths based on screen size
    const loaderPath =
      windowWidth < 600 ? "/preLoader.json" : "/preLoader.json";

    // Fetch the preloaded JSON file
    fetch(loaderPath)
      .then((response) => response.json())
      .then((data) => {
        setAnimationData(data);
        // setLoadingMessage(""); // Clear loading message when animation data is loaded
      })
      .catch((error) => {
        console.error("Error fetching animation data:", error);
        // setLoadingMessage("Error loading content. Please try again."); // Display an error message
      });
  }, [windowWidth]);

  return (
    <div>
      {/* {location.pathname === '/' && loadingMessage && <p style={{ color: "red", position: "absolute", zIndex: "-1000" }}>{loadingMessage}</p>} */}
      {animationData && (
        <LottieLoader className="loader" animationData={animationData} />
      )}
    </div>
  );
};

export default Loader;
