import React from 'react'
import style from './TopBar.css'

const TopBar = (props) => {
    return(
        <div className={style.top_bar}>            
            <img className={style.top_bar_img} src='../static/TopBarImg.png' alt='InterAudio' ></img>
            <div className={style.logo} >                            
                <img src='../static/white_logo.png' alt='InterAudio' ></img>
                <span>{props.title}</span>    
            </div>
        </div>
    )
}
export default TopBar;