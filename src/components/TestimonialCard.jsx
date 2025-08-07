import React from 'react'
import { BiSolidQuoteRight } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'

const TestimonialCard = ({ id, name, role, company, avatar, quote, rating }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden relative m-4">
      
      {/* Quote + Rating Section */}
      <div className="p-6">
        <BiSolidQuoteRight className="text-gray-500 text-2xl mb-2" />
        <p className="text-gray-700 text-sm mb-4">{quote}</p>

        {/* Stars */}
        <div className="flex items-center mb-2">
          {[...Array(rating)].map((_, index) => (
            <FaStar key={index} className="text-yellow-500 mx-0.5" />
          ))}
          {[...Array(5 - rating)].map((_, index) => (
            <FaStar key={index} className="text-gray-300 mx-0.5" />
          ))}
        </div>
      </div>

      {/* Avatar */}
      <div className="absolute left-1/2 transform -translate-x-1/2  z-10">
        <img
          src={avatar}
          alt="Avatar"
          className="w-20 h-20 rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* Gradient Footer */}
      <div className="mt-10 pt-10 pb-4 text-center bg-gradient-to-r from-primary to-secondary text-white">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm opacity-90">{role} · {company}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
