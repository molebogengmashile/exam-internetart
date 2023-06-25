import React from 'react'
import { NavbarJ } from './NavbarJ'

import whiteBLM from "../assets/WhiteBLM.jpg"
import crime from "../assets/woolworths.jpg"
import tau from "../assets/TheOffice.jpg"
import ukraine from "../assets/Policecrimes.jpg"


export const ProfileTwo = () => {
    return (
        <>
        <NavbarJ/>
       
        <section className='container'>
            <div className='left'>
              <h2>More about John</h2>
              <div className='block'>
                  <p> Johnathan Baker <br></br>
                   27 <br></br>
                   Hyde Park <br></br>
                   We stand with Ukraine
                   </p>
    
              </div>
              <h2>Based on your recent activitiy</h2>
              <div className='block-2'>
                  <div>
                  <h3>Dwight Schrute as memes</h3>
                 <img  src={tau}></img>
                  </div>
                  <div>
                      
                 <h3>Crime on the rise in SA</h3>
                 <img  src={ukraine}></img>
                 
                  </div>
                 
                



                 
    
              </div>
            </div>
    
            <div className='right'>
              <h2>Your News</h2>
              <div className='block-1'>
                  <img className='people-img' src={crime}></img>
                  <div>
                      <a href='https://www.bbc.com/news/world-africa-57818215'> <h1>South Africa Zuma riots: Looting and unrest leaves 72 dead</h1></a>
                      
                  <p>The death toll in South Africa has risen to 72 as violence continues across the country following the jailing
                       of former President Jacob Zuma.
                     Crowds looting and setting alight shopping centres clashed with police in several cities on Tuesday..</p>
                  </div>
                 
    
              </div>

              <div className='block-1'>
                  <img className='eff-img' src={whiteBLM}></img>
                 
                  <div>
                  <a href='https://www.csmonitor.com/World/Africa/2016/0715/Why-Africans-are-showing-solidarity-with-Black-Lives-Matter-movement'><h1>Why Africans are showing solidarity with Black Lives Matter movement</h1></a>
                      
                  <p>Activists in both South Africa and Kenya are drawing on the deaths of Alton Sterling and Philando Castile to highlight the global echoes of their own social justice causes.</p>
                  </div>
                 
    
              </div>
            </div>
            
        </section>
        </>
        
      )
}
