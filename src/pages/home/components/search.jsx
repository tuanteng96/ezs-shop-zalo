import React from "react";
import { Icon, Text } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Search = ({ scrollTop }) => {
  return (
    <div
      className="navbar fixed top-0 left-0 min-w-[100vw] max-w-[100vw] z-[999] transition px-3"
      style={{
        background: `rgba(255,255,255,${
          scrollTop <= 100 ? scrollTop / 100 : scrollTop
        })`,
      }}
    >
      <div className="bg-[#f4f4f4] h-10 rounded-sm w-2/3 relative flex items-center">
        <div className="w-10 text-center">
          <Icon className="text-[#a1a5b7]" icon="zi-search" />
        </div>
        <div className="h-full">
          <Swiper
            className="h-full"
            direction="vertical"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide className="flex items-center">
              <Text className="text-[#ee4d2d]" size="small">
                Bàn Pi A
              </Text>
            </SwiperSlide>
            <SwiperSlide className="flex items-center">
              <Text className="text-[#ee4d2d]" size="small">
                Túi sách cho mẹ
              </Text>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export { Search };
