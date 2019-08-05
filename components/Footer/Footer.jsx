import '../../scss/main.scss';


const Footer = () => {
    return(
			<footer className="footer">
			<div className="footer__logo-box">

					<picture className="footer__logo">
							<img  alt="Full logo" src="../../static/images/white_logo.png"></img>
					</picture>					
			</div>
							<div className="footer__navigation">
									<ul className="footer__list">
											<li className="footer__item"><a href="#" className="footer__link">Company</a></li>
											<li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
											<li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
											<li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
											<li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
									</ul>
							</div>

				</footer>
    )
}
export default Footer;