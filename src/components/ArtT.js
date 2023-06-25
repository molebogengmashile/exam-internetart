import React from 'react'
import './ArtStyles.css'
import { NavbarT } from './NavbarT'

export const ArtT = () => {
  return (
      <>
      <NavbarT/>

      <section className='container-art'>
      

        <div className='art-block'>
        <h2>The Art explained</h2>
          
          <div>
              
              <p>This artwork demonstrates what it would be like to experience a website or social media from different perspectives. 
                  On my Instagram feed, I am often bombarded with new injustices done to black people and people of color, but mainly black.
                   The internet does not know the color of my skin, yet it still manages to guess correctly. With the ability to know my location,
                    these large tech companies (the internet), are able to provide content that is relevant to me. This then becomes what I see every
                     day. This is not entirely the internet's fault. The content that I engage with the most will be more prevalent in my feed, and the content
                      that I don't show interest in, I will see less of. It is this algorithmic model that keeps users coming back. Really it is our way of thinking that
                       reflects on the internet.  Although we are the ones teaching this racism on the internet, don't these companies also have the responsibility of providing
                        us with accurate representations of the world?  </p>

          </div>
        </div>
        
    </section>
      </>
      
    
  )
}
