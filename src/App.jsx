import { Routes, Route } from "react-router-dom";
import ProductListing from "./assets/ProductListing";
import ProductDetails from "./assets/ProductDetails";
import Header from "./assets/Header";

export default function App() {
  //console.log("hi");
  return (
    <div className="App">
      <Header />
      <br></br>
      <Routes>
        <Route path="/" element={<ProductListing />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="*">404!Page Not Found.</Route>
      </Routes>
    </div>
  );
}
