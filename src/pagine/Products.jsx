import Header from "../components/Header";
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Contacts() {
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

    return (
        <>
            <Header />

            <main>
                <h2 className="pt-5 pb-3 text-center">Products</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
                        {
                            prodotti.map((prodotto) => (
                                <div key={prodotto.id} className="col">
                                    <div className="card-content">
                                        <img className="product" alt="" src={prodotto.image} />
                                        <div className="card-body">
                                            <h6>{prodotto.title}</h6>
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
