import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
