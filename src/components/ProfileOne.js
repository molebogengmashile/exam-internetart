import React from 'react'


import './ArtStyles.css'
import { NavbarT } from './NavbarT'
import people from "../assets/people.jpg"
import blm from "../assets/Blm.jpg"
import tau from "../assets/Tau.jpg"
import ukraine from "../assets/ukraine.jpg"

export const ProfileOne = () => {
    return (
        <>
        <NavbarT/>
      
        <section className='container'>
            <div className='left'>
              <h2>More about Thabie</h2>
              <div className='block'>
                  <p> Nthabiseng Mashaba <br></br>
                   24 <br></br>
                   Soweto <br></br>
                   Stop Gender based violence
                   </p>
    
              </div>
              <h2>Based on your recent activitiy</h2>
              <div className='block-2'>
                  <div>
                  <h3>Tau and Karabo's legacy</h3>
                 <img  src={tau}></img>
                  </div>
                  <div>
                      
                 <h3>Racism in Ukraine</h3>
                 <img  src={ukraine}></img>
                 
                  </div>
                 
                



                 
    
              </div>
            </div>
    
            <div className='right'>
              <h2>Your News</h2>
              <div className='block-1'>
                  <img className='people-img' src={people}></img>
                  <div>
                      <a href='https://www.bbc.com/news/world-africa-57818215'> <h1>South Africa Zuma riots: Looting and unrest leaves 72 dead</h1></a>
                      
                  <p>The death toll in South Africa has risen to 72 as violence continues across the country following the jailing
                       of former President Jacob Zuma.
                     Crowds looting and setting alight shopping centres clashed with police in several cities on Tuesday..</p>
                  </div>
                 
    
              </div>

              <div className='block-1'>
              <img className='eff-img' src={blm}></img>
                 
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
