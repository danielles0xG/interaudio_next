import '../../scss/main.scss';


const PaqueteCard = (paquete) => {	
	let p  = paquete.paquete
	return (
						<div key={paquete.id} class="card">
							<div class="card__side card__side--front">

								<h4 class="card__heading">{p.titulo}</h4>
								<div class="card__details">
									<ul>
											{p.data.map(i => (
												<li>{i.info}</li>
											))}
									</ul>
								</div>
							</div>

							<div class="card__side card__side--back card__side--back-1">
								<div class="card__cta">
									<div class="card__price-box">
										<p class="card__price-only">Only</p>
										<p class="card__price-value">$297</p>
									</div>
									<a href="#popup" class="btn btn--white">Book now!</a>
								</div>
							</div>
						</div>
		)
}


export default PaqueteCard;