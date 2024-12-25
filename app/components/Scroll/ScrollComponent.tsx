'use client'

import React, { ReactNode, useRef, useState, MouseEvent, TouchEvent } from 'react'

interface ScrollComponentProps {
  children: ReactNode[]
  className?: string
  direction?: 'vertical' | 'horizontal'
}

export default function ScrollComponent({ 
  children, 
  className = '',
  direction = 'vertical'
}: ScrollComponentProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true)
    if (direction === 'vertical') {
      setStartY(e.pageY - (scrollRef.current?.offsetTop || 0))
      setScrollTop(scrollRef.current?.scrollTop || 0)
    } else {
      setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
      setScrollLeft(scrollRef.current?.scrollLeft || 0)
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    
    e.preventDefault()
    if (direction === 'vertical') {
      const y = e.pageY - (scrollRef.current?.offsetTop || 0)
      const walk = (y - startY) * 2
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollTop - walk
      }
    } else {
      const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
      const walk = (x - startX) * 2
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = scrollLeft - walk
      }
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0]
    setIsDragging(true)
    if (direction === 'vertical') {
      setStartY(touch.pageY - (scrollRef.current?.offsetTop || 0))
      setScrollTop(scrollRef.current?.scrollTop || 0)
    } else {
      setStartX(touch.pageX - (scrollRef.current?.offsetLeft || 0))
      setScrollLeft(scrollRef.current?.scrollLeft || 0)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    
    const touch = e.touches[0]
    if (direction === 'vertical') {
      const y = touch.pageY - (scrollRef.current?.offsetTop || 0)
      const walk = (y - startY) * 2
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollTop - walk
      }
    } else {
      const x = touch.pageX - (scrollRef.current?.offsetLeft || 0)
      const walk = (x - startX) * 2
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = scrollLeft - walk
      }
    }
  }

  return (
    <div 
      ref={scrollRef}
      className={`
        w-full h-full 
        ${direction === 'vertical' ? 'overflow-y-auto overflow-x-hidden' : 'overflow-x-auto overflow-y-hidden'}
        cursor-grab select-none 
        ${isDragging ? 'cursor-grabbing' : ''} 
        ${className}
      `}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style jsx global>{`
        .${className}::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {children}
    </div>
  )
}