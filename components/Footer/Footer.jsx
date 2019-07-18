import '../../scss/main.scss';


const Footer = () => {
    return(
			<footer class="footer">
			<div class="footer__logo-box">

					<picture class="footer__logo">
							<img  alt="Full logo" src="../../static/images/white_logo.png"></img>
					</picture>					
			</div>
							<div class="footer__navigation">
									<ul class="footer__list">
											<li class="footer__item"><a href="#" class="footer__link">Company</a></li>
											<li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
											<li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
											<li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
											<li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
									</ul>
							</div>

				</footer>
    )
}
export default Footer;