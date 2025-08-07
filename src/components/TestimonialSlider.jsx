import React from 'react'
import testimonials from '../data/testimonials.js'
import TestimonialCard from './TestimonialCard.jsx'

const TestimonialSlider = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20'>
      {testimonials.map((testimonial=>(
        <TestimonialCard key={testimonial.id} {...testimonial}/>
      )))}
    </div>
  )
}

export default TestimonialSlider
