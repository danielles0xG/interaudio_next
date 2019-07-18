import '../../scss/main.scss';


const PaqueteCard = () => (

				<div class="card">
				
						<div class="card__side card__side--front">

									<h4 class="card__heading">The Sea Explorer</h4>
									<div class="card__details">
											<ul>
													<li>3 day tours</li>
													<li>Up to 30 people</li>
													<li>2 tour guides</li>
													<li>Sleep in cozy hotels</li>
													<li>Difficulty: easy</li>
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

export default PaqueteCard;