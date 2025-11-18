import Header from "../components/Header";
import Footer from '../components/Footer';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function SingleProduct() {

    const { id } = useParams()
    const [singoloProdotto, setSingoloProdotto] = useState([])
    const url = (`https://fakestoreapi.com/products/${id}`)

    useEffect(fetchGeneraSingolo, [])

    function fetchGeneraSingolo() {
        axios
            .get(url)
            .then(res => {
                console.log(res.data)
                setSingoloProdotto(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <Header />

            <main className="singleProduct pb-5">
                <h3 className="text-center pt-4 pb-5">{singoloProdotto.title}</h3>
                <section>
                    <div className="container pb-5">
                        <div className="card-content d-flex g-3">
                            <div className="card-image-top">
                                <img src={singoloProdotto.image} alt="#" />
                            </div>
                            <span className="separatore"></span>
                            <div className="card-body ms-3">
                                <span>Product -  <strong>{singoloProdotto.title}</strong></span>
                                <hr />
                                <span>Price - <strong>{singoloProdotto.price}$</strong></span>
                                <hr />
                                <span>Category - <strong>{singoloProdotto.category}</strong></span>
                                <hr />
                                <span>Description - <strong>{singoloProdotto.description}</strong></span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    )

}