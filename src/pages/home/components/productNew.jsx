import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Box } from "zmp-ui";

const ProductsNew = () => {
  return (
    <div className="bg-white mb-2.5">
      <div className="p-3 font-semibold text-app">
        Có gì <span className="uppercase font-cherry text-xl">Mới ?</span>
      </div>
      <div className="px-3">
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
            <img src="https://lzd-img-global.slatic.net/g/ot/homepage/016e5812ffa75b9030a2ca4c6c0cb657.jpeg_720x720q80.jpg_.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://lzd-img-global.slatic.net/g/ot/homepage/6df69399556e9dea7989ad8634df5b48.jpeg_720x720q80.jpg_.webp" />
          </SwiperSlide>
        </Swiper>
        <div className="py-3">
          <Swiper
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
          >
            <SwiperSlide style={{ width: window.innerWidth / 3 - 6 + 'px' }}>
              <div className="bg-white border border-separator">
                <div>
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/f0/10/b7/4fb2f1c5897edaee0d08534f97bbadb9.jpg.webp" />
                </div>
                <div className="p-2">
                  <div className="line-clamp-2 text-xs leading-4 mb-2">
                    Gấu Bông Khủng Long Hóa Ếch Xanh, Gối Ôm Cho Bé Chất Liệu Cao
                    Cấp, Mềm Mại Dài 52Cm.
                  </div>
                  <div className="text-danger font-semibold text-sm">1.488.000đ</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: window.innerWidth / 3 - 6 + 'px' }}>
              <div className="bg-white border border-separator">
                <div>
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/96/63/46/ddc0e939450d1b4ef986386046bbd71e.jpg.webp" />
                </div>
                <div className="p-2">
                  <div className="line-clamp-2 text-xs leading-4 mb-2">
                    Camera WIFI Trông trẻ EZVIZ BM1 2MP dùng PIN Sạc, đàm thoại 2 chiều, tự động bật nhạc khi Baby khóc - hàng chính hãng
                  </div>
                  <div className="text-danger font-semibold text-sm">1.392.000đ</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: window.innerWidth / 3 - 6 + 'px' }}>
              <div className="bg-white border border-separator">
                <div>
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/20/fd/1c/9f6a4c5e795c3878bfbd2cae11f5b645.PNG.webp" />
                </div>
                <div className="p-2">
                  <div className="line-clamp-2 text-xs leading-4 mb-2">
                    Sách Tương Tác - Big Book - Cuốn Sách Khổng Lồ – Đinh Tị (Nhiều chủ đề)
                  </div>
                  <div className="text-danger font-semibold text-sm">151.000đ</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: window.innerWidth / 3 - 6 + 'px' }}>
              <div className="bg-white border border-separator">
                <div>
                  <img src="https://salt.tikicdn.com/cache/280x280/ts/product/17/30/4d/230e6a4edb8188a4b4f8060ad166f905.jpg.webp" />
                </div>
                <div className="p-2">
                  <div className="line-clamp-2 text-xs leading-4 mb-2">
                    Combo Camera WiFi TP-Link Tapo C200 2MP và Thẻ Nhớ MicroSD Kioxia/Dahua 32Gb/64Gb/128Gb - Hàng Chính Hãng
                  </div>
                  <div className="text-danger font-semibold text-sm">629.000đ</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export { ProductsNew }