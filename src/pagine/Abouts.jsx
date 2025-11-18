import Header from "../components/Header";
import Footer from '../components/Footer';
import Team from '../assets/img/team.jpg';

export default function Abouts() {
    return (
        <>
            <Header />

            <main>
                <div className="container bg py-5">
                    <h2 className="py-3 text-center">Our mission</h2>
                    <div className="mission row">
                        <div className="col-md-12 col-lg-6">
                            <img className="team" src={Team} />
                        </div>

                        <div className="col-col-md-12 col-lg-6">
                            <h4 className="pb-2 text-center">Lorem</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium quisquam dolor eaque, rerum ullam odit, veritatis eos a mollitia non. Voluptatum impedit magnam repellendus. Fugit veniam debitis rem mollitia.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ab quia nemo quas magnam optio recusandae voluptate, consequatur quasi quibusdam nam expedita odit quaerat tempora, itaque totam rem molestiae. Nemo.</p>
                        </div>
                    </div>

                    <h2 className="py-3 text-center">Our story</h2>
                    <div className="story row">
                        <div className="col-md-12 col-lg-6">
                            <h4 className="pb-2 text-center">Ipsum</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium quisquam dolor eaque, rerum ullam odit, veritatis eos a mollitia non. Voluptatum impedit magnam repellendus. Fugit veniam debitis rem mollitia.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ab quia nemo quas magnam optio recusandae voluptate, consequatur quasi quibusdam nam expedita odit quaerat tempora, itaque totam rem molestiae. Nemo.</p>
                        </div>

                        <div className="col-col-md-12 col-lg-6">
                            <img className="team" src={Team} />
                        </div>
                    </div>
                </div>

            </main>

            <Footer />

        </>
    )
}