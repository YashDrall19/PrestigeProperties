import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/ImageSlider.css'

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const autoPlayTimer = useRef(null)

  // Auto-play effect
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayTimer.current = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 4000) // Change image every 4 seconds
    }

    startAutoPlay()

    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current)
      }
    }
  }, [images.length])

  // Handle swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - next image
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % images.length)
      } else {
        // Swiped right - previous image
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
      }

      // Reset auto-play timer on manual swipe
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current)
      }
      autoPlayTimer.current = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 4000)
    }
  }

  // Use opacity transitions only; CSS handles the slow zoom-in effect
  const slideVariants = {
    enter: () => ({
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
    },
    exit: () => ({
      zIndex: 0,
      opacity: 0,
    }),
  }

  return (
    <div
      className="image-slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ opacity: { duration: 0.6 } }}
          className="slider-image"
        />
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
