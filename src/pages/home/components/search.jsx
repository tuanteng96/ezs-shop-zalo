import React from "react";
import { Icon, Text } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import clsx from "clsx";

const Search = ({ scrollTop }) => {
  return (
    <div
      className={clsx("navbar fixed top-0 left-0 min-w-[100vw] max-w-[100vw] z-[999] transition px-3", scrollTop > 50 && "shadow-3xl")}
      style={{
        background: `rgba(255,255,255,${scrollTop <= 100 ? scrollTop / 100 : scrollTop
          })`,
      }}
    >
      <div className="bg-[#f4f4f4] h-10 rounded-sm w-2/3 relative flex items-center">
        <div className="w-10 text-center">
          <Icon className="text-muted" icon="zi-search" />
        </div>
        <div className="h-full pl-1.5">
          <Swiper
            className="h-full"
            direction="vertical"
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide className="flex items-center">
              <Text className="text-app" size="small">
                Bàn Pi A
              </Text>
            </SwiperSlide>
            <SwiperSlide className="flex items-center">
              <Text className="text-app" size="small">
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
