import React from 'react'

export default function Promo() {
	return (
		<div>
			<section className="promo-section pt-0">
				<div className="promo-box set-bg" data-setbg="img/bg.jpg">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 promo-text">
								<h1>Anda membutuhkan <span>partner</span> untuk mengelola proyek anda?</h1>
								<p>Kami berkomitmen untuk memberikan pelayanan terbaik untuk konsumen kami. Kepuasan anda adalah keuntungan terbesar bagi kami.</p>
							</div>
							{/*<div className="col-lg-3 text-lg-right">
								<a href="#" className="site-btn sb-light mt-4">Get in Touch</a>
							</div>*/}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
