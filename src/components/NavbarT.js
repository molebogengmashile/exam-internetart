import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Modal } from './Modal'

import {FaBars, FaTimes} from 'react-icons/fa'
import Thabie from "../assets/Thabie.png"
import './NavbarStyle.css'

export const NavbarT = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const[modalOpen, setModalOpen] = useState(false);
    const close = ()=> setModalOpen(false);
    const open = ()=> setModalOpen(true);
    const thabie = false;
  return (
    <div className='header'>
        <Link to='/'><h1>The Goog</h1></Link>
        
        <ul className={click? 'nav-menu active' : 'nav-menu'}>
       
        <li>
             <Link to='/artT'>Art</Link>
        </li>
        <li>
             <Link to='/blogsT'>Blogs</Link>
        </li>
        <li>
             <Link to='/designT'>Design</Link>
        </li>
       

        


        <li className='start-img-container' onClick={() => (modalOpen? close() : open())}><img className='start-img' src={Thabie}></img>  <h1>Thabie</h1></li>
        
        <AnimatePresence>
              initial={false}

              exitBeforeEnter={true}
              onExitComplete={() => null}
              {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}

            </AnimatePresence>
            
          

        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}}/>)}
            
        </div>

        
        
    </div>
  )
  
}
