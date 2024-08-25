import Home from "./components/Home";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Pizza from "./components/Pizza";


const App=()=> {
  const [user, setUser] = useState(null);
  const handleRegister = (email, password) => {
    setUser({ email, password });
  };
  const [carrito, setCarrito] = useState([])



  return (

    <>
      <Navbar />
      {/* <Cart pizzas={pizzas} /> */}
      {/* {!user ? <Register registar={handleRegister} /> :<> <Login user={user} /></>} */}
      <Home/>
      <Pizza/>
      <Footer />
    </>
  );
}

export default App;
