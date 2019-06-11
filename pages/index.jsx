import React from 'react'
import HomeLayout from '../layouts/Home_Layout'
import SEO from '../components/SEO'


const Home  = ( ) =>{
    const meta = {'meta':'Interaudio renta de equipo de sonido, Cancun.'}
    return(
        <div>
            <SEO lang='es'
                 title="interaudio"
                 keywords={[`equipo de sonido`, `renta`,`luces`,`cancun`,`sonido`,`bocinas`]}                 
                 meta='${meta}'
                 metaDescription='Interaudio renta de equipo de sonido, Cancun.'/>
            <HomeLayout/>
        </div>

    )
}

export default Home;