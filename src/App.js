import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./containers/UserPage";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:userName" element={<UserPage />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
