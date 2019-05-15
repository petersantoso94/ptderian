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
				<span onClick={() => {return props.goToPages('home')}} className="logo-area">
					<img src="img/logo.png" alt="" />
				</span>
				<div className="nav-switch">
					<i className="fa fa-bars"></i>
				</div>
				<div className="phone-number">+675 334 567 223</div>
				<nav className="nav-menu">
					<ul>
						<li className="active"><a href="#">Home</a></li>
						<li onClick={() => {return props.goToPages('about')}}><a href="#">About us</a></li>
						<li><a href="#">Services</a></li>
						<li><a href="#">Portfolio</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</nav>
			</header>
			{/* <!-- Header section end -->  */}
		</div>
	)
}
