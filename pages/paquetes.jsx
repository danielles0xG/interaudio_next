import React from 'react'
import Paquetes_Layout from '../layouts/Paquetes_Layout'
import SEO from '../components/SEO'


const Paquetes  = ( ) =>{
    const meta = {'meta':'Interaudio renta de equipo de sonido, Cancun.'}
    return(
        <div>
            <SEO lang='es'
                 title="interaudio"
                 keywords={[`equipo de sonido`, `renta`,`luces`,`cancun`,`sonido`,`bocinas`]}                 
                 meta='${meta}'
                 metaDescription='Interaudio renta de equipo de sonido, Cancun.'/>
            <Paquetes_Layout/>

        </div>

    )
}

export default Paquetes;