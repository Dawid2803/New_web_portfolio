import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale: 1,
            speed:450
          }}  
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
          flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3
            className='text-white text-[20px] font-bold text-center'
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
          <p className={styles.sectionSubText}>
            Introduction
          </p>
          <h2 className={styles.sectionHeadText}>
            Overview.
          </h2>
      </motion.div>
      <motion.p
        variants={fadeIn(',',0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        With a natural inclination towards technology and a passion for overcoming challenges, I have always been a techie at heart. From my perspective, programming is a means to solve problems, and the key to becoming a 10x developer is to acquire the expertise to discern which tool is best suited for solving a problem efficiently.
      </motion.p>
      <motion.p
        variants={fadeIn(',',0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        To be considered a top-tier developer, I endeavor to continuously enhance my knowledge and hone my skills. Adhering to the philosophy of "First solve the problem, then write the code" written by John Johnson, I strive to prioritize problem-solving in my approach to programming.
      </motion.p>
      <motion.p
        variants={fadeIn(',',0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Alongside technical proficiency, I have also cultivated various soft skills such as effective communication, meticulous documentation, attention to detail, customer service, system management, and teamwork. These competencies are valuable assets that enable me to work collaboratively and deliver exceptional results.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            index={index} 
            {...service} 
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,'about')