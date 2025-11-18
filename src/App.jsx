import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pagine/HomePage";
import Abouts from "./pagine/Abouts";
import Products from "./pagine/Products";
import SingleProduct from "./pagine/SingleProduct";


export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/abouts" element={<Abouts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
