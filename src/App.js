import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import Jobs from "./Pages/Jobs/Jobs";
import Profile from "./Pages/Profile/Profile";
import Applications from "./Pages/Applications/Applications";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-main--conatiner">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
