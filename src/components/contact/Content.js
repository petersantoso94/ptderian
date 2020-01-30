import React from 'react'

export default function Content() {
    return (
        <div>
            {/* <!-- Page section start --> */}
            <section className="page-section pt100">
                <div className="container pb100">
                    <div className="section-title pt-5">
                        <h1>Get in Touch</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 contact-info mb-5 mb-lg-0">
                            <p>Address: <br />
                            Jl. Semangka Barat 74 Pondok Tjandra Indah, Waru, Sidoarjo, Pos : 61256 </p>
                            <p>Line: </p>
                            <p>Whatsapp: </p>
                            <p>Phone: </p>
                            <div className="cf-social">
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <form className="contact-form">
                                <input type="text" placeholder="Enter your name" />
                                <input type="text" placeholder="Enter your email address" />
                                <textarea placeholder="Message ..."></textarea>
                                <button className="site-btn sb-dark">Send Email</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="map-area" id="map-canvas"></div>
            </section>
            {/* <!-- Page section end --> */}
        </div>
    )
}
