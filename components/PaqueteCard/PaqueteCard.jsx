import '../../scss/main.scss';
import  classNames from 'classnames'

const style = {
	image_1: {
		backgroundImage: "url('../../static/icons/background_mixer.jpg')"
	}
}

const PaqueteCard = (paquete) => {	
	let p  = paquete.paquete
	return (
						<div key={paquete.id} className="card">
							<div className="card__side card__side--front">
							<div style={style.image_1} className="card__picture">
									<h4 className="card__heading">{p.titulo}</h4>
								</div>

								
								<div className="card__details">
									<ul>
											{p.data.map(i => (
												<li key={i.id}>{i.info}</li>
											))}
									</ul>
								</div>
							</div>

							<div className="card__side card__side--back card__side--back-1">
								<div className="card__cta">
									<div className="card__price-box">
										<p className="card__price-only">Only</p>
										<p className="card__price-value">$297</p>
									</div>
									<a href="#popup" className="btn btn--white">Book now!</a>
								</div>
							</div>
						</div>
		)
}

export default PaqueteCard;