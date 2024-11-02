import React from 'react'
import Bio from './Bio'
import Skills from './Skills'
import Experience from './Experience'
import Certification from './Certification'

const About = () => {
  return (
    <>
    <div name="About">
    <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-6">About</h1>
    <Bio />
    <Skills />
    <Experience />
    <Certification />
    </div>
    </>
  )
}

export default About