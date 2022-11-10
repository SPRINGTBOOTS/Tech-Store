import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navegacion/Navbar";
import Inicio from "../src/components/paginas/Home";
import Productos from './components/products/ListProductos';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Inicio/>} />
        <Route exact path='/productos' element={<Productos/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;