import React from 'react'

export default function Intro() {
    return (
        <div>
            {/* <!-- Intro section start --> */}
            <section className="intro-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="service-slider">
                                <div className="ss-single">
                                    <img src="img/service/1.jpg" alt="" />
                                </div>
                                <div className="ss-single">
                                    <img src="img/service/2.jpg" alt="" />
                                </div>
                                <div className="ss-single">
                                    <img src="img/service/3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 service-text">
                            <h1>Alur Pengerjaan<span>Proyek</span></h1>
                            <h2>01. Pra-Desain & Konsultasi</h2>
                            <h2>02. Desain</h2>
                            <h2>03. Persiapan Konstruksi</h2>
                            <h2>04. Konstruksi</h2>
                            <h2>05. Finishing</h2>
                            <h2>06. Pemeliharaan</h2>
                            {/*<ol>
                                <li>02.Design. </li>
                                <li>03.Pre Construction.</li>
                                <li>04.Construction.</li>
                                <li>04.Finishing.</li>
                                <li>04.Maintenance.</li>
                            </ol>*/}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Intro section end --> */}
        </div>
    )
}
