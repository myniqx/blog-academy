"use client"
import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import { Box, Progress } from '@chakra-ui/react'
import { SliderPage } from './SliderPage'
import blogs from "@/constants/blogs/blogs.json"
import { web } from '@/constants/web'

const CarouselWithProgress = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const sliderRef = useRef<Slider>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0))
    }, 50) // 5 saniyede bir slide değişimi

    if (progress === 100) {
      sliderRef.current?.slickNext()
      setProgress(0)
    }

    return () => clearInterval(interval)
  }, [progress])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    beforeChange: (_: any, next: React.SetStateAction<number>) => setCurrentSlide(next),
    afterChange: () => setProgress(0),
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      sliderRef.current?.slickPrev()
    } else {
      sliderRef.current?.slickNext()
    }
  }


  const sliders = blogs.map((blog) => ({
    title: blog.title,
    img: `images/blog/${blog.slug}.jpg`,
    link: `/blogs/${blog.slug}`,
  }))

  return (
    <Box
      w={"100%"}
      h={`calc(96vh - ${web.headerHeight})`}
    >
      <Slider ref={sliderRef} {...settings}>
        {sliders.map((slider, index) => (
          <SliderPage
            key={index}
            title={slider.title}
            progress={progress}
            img={slider.img}
            link={slider.link}
          />
        ))}
      </Slider>
    </Box>
  )
}

export default CarouselWithProgress
