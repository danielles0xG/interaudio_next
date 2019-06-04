import React from 'react'
import style from './Footer.css'

const Footer = () =>{
    return(
        <div className={style.footer}>            
                    <svg  width="10" height="15">
                        <circle cx="5" cy="8" r="5" fill="transparent" 
                                stroke="orange" stroke-width="1"/>
                    </svg>
                    <span>Puerto Morelos</span>

                    <svg  width="10" height="15">
                        <circle cx="5" cy="8" r="5" fill="transparent" 
                                stroke="orange" stroke-width="1"/>
                    </svg>
                    <span>Playa del Carmen</span>

                    <svg  width="10" height="15">
                        <circle cx="5" cy="8" r="5" fill="transparent" 
                                stroke="orange" stroke-width="1"/>
                    </svg>
                    <span>Tulúm</span>

                    <svg  width="10" height="15">
                        <circle cx="5" cy="8" r="5" fill="transparent" 
                                stroke="orange" stroke-width="1"/>
                    </svg>
                    <span>Cozumel</span>    
                     
                    <svg  width="10" height="15">
                        <circle cx="5" cy="8" r="5" fill="transparent" 
                                stroke="orange" stroke-width="1"/>
                    </svg>                
        </div>
    )
}
export default Footer;