import React from 'react'

export default function Header(props) {

	return (
		<div>
			{/* <!-- Page Preloder --> */}
			<div id="preloder">
				<div className="loader"></div>
			</div>
			{/* <!-- Header section start -->    */}
			<header className="header-area">
				<span onClick={() => { return props.goToPages('home') }} className="logo-area">
					<img src="img/logo.png" alt="" />
				</span>
				<div className="nav-switch">
					<i className="fa fa-bars"></i>
				</div>
				<div className="phone-number">+675 334 567 223</div>
				<nav className="nav-menu">
					<ul>
						<li className={props.currentPage == 'home' ? 'active' : ''} onClick={() => { return props.goToPages('home') }}><a href="Home">Home</a></li>
						<li className={props.currentPage == 'about' ? 'active' : ''} onClick={() => { return props.goToPages('about') }}><a href="About">About us</a></li>
						<li className={props.currentPage == 'services' ? 'active' : ''} onClick={() => { return props.goToPages('services') }}><a href="a">Services</a></li>
						<li className={props.currentPage == 'portofolio' ? 'active' : ''} onClick={() => { return props.goToPages('portofolio') }}><a href="a">Portfolio</a></li>
						<li className={props.currentPage == 'contact' ? 'active' : ''} onClick={() => { return props.goToPages('contact') }}><a href="a">Contact</a></li>
					</ul>
				</nav>
			</header>
			{/* <!-- Header section end -->  */}
		</div>
	)
}
