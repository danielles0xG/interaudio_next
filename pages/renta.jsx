import React from 'react'
import Link from 'next/link';
const renta =()=>{
    return(
        <div>
            <Link href="/"> 
                  <h1> back</h1>
            </Link>
            <br></br>
            <br></br>
            <h1>
                Rentame!
            </h1>
            <br></br>
            <img src='../static/spk-l.png' alt='left_speaker'></img>                    
        </div>
    )
}
export default  renta;