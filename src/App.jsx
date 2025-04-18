import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Difficulty from "./pages/Difficulty";
import Opponent from "./pages/Opponent";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Searching from "./pages/Searching";

import Intro from "./pages/Intro";
import Login from "./pages/Login";

import AppLayout from "./components/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Intro />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="difficulty" element={<Difficulty />} />
          <Route path="opponent" element={<Opponent />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="results" element={<Results />} />
          <Route path="searching" element={<Searching />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
