import React from 'react'
import TopBar from '../components/TopBar/TopBar'
import Footer from '../components/Footer/Footer'
import style from './index.css'
import Link from 'next/link';


const SUBTITULO          = 'AUDIO / VISUAL MINISTRY';
const TEXTO_RENTA        = 'Empleamos equipo profesional de ultima generación. Cubrimos eventos de hasta 500 personas. Garantizamos la mejor calidad y servicio en sonorización de eventos.'
const TEXTO_INSTALACION  = 'Calibración, equialización, diseño e implementación de sistemas de sonido para instalaciones fijas. Aseguramos el optimo desempeño sonoro de su equipo.';


const Home = () =>{

    return(
        
            <div className={style.container}>            
                <TopBar title={SUBTITULO}/>
                    
                    <div className={style.img}>></div>
                    
                    <section className={style.middle_section}>
                        <img src='../static/spk-l.png' className={style.speakers} alt='left_speaker'></img>                    
                    
                        <Link href="/renta">
                             <div className={style.renta}>
                                <h1 className={style.renta_h1}>Renta</h1>
                                <div className={style.renta_card}></div>
                                <span className={style.renta_text}>{TEXTO_RENTA}</span>
                             </div>
                        </Link>

                        <div className={style.instalacion}>                       
                            <h1 className={style.instalacion_h1}>Instalacion</h1>                       
                            <div className={style.instalacion_card}></div>
                            <span className={style.instalacion_text}>{TEXTO_INSTALACION}</span>                        
                        </div>

                        <img src='../static/spk-r.png' className={style.speakers} alt='left_speaker'></img>
                    
                </section>         
                <Footer/>             
          </div>
    
   
           
    )
}
export default Home;