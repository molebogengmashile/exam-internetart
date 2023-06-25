import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Backdrop from './Backdrop'
import Thabie from "../assets/Thabie.png"
import John from "../assets/John.png"
import './NoticeStyles.css'

const dropIn={
    hidden:{
        y:"-100vh",
        opacity:0,

    },
    visible:{
        y: "0",
        opacity:1,
        transition:{
            duration:0.1,
            type: "spring",
            damping: 25,
            stiffness:500,
        }

    },
    exit:{
        y: "100vh",
        opacity:0,

    }
}

export const Modal = ({handleClose, text}) => {
  return (
    <Backdrop onClick={handleClose}>
        <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <section className='profiles-container'>
                <div className='profile' >
                    <img src={Thabie}></img>
                <Link to='/profileOne'><h1>Sign in as Thabie</h1></Link>
               
               </div>

               <div className='profile'>
               <img src={John}></img>
               <Link to='/profileTwo'><h1>Sign in as John</h1></Link>
               </div>

            </section>
           

        </motion.div>

    </Backdrop>
  )
}
