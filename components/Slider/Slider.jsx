import '../../scss/main.scss';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
	{ original: '../../static/images/01_Pristine_audio_quality.jpg' },
	{ original: '../../static/images/02_Sonorización_Profesional.jpg' },
	{ original: '../../static/images/03_Live_Sound.jpg' },
	{ original: '../../static/images/04_Refuerzo_Sonoro.jpg' },
	{ original: '../../static/images/05_Dj_VDj.jpg' },
	{ original: '../../static/images/06_International_Djs.jpg' },
	{ original: '../../static/images/07_Mezcla_y_grabación_en_vivo.jpg' },
	{ original: '../../static/images/08_PA_Speakers_rental.jpg' },
	{ original: '../../static/images/10_Fiestas_de_cumpleaños.jpg' },
	{ original: '../../static/images/11_Pool_party.jpg' },
	{ original: '../../static/images/12_Sistema_lineal_compacto_array_450_W.jpg' },
	{ original: '../../static/images/13_Wall_of_Sound.jpg' },
	{ original: '../../static/images/14_Israeliens.jpg' },
	{ original: '../../static/images/15_your_stage_partner.jpg' },
	{ original: '../../static/images/16_dj_boda.jpg' },
	{ original: '../../static/images/17_selina.jpg' },
	{ original: '../../static/images/18_urano_130.jpg' },
]


class Slider extends React.Component {
	render() {
		return (
			<div className="slideshow-container">
				<ImageGallery
					style={{ borderRadius: '5px' }}
					items={images} />
				

				<a href="#" className="slideshow-container--informes_btn">
					Informes &rarr;
						</a>
			</div>
		)
	}
}


export default Slider;