import React from 'react'
import { NavbarT } from './NavbarT'
import './ArtStyles.css'

import wireframe1 from "../assets/wireframe1.jpg"
import wireframe2 from "../assets/wireframe2.jpg"

export const DesignT = () => {
  return (
      <>
         <NavbarT/>
      <section className='container-art'>
      

      <div className='art-block'>
        <h1>Design</h1>
        <div>
            <p>This website utilizes a very simplistic design to further emphasize the artwork. Since the artwork is apart of the website as a whole, the user must not be distracted by other elements. The colors black and white act as a background and help draw the user's attention to the rest of the site. </p>

        </div>
      </div>

      <div className='art-block'>
        <h1>Wire Frames</h1>
        <div className='wire-frame'>
            <img src={wireframe1}></img>
            <img src={wireframe2}></img>

        </div>
      </div>
      
  </section>
      
      </>
 

    
  )
}
