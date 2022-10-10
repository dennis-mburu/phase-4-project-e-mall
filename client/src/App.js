import "./App.css";
import { Routes, Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/products' element={<Products />}/>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
