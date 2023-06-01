import React from "react";
import { Box } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";

const Sales = () => {
  return (
    <div className="my-2.5 px-3 py-3.5" style={{ backgroundImage: 'linear-gradient(to right, rgb(238, 108, 14), rgb(255, 198, 0))', backgroundSize: 'contain' }}>
      <div className="text-white mb-1.5"><span className="font-cherry uppercase text-2xl">Sale</span> <span className="font-semibold">hôm nay ?</span></div>
      <Box>
        <Swiper
          spaceBetween={10}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
        >
          <SwiperSlide style={{ width: window.innerWidth / 3 - 6 + 'px' }}>
            <div className="bg-white rounded-md overflow-hidden">
              <div className="relative">
                <img src="https://media3.scdn.vn/img3/2019/11_3/VWDiUy_simg_de2fe0_350x350_maxb.jpg" />
                <div className="absolute -bottom-1 left-0">
                  <img className="w-14" src="https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png" />
                </div>
              </div>
              <div className="px-2 pb-2 pt-4">
                <div className="text-danger font-bold leading-3">69.000đ</div>
                <div>
                  <span className="text-muted text-xs line-through">89.000đ</span>
                  <span className="text-danger text-xs pl-2 font-semibold">-23%</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: window.innerWidth / 3 - 6 + 'px' }}>
            <div className="bg-white rounded-md overflow-hidden">
              <div className="relative">
                <img src="https://media3.scdn.vn/img4/2022/08_31/lpCykNvn3qr3I69x5R9b_simg_de2fe0_250x250_maxb.jpg" />
                <div className="absolute -bottom-1 left-0">
                  <img className="w-14" src="https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png" />
                </div>
              </div>
              <div className="px-2 pb-2 pt-4">
                <div className="text-danger font-bold leading-3">79.000đ</div>
                <div>
                  <span className="text-muted text-xs line-through">135.000đ</span>
                  <span className="text-danger text-xs pl-2 font-semibold">-42%</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: window.innerWidth / 3 - 6 + 'px' }}>
            <div className="bg-white rounded-md overflow-hidden">
              <div className="relative">
                <img src="https://media3.scdn.vn/img4/2020/05_21/ACSHj7GvulDDDqGc5jNG_simg_de2fe0_250x250_maxb.jpg" />
                <div className="absolute -bottom-1 left-0">
                  <img className="w-14" src="https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png" />
                </div>
              </div>
              <div className="px-2 pb-2 pt-4">
                <div className="text-danger font-bold leading-3">84.000đ</div>
                <div>
                  <span className="text-muted text-xs line-through">109.000đ</span>
                  <span className="text-danger text-xs pl-2 font-semibold">-23%</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: window.innerWidth / 3 - 6 + 'px' }}>
            <div className="bg-white rounded-md overflow-hidden">
              <div className="relative">
                <img src="https://media3.scdn.vn/img3/2019/11_3/VWDiUy_simg_de2fe0_350x350_maxb.jpg" />
                <div className="absolute -bottom-1 left-0">
                  <img className="w-14" src="https://media3.scdn.vn/img4/2021/04_16/BNnRsHfKT5xoQ7UKGWto.png" />
                </div>
              </div>
              <div className="px-2 pb-2 pt-4">
                <div className="text-danger font-bold leading-3">69.000đ</div>
                <div>
                  <span className="text-muted text-xs line-through">89.000đ</span>
                  <span className="text-danger text-xs pl-2 font-semibold">-23%</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Box>
    </div>
  )
}

export { Sales }