import React from 'react'

export default function Footer(props) {
    return (
        <div>
            {/* <!-- Footer section start --> */}
            <footer className="footer-section">
                <div className="footer-social">
                    <div className="social-links">
                        {/*<a href="a"><i className="fa fa-pinterest"></i></a>
                        <a href="a"><i className="fa fa-linkedin"></i></a>
                        <a href="a"><i className="fa fa-twitter"></i></a>*/}
                        <a href="https://www.instagram.com/epiphany.construction/"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.facebook.com/epiphany.construction/"><i className="fa fa-facebook"></i></a>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-3">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="footer-item">
                                        <ul>
                                        <li className={props.currentPage == 'home' ? 'active' : ''} onClick={() => { return props.goToPages('home') }}><a href="Home">Home</a></li>
                                        <li className={props.currentPage == 'about' ? 'active' : ''} onClick={() => { return props.goToPages('about') }}><a href="About">Company Profile</a></li>
                                        <li className={props.currentPage == 'services' ? 'active' : ''} onClick={() => { return props.goToPages('services') }}><a href="Services">Services</a></li>
                                        <li className={props.currentPage == 'contact' ? 'active' : ''} onClick={() => { return props.goToPages('contact') }}><a href="Contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/*<div className="col-md-4">
                                    <div className="footer-item">
                                        <ul>
                                            <li><a href="a">Terms & Conditions</a></li>
                                            <li><a href="a">FAQ</a></li>
                                            <li><a href="a">Help Desk</a></li>
                                            <li><a href="a">Job Aplications</a></li>
                                            <li><a href="a">Site Map</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-item">
                                        <ul>
                                            <li><a href="a">Privacy</a></li>
                                            <li><a href="a">Contact us</a></li>
                                            <li><a href="a">Newsletter</a></li>
                                            <li><a href="a">Clients Testimonials</a></li>
                                            <li><a href="a">FAQ</a></li>
                                        </ul>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                <div className="copyright">Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved.  <br />This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></div>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}

            </footer>
            {/* <!-- Footer section end --> */}
        </div>
    )
}
