import React from 'react'

export default function Team() {
    return (
        <div>
            {/* <!-- Team section start --> */}
            <section className="team-section spad">
                <div className="container">
                    <div className="section-title mb100">
                        <h1>Manajemen Kami</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="team-member">
                                <img src="img/team/1.jpg" alt="" />
                                <div className="member-info">
                                    <h2>Derian A.</h2>
                                    <p>S.T., M.Sc.</p>
                                    <p>Project Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="team-member">
                                <img src="img/team/Edwin.jpg" alt="" />
                                <div className="member-info">
                                    <h2>Edwin C.</h2>
                                    <p>S.T.</p>
                                    <p>Project Manager</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="team-member">
                                <img src="img/team/2.jpg" alt="" />
                                <div className="member-info">
                                    <h2>Grace G.</h2>
                                    <p>S.Ds</p>
                                    <p>Interior Design Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="team-member">
                                <img src="img/team/2.jpg" alt="" />
                                <div className="member-info">
                                    <h2>Indira S.</h2>
                                    <p>S.I.Kom, M.A.</p>
                                    <p>Account Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Team section end --> */}
        </div>
    )
}
