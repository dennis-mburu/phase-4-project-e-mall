import "./App.css";
import { Routes, Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Product from "./components/Product";



function App() {

  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch("/api/customer_auth").then(r =>{
      if (r.ok) {
        r.json().then(user => setUser(user))
      }
    })
  }, [])

  
  return (
    <><div className="min-h-[92vh] bg-my-grey-bg text-white">

      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/products' element={<Products />}/>
        <Route path='/login' element={<LoginForm setUser={setUser}/>}/>
        <Route path='/view_product/:id' element={<Product />}/>
        
      </Routes>

    </div>
    <Footer/>
    </>
    
  );
}

export default App;
