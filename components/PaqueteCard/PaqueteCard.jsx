import '../../scss/main.scss';
import  classNames from 'classnames'

const style = {
	image_1: {
		backgroundImage:"url('../../static/icons/background_mixer.jpg')"
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
										<div className="card__details--subtitulo">
												<p>{p.subtitulo}</p>
										</div>
		
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

/*
Renta de Audio e iluminación Cancun Playa del Carmen Tulum Fiestas Bodas Karaoke Dj Luz y Sonido
Editar
 Publicado hace 13 días|12 Vistas
VENDEDOR(A)Profesional
"Nos enfocamos a la calidad sonora"

Fiestas · Bodas · Conciertos · Conferencias · Karaoke ·Eventos corporativos ·Refuerzo sonoro a bandas, Dj's y músicos en general::

___________

Opciones:

1. EXCLUSIVO SISTEMA DE SONIDO A 4 VIAS, ILUMINACION Y VIDEOPROYECCION HD, SERVICIO DE DJ VERSATIL Y/O MC + SONORIZACIÓN DE MUSICOS INVITADOS

Dj versátil con booth iluminado y monitores activos
2 Bocinas Full-range de 15", Tri-amplificadas, Clase D (2000 Watts RMS)
2 Bocinas Full-range de 3x8" coax, Tri-amplificadas Clase D (2000 Wrms)
2 Sub graves de 18" activos, Amplificación Clase D (1OOO Wrms)
Mezcladora análoga o digital de 8, 12 o 16 canales
Micrófonos inalámbricos, dinámicos, de condensador, electret, etc.
Iluminación controlada / pares led DMX, robóticas, efectos, washes, luz negra, láser, maquina de humo, etc.
Sistema de sonido extra para recepción o ceremonias. 2 tops 1 Sub
Refuerzo sonoro a músicos con servicio de microfonía , monitoreo, mezcla F.O.H , y grabación multi-track en alta resolución.
Cajas directas A y P, acondicionador de voltaje de prestigio con regulación a 120 v continuos y 20 A, cableado digital AES/EBU, atriles, extensiones eléctricas, etc.
Videoproyección Full HD con pantalla de 100" o a pared de 300"
Staff técnico e Ingeniero en audio asignado.
6 horas de servicio
______________

2. POTENTE SISTEMA DE SONIDO A 3 VIAS, ILUMINACION DMX Y VIDEOPROYECCION HD

2 Bocinas activos de 3x8", Full-range y diseño coaxial, Tri-amplificadas, clase D (2000 Wrms)
2 Sub graves de 18" activos, clase D (1OOO Wrms)
1 Mezcladora análoga o digital de 8, 12 o 16 Ch.
2 Micrófonos inalámbricos, de mano o de diadema
Iluminación controlada / pares led DMX, robóticas, efectos, washes, luz negra, láser, maquina de humo, etc.
Cajas directas A y P, acondicionador de voltaje de prestigio con regulación a 120 v continuos y 20 A, cableado digital AES/EBU, atriles, extensiones eléctricas, etc.
Videoproyección Full HD con pantalla de 100" o a pared de 300"
Staff y operación técnica.
6 horas de servicio
______________

3. SISTEMA DE SONIDO COMPACTO DE 450 WATTS RMS, ILUMINACION Y MICRÓFONO INALÁMBRICO

Sistema de audio de tipo lineal de 450 Watts continuos, Subwoofer de 15" y conexión bluetooth (2 satélites con 4 bocinas por lado)

1 Mezcladora de 8 canales, efectos y Bluetooth
1 Micrófono inalámbrico
Iluminación autorrítmica.
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

SERVICIOS ADICIONALES (5 hrs.)

Proyector Full HD Solid Shine Láser - 3,500 Lumens $ 800
Sistema lineal compacto (2 Tops, 1 Sub) + $1200
Pista de leds (cotizar)
Pantalla de leds (cotizar)
Backline (cotizar)
Cubrimos audiencias de hasta 300 personas.

(Cancún, Playa del Carmen, Tulúm, Cozumel, Isla Mujeres)



Cotizaciones:

Cel./Wtspp. (998) 2 18 46 16



Spoken english.



: : Focused on Sonic Quality : :
*/