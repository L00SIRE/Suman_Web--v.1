import React, { useEffect, useRef } from 'react'
import './StarsBackground.css'

const StarsBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const numberOfStars = 200

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      
      const clusterChance = Math.random()
      let x, y
      
      if (clusterChance < 0.3) {
        const clusterX = Math.random() * 100
        const clusterY = Math.random() * 100
        x = clusterX + (Math.random() - 0.5) * 20
        y = clusterY + (Math.random() - 0.5) * 20
      } else {
        x = Math.random() * 100
        y = Math.random() * 100
      }
      
      star.style.left = Math.max(0, Math.min(100, x)) + '%'
      star.style.top = Math.max(0, Math.min(100, y)) + '%'
      
      const size = Math.random() * 4 + 0.5
      star.style.width = size + 'px'
      star.style.height = size + 'px'
      star.style.animationDelay = Math.random() * 4 + 's'
      star.style.animationDuration = (Math.random() * 4 + 2) + 's'
      star.style.boxShadow = `0 0 ${size * 2}px currentColor`
      
      container.appendChild(star)
    }

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return <div className="stars-container" ref={containerRef}></div>
}

export default StarsBackground

