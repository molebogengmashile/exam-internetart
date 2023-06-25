import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import './NoticeStyles.css'
import { Modal } from './Modal'

export const Notice = () => {
  const[modalOpen, setModalOpen] = useState(false);
  const close = ()=> setModalOpen(false);
  const open = ()=> setModalOpen(true);
  return (
    <div className='hero'>
        <section className='notice'>
            <h2>Please sign in to continue</h2>
            <motion.button className='btn'
            whileHover={{scale:1.1}}
            onClick={() => (modalOpen? close() : open())}>Sign in here</motion.button>
            <AnimatePresence>
              initial={false}

              exitBeforeEnter={true}
              onExitComplete={() => null}
              {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}

            </AnimatePresence>
           
        </section>
    </div>
  )
}
