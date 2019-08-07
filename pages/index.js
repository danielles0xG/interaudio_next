import '../scss/main.scss';
import Link from 'next/link';
import NavDrawer from '../components/NavDrawer/NavDrawer';
import Slider from '../components/Slider/Slider';
import PaqueteCard from '../components/PaqueteCard/PaqueteCard';
import Footer from '../components/Footer/Footer';
import data from '../data/paquetes';

const COVERTURA = 'Cancun - Tulum - Isla Mujeres - Cozumel';
const TELEFONO = '(998) 2 18 46 16';

const Home = () => (
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
					<img src="../static/images/slogan-transparent.png"
					     className="header__logo" alt="Interaudio Logo" />
					<br />
					<span className="heading-primary">
						{COVERTURA}
						<br />
						{TELEFONO}
					</span>
				</h1>

				<div className="header__socialIcons">
							<a  href="https://api.whatsapp.com/send?phone=5219982184616" target="_blank" >
								<img className="header__socialIcons--icon"
										src="../static/icons/icons8-whatsapp-100.png"
										alt="Contacto WhatsApp"/>
							</a>
							<a  href="https://www.facebook.com/SonoZens" target="_blank">
								<img className="header__socialIcons--icon"
										src="../static/icons/icons8-facebook-100.png"
										alt="Contacto WhatsApp"/>
							</a>
							<a href="mailto:contacto@interaudio.mx" target="_blank">
								<img className="header__socialIcons--icon"
										src="../static/icons/icons8-gmail-100.png"
										alt="Contacto WhatsApp"/>
							</a>
				</div>

			</div>
		</header>

		<section className="section__about">
		
			<h2 className="heading-secondary">
					Renta de audio e iluminación profesional
			</h2>
			
			<div className="section__about--columns">
			
				<aside className="section__about--columns-aside">

					<div>
						<h1 	className="heading-tertiary" >
								Cubrimos audiencias de hasta 300 personas
						</h1>
						<br/>
							<p className="paragraph">
									Audio - Iluminación - Dj - Proyector - Eventos - Fiestas
									- Bodas - Conciertos - Karaoke - Cancún - PDC - Tulúm - Cozumel 
									- Quintana Roo - Sound Rent Alquiler de Bocinas equipo de Luz y Sonido 
									Spoken english.
							</p>					
					</div>
				</aside>
				

				<div className="section__about--columns-images">
					<Slider/>
				
				</div>

				
			</div>
		</section>

		<section className="section__paquetes">
				<h2 className="heading-secondary section__paquetes--heading-fix">
						Servicios / Eventos
				</h2>
				<div className="section__paquetes-card">
						{data.data.map(p => (
								<PaqueteCard key={p.id}  paquete={p}/>
						))}			 									
				</div>
		</section>

		<section className='section-footer'>
						<Footer />
		</section>
		
	</content>
);

export default Home;