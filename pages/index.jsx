import React from 'react'
import TopBar from '../components/TopBar/TopBar'
import Footer from '../components/Footer/Footer'
import style from './index.css'

const SubTitle = 'AUDIO / VISUAL MINISTRY';

const Home = () =>{

    return(
        <div className={style.container}>
            <TopBar title={SubTitle}/>
            <section className={style.middle_section}>
                
            </section>            
            <Footer/>
        </div>
    )
}
export default Home;