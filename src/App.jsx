import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pagine/HomePage";
import Abouts from "./pagine/Abouts";
import Products from "./pagine/Products";
import SingleProduct from "./pagine/SingleProduct";

import { useState } from "react";
import BudgetContext from "./contests/BudgetContext";

export function App() {

  const [budgetMode, setBudgetMode] = useState(false)

  function toggleMode() {
    setBudgetMode(!budgetMode)
  }

  return (
    <>
      <BudgetContext.Provider value={{ budgetMode, setBudgetMode, toggleMode }}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/abouts" element={<Abouts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
          </Routes>
        </BrowserRouter>

      </BudgetContext.Provider>
    </>
  )
}

export default App
