import Header from "../components/Header";
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import BudgetContext from "../contests/BudgetContext";

export default function Products() {

    const [prodotti, setProdotti] = useState([])
    const url = "https://fakestoreapi.com/products"

    useEffect(fetchGenera, [])

    function fetchGenera() {
        axios
            .get(url)
            .then(res => {
                setProdotti(res.data)
                console.log(res.data);
            })
    }

    const { budgetMode } = useContext(BudgetContext)                        // recupero il valore booleano dal context

    function economici(prodotti, budgetMode) {
        if (budgetMode === true) {                                          // se budgetMode è attivo
            return prodotti.filter((prodotto) => prodotto.price <= 30)      // filtro i prodotti con prezzo <= 30 
        } else {
            return prodotti                                                 // se la modalità budget non è attiva visualizzo tutti i prodoti
        }
    }

    const prodottiEconomici = economici(prodotti, budgetMode)               // salvo il risultato in una variabile 

    return (
        <>
            <Header />

            <main>
                <h2 className="pt-5 pb-3 text-center">Products</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
                        {
                            prodottiEconomici.map((prodotto) => (
                                <div key={prodotto.id} className="col">
                                    <div className="card-content">
                                        <img className="product" alt="" src={prodotto.image} />
                                        <div className="card-body">
                                            <h6>{prodotto.title}</h6>
                                            <hr />
                                            <span className="d-block mb-2">Price - <strong>{prodotto.price}$</strong></span>
                                            <Link to={`/products/${prodotto.id}`}>View product</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
