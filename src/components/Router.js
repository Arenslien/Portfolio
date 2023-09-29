// Import Page Components
import TestPage from "../pages/TestPage";
import HomePage from "../pages/HomePage";

// Import React Router library
const { BrowserRouter, Routes, Route } = require("react-router-dom");

// Create PageRouter Component
const PageRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={ <HomePage/> }></Route>
        <Route path="/test" element={ <TestPage/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;