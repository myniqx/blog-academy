"use client"
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Box, Progress } from '@chakra-ui/react';

const CarouselWithProgress = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, 50); // 5 saniyede bir slide değişimi

    if (progress === 100) {
      sliderRef.current?.slickNext();
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [progress]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: any, next: React.SetStateAction<number>) => setCurrentSlide(next),
    afterChange: () => setProgress(0),
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      sliderRef.current?.slickPrev();
    } else {
      sliderRef.current?.slickNext();
    }
  };

  return (
    <Box onWheel={handleWheel} w={"100%"} minH={"300px"}>
      <Slider ref={sliderRef} {...settings}>
        <Box bg="tomato" h="300px" display="flex" alignItems="center" justifyContent="center">
          Slide 1
        </Box>
        <Box bg="green" h="300px" display="flex" alignItems="center" justifyContent="center">
          Slide 2
        </Box>
        <Box bg="blue" h="300px" display="flex" alignItems="center" justifyContent="center">
          Slide 3
        </Box>
      </Slider>
      <Progress value={progress} size="xs" mt={2} />
    </Box>
  );
};

export default CarouselWithProgress;
