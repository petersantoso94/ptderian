import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* <!-- Footer section start --> */}
            <footer className="footer-section">
                <div className="footer-social">
                    <div className="social-links">
                        <a href="#"><i className="fa fa-pinterest"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-3">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="footer-item">
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Portfolio</a></li>
                                            <li><a href="#">Blog</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-item">
                                        <ul>
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Help Desk</a></li>
                                            <li><a href="#">Job Aplications</a></li>
                                            <li><a href="#">Site Map</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-item">
                                        <ul>
                                            <li><a href="#">Privacy</a></li>
                                            <li><a href="#">Contact us</a></li>
                                            <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">Clients Testimonials</a></li>
                                            <li><a href="#">FAQ</a></li>
                                        </ul>
                                    </div>
                                </div>
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
