"use client";
import { Box, Heading } from "@chakra-ui/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Skills = () => {
  return (
    <Box>
      <Heading
        color="primary.900"
        textDecoration="underline"
        textUnderlineOffset={5}
        textDecorationColor="accent.900"
        textDecorationThickness="4px"
        mb={4}
        size="lg"
      >
        My Strengths
      </Heading>
      <Swiper
        slidesPerView={3}
        modules={[Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay
      >
        <SwiperSlide>
          <Heading color={"black"}>Slide</Heading>
        </SwiperSlide>
        <SwiperSlide>
          <Heading color={"black"}>Slide</Heading>
        </SwiperSlide>
        <SwiperSlide>
          <Heading color={"black"}>Slide</Heading>
        </SwiperSlide>
        <SwiperSlide>
          <Heading color={"black"}>Slide</Heading>
        </SwiperSlide>
        <SwiperSlide>
          <Heading color={"black"}>Slide</Heading>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
