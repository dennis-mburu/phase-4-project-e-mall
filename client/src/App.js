import "./App.css";
import { Routes, Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { useState } from "react";
import LoginForm from "./components/LoginForm";



function App() {

  const [user, setUser] = useState(null)
  return (
    <><div className="min-h-[92vh] bg-my-grey-bg text-white">

      <Navbar user={user}/>
      <Routes>
        <Route path='/products' element={<Products />}/>
        <Route path='/login' element={<LoginForm />}/>
      </Routes>

    </div>
    <Footer/>
    </>
    
  );
}

export default App;
