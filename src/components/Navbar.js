import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Modal } from './Modal'

import {FaBars, FaTimes} from 'react-icons/fa'
import Blank from "../assets/Blank.png"
import './NavbarStyle.css'

export const Navbar = () => {
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
       

        


        <li className='start-img-container' onClick={() => (modalOpen? close() : open())}><img className='start-img' src={Blank}></img>  <h1>Sign in</h1></li>
        
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

//  <li>
//<Link to='/'>Home</Link>
//</li>
//<li>
//    <Link to='art'>Art</Link>
//</li>
//<li>
//    <Link to='/design'>Design</Link>
//</li>
