import React from 'react'

export default function Header() {
  return (
    <div>
      {/* <!-- Page Preloder --> */}
	<div id="preloder">
		<div className="loader"></div>
	</div>
	
	{/* <!-- Header section start -->    */}
	<header className="header-area">
		<a href="home.html" className="logo-area">
			<img src="img/logo.png" alt=""/>
		</a>
		<div className="nav-switch">
			<i className="fa fa-bars"></i>
		</div>
		<div className="phone-number">+675 334 567 223</div>
		<nav className="nav-menu">
			<ul>
				<li className="active"><a href="home.html">Home</a></li>
				<li><a href="about.html">About us</a></li>
				<li><a href="service.html">Services</a></li>
				<li><a href="portfolio.html">Portfolio</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>
		</nav>
	</header>
	{/* <!-- Header section end -->  */}
    </div>
  )
}
