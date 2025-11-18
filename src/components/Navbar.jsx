import { NavLink } from "react-router-dom"
import { useContext } from "react"
import BudgetContext from "../contests/BudgetContext"

const menu = [
    {
        id: 1,
        namePage: "HomePage",
        link: "/"
    },
    {
        id: 2,
        namePage: "Abouts",
        link: "/abouts"
    },
    {
        id: 3,
        namePage: "Products",
        link: "/products"
    }
]

export default function Navbar() {

    const { budgetMode, setBudgetMode, toggleMode } = useContext(BudgetContext)     // recupero valore booleano / setter che cambia lo stato / al click attovo e disattivo la modalità budget

    return (
        <nav className="navbar d-flex align-items-center">
            <div className='container'>
                <ul className="nav">
                    {
                        menu.map((item) => (
                            <li key={item.id} className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to={item.link}>{item.namePage}</NavLink>
                            </li>
                        ))
                    }
                </ul>

                <button onClick={toggleMode} className="btn">{budgetMode ? "Budget mode: deactive" : "Budget mode: active"}</button>    {/* al click viene richiamata la funzione toggleMode per cambiare stato e in base allo stato cambia "attiva/disattiva" */}
            </div>
        </nav>
    )
}