import React, { useCallback } from 'react'


export default function Hero() {
	const openNewTab=useCallback((url)=>{
		window.open(url)
	},[])
	return (
		<div>
			{/* <!-- Hero section start --> */}
			<section className="hero-section">
				{/* <!-- left social link ber --> */}
				<div className="left-bar">
					<div className="left-bar-content">
						<div className="social-links">
							{/*<a href="a"><i className="fa fa-pinterest"></i></a>
							<a href="a"><i className="fa fa-linkedin"></i></a>
							<a href="a"><i className="fa fa-twitter"></i></a>*/}
							<a href="https://www.instagram.com/epiphany.construction/" target="_blank"><i className="fa fa-instagram" onClick={openNewTab('https://www.instagram.com/epiphany.construction/')}></i></a>
							<a href="https://www.facebook.com/epiphany.construction/" target="_blank"><i className="fa fa-facebook" onClick={openNewTab('https://www.facebook.com/epiphany.construction/')}></i></a>
						</div>
					</div>
				</div>
				{/* <!-- hero slider area --> */}
				<div className="hero-slider">
					<div className="hero-slide-item set-bg" data-setbg="img/bg.jpg">
						<div className="slide-inner">
							<div className="slide-content">
								<h2>Build with<br />Integrity</h2>
								{/* <a href="a" className="site-btn sb-light">See Project</a> */}
							</div>
						</div>
					</div>
					<div className="hero-slide-item set-bg" data-setbg="img/bg.jpg">
						<div className="slide-inner">
							<div className="slide-content">
								<h2>Plan Sustainable<br />Build for the Future</h2>
								{/* <a href="a" className="site-btn sb-light">See Project</a> */}
							</div>
						</div>
					</div>
				</div>
				{/* <div className="slide-num-holder" id="snh-1"></div> */}
				<div className="hero-right-text">Epiphany</div>
			</section>
			{/* <!-- Hero section end --> */}
		</div>
	)
}
