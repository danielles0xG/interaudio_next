import '../scss/main.scss';
import Link from 'next/link';
import NavDrawer from '../components/NavDrawer/NavDrawer';
import Slider from '../components/Slider/Slider';
import PaqueteCard from '../components/PaqueteCard/PaqueteCard';
import Footer from '../components/Footer/Footer';
import assets from '../static/assets';
import data from '../data/paquetes';

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
			Ç
			<h2 class="heading-secondary">Renta de audio e iluminación profesional</h2>
			<div className="section__about--columns">
				<aside className="section__about--columns-aside">
					<h1 >Cubrimos audiencias de hasta 300 personas</h1>
					<h2>
					Audio - Iluminación - Dj - Proyector - Eventos - Fiestas - Bodas - Conciertos - Karaoke - Cancún - PDC - Tulúm - Cozumel - Quintana Roo - Sound Rent Alquiler de Bocinas equipo de Luz y Sonido 
					Spoken english.
					</h2>
					<br />
					<a href="#" class="btn-text">
						Learn more &rarr;
					</a>
				</aside>

				<div className="section__about--columns-images">
					<Slider slides={assets} />
				</div>
			</div>
		</section>

		<section className="section__paquetes">
			<h2 class="heading-secondary section__paquetes--heading-fix">Servicios / Eventos</h2>
			<div className="section__paquetes-card">
					{data.data.map(p => (
							<PaqueteCard paquete={p}/>
					))}			 									
			</div>
		</section>
		<Footer />
	</content>
);

export default index;