import '../scss/main.scss';
import Link from 'next/link';
import NavDrawer from '../components/NavDrawer/NavDrawer';
import Slider from '../components/Slider/Slider';
import PaqueteCard from '../components/PaqueteCard/PaqueteCard'
import Footer from '../components/Footer/Footer'
import assets from '../static/assets';

const COVERTURA = 'Cancun - Tulum - Isla Mujeres - Cozumel';
const TELEFONO = '(998) 2 18 46 16';

const index = () => (
	<content>
		<NavDrawer />

		<header className="header">
			<div className="bg-video">
				<video className="bg-video__content" autoPlay muted loop>
					<source src="../static/media/Major-Tom.mp4" type="video/mp4" />
					<source src="../static/media/Major-Tom.webm" type="video/webm" />
					Your browser is not supported!
				</video>
			</div>

			<div className="header__text-box">
				<h1 className="heading-primary">
					<img src="../static/images/slogan-transparent.png" className="header__logo" alt="Interaudio Logo" />
					<br />
					<span className="heading-primary">
					
						{COVERTURA}
						<br />
						{TELEFONO}
					</span>
				</h1>
				<a href="#section-tours" className="header__socialIcon">
					<img
						className="header__socialIcon--whatsApp"
						src="../static/icons/whatsapp-480px.png"
						alt="Contacto WhatsApp"
					/>
				</a>
			</div>
		</header>
		
		<section class="section__about">
		<h2 class="heading-secondary">Renta de audio e iluminación profesional</h2>

					<div className="section__about--columns">
						<aside className="section__about--columns-aside">
							<h1>WON THE MOMENT</h1>
							<h2>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, natus? Illo adipisci
								enim officiis, consequatur quis blanditiis eveniet recusandae molestiae atque reprehenderit
								dignissimos sunt, molestias nesciunt sit modi maiores. Similique.
							</h2>
							<br/>
							<a href="#" class="btn-text">Learn more &rarr;</a>
						</aside>

						<div className="section__about--columns-images">
							<Slider slides={assets} />
						</div>
					</div>
		</section>

		
		 
		<section className="section__paquetes">
		<h2 class="heading-secondary section__paquetes--heading-fix">
					 Servicios / Eventos
		  </h2> 
				<div className="section__paquetes-card">
							
							<PaqueteCard/>
							<PaqueteCard/>
							<PaqueteCard/>
				</div>
		</section>
			<Footer/>
		
	</content>
);

export default index;
