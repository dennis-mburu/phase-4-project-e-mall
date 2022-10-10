import "./App.css";
import { Routes, Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";



function App() {
  return (
    <><div className="min-h-[92vh] bg-my-grey-bg text-white">

      <Navbar />
      <Routes>
        <Route path='/products' element={<Products />}/>
      </Routes>

    </div>
    <Footer/>
    </>
    
  );
}

export default App;
