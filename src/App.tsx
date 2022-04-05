import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "./pages/Course";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
