import React from "react";
import { Box } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const Banner = () => {
  return (
    <Box className="bg-white">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img src="https://cf.shopee.vn/file/vn-50009109-f18d5805608306b58f54c4023d072b95" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cf.shopee.vn/file/vn-50009109-a39d31fcc8afb5e7b3244fd02a2a629d" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cf.shopee.vn/file/vn-50009109-8a3c849737443859296e6ffdb15b3702" />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export { Banner }