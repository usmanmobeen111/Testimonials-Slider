import React from 'react'
import testimonials from '../data/testimonials.js'
import TestimonialCard from './TestimonialCard.jsx'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const TestimonialSlider = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center px-4'>
      <div className="w-full mx-10">
        <Swiper
          modules={[ Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TestimonialSlider
