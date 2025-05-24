import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Home from "./components/home";
import Profile from "./components/profiles";
import Post from "./components/posts";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/profiles" element={<Profile/>} />
          <Route path="/posts" element={<Post/>} />
        </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
