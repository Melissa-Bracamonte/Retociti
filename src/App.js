import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import Home from './pag/Home';
import Movimientos from "./pag/Movimientos";
 
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/movimientos" element={<Movimientos/>}>
      </Route>
      
      </Routes>
      </BrowserRouter>
    </div>
     
  );
}

export default App;

