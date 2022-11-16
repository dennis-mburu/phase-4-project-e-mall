import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import CustomerLoginForm from "./components/CustomerLoginForm";
import Product from "./components/Product";
import Cart from "./components/Cart";
import CustomerSigupForm from "./components/CustomerSigupForm";
import VendorLoginForm from "./components/VendorLoginForm";
import VendorSignupForm from "./components/VendorSignUpForm";
import ManageProducts from "./components/ManageProducts";
import ProductEditForm from "./components/ProductEditForm";

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState(0);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.length);
      });
  }, []);

  useEffect(() => {
    fetch("/api/customer_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/api/vendor_auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <div className="min-h-[93vh] bg-flow-grey-bg text-white">
        <Navbar user={user} setUser={setUser} items={items} setItems={setItems}/>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route
            path="/customer_login"
            element={<CustomerLoginForm setUser={setUser} />}
          />
          <Route
            path="/view_product/:id"
            element={<Product items={items} setItems={setItems} />}
          />
          <Route
            path="/cart"
            element={<Cart items={items} setItems={setItems} />}
          />
          <Route
            path="/customer_signup"
            element={<CustomerSigupForm setUser={setUser} />}
          />

          <Route
            path="/vendor_login"
            element={<VendorLoginForm setUser={setUser} />}
          />
          <Route
            path="/vendor_signup"
            element={<VendorSignupForm setUser={setUser} />}
          />
          <Route path="/manage_products" element={<ManageProducts />} />
          <Route path="/product_edit/:id" element={<ProductEditForm />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
