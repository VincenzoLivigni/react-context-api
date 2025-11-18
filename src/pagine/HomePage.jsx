import Welcome from '../assets/img/photo-1645397925452-dfc04a653d13.avif'
import Footer from '../components/Footer';
import Header from "../components/Header";

export default function HomePage() {
    return (
        <>
            <Header />

            <main>
                <>
                    <section className='jumbo'>
                        <img className="welcome" src={Welcome} />
                    </section>
                    <section className='benvenuto py-5'>
                        <h3 className="text-center mb-4">Welcome to our website!</h3>
                        <h5 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia libero reiciendi</h5>
                    </section>
                </>
            </main>

            <Footer />
        </>
    )
}