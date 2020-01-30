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
				{/*<span onClick={() => { return props.goToPages('home') }} className="logo-area">
					 <!-- <img src="img/favicon.jpg" alt="" width="70" height="30"/> -->    
				</span> */}
				<div className="nav-switch">
					<i className="fa fa-bars"></i>
				</div>
				<div className="phone-number">Epiphany Construction</div>
				<nav className="nav-menu">
					<ul>
						<li className={props.currentPage == 'home' ? 'active' : ''} onClick={() => { return props.goToPages('home') }}><a href="Home">Beranda</a></li>
						<li className={props.currentPage == 'about' ? 'active' : ''} onClick={() => { return props.goToPages('about') }}><a href="About">Profil</a></li>
						<li className={props.currentPage == 'services' ? 'active' : ''} onClick={() => { return props.goToPages('services') }}><a href="Services">Layanan</a></li>
						{/*<li className={props.currentPage == 'portofolio' ? 'active' : ''} onClick={() => { return props.goToPages('portofolio') }}><a href="Portfolio">Portfolio</a></li>*/}
						<li className={props.currentPage == 'contact' ? 'active' : ''} onClick={() => { return props.goToPages('contact') }}><a href="Contact Us">Kontak</a></li>
					</ul>
				</nav>
			</header>
			{/* <!-- Header section end -->  */}
		</div>
	)
}
