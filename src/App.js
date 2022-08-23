import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import Home from './pag/Home';
import Transactions from "./pag/Transactions";
 
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/movimientos" element={<Transactions/>}>
      </Route>
      
      </Routes>
      </BrowserRouter>
    </div>
     
  );
}

export default App;

