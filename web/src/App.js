import "./App.css";
import Home from "./routes/home/home";
import { Routes, Route } from "react-router-dom";

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />}></Route>
      </Routes>
   );
};

export default App;
