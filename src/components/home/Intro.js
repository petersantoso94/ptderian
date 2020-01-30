import React from 'react'

export default function Intro(props) {

    return (
        <div>
            {/* <!-- Intro section start --> */}
            <section className="intro-section pt100 pb50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 intro-text mb-5 mb-lg-0">
                            <h2 className="sp-title">Dream Bright <span>Build Right</span></h2>
                            <p>Dedikasi kami adalah untuk menyediakan berbagai layanan di bidang konstruksi sampai investasi dengan mengedepankan "One-Stop Living Solution"</p>
                            {/* <a href="/about.html" className="site-btn sb-dark">Tentang Kami</a> */}
                        </div>
                        <div className="col-lg-5 pt-4">
                            <img src="img/intro.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Intro section end --> */}
        </div>
    )
}
