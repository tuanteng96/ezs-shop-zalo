import React, { useEffect, useState } from "react";
import { List, Page, Icon, useNavigate, BottomNavigation, Box } from "zmp-ui";
import { Search } from "./components/search";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { configAppView } from "zmp-sdk";

const HomePage = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    configAppView({
      headerTextColor: scrollTop > 0 ? "black" : "white",
    });
  }, [scrollTop]);

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  return (
    <Page className="page !pt-0" hideScrollbar onScroll={handleScroll}>
      <Search scrollTop={scrollTop} />
      <div>
        <Box className="bg-white" pb={4}>
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            autoplay
            loop
            cssMode
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
      </div>
      <div>
        <div className="section-container">
          <List>
            <List.Item suffix={<Icon icon="zi-arrow-right" />}>
              <div onClick={() => navigate("/about")}>About</div>
            </List.Item>
            <List.Item suffix={<Icon icon="zi-arrow-right" />}>
              <div onClick={() => navigate("/user")}>User</div>
            </List.Item>
            {Array(10)
              .fill()
              .map((_, index) => (
                <List.Item suffix={<Icon icon="zi-arrow-right" />} key={index}>
                  <div onClick={() => navigate("/user")}>User</div>
                </List.Item>
              ))}
          </List>
        </div>
      </div>
      <BottomNavigation fixed onChange={(key) => console.log(key)}>
        <BottomNavigation.Item
          key="chat"
          label="Tin Nhắn"
          icon={<Icon icon="zi-chat" />}
          activeIcon={<Icon icon="zi-chat-solid" />}
          linkTo="/"
        />
        <BottomNavigation.Item
          label="Danh bạ"
          key="contact"
          icon={<Icon icon="zi-call" />}
          activeIcon={<Icon icon="zi-call-solid" />}
          linkTo="/about"
        />
        <BottomNavigation.Item
          label="Khám phá"
          key="discovery"
          icon={<Icon icon="zi-more-grid" />}
          activeIcon={<Icon icon="zi-more-grid-solid" />}
        />
        <BottomNavigation.Item
          key="timeline"
          label="Nhật ký"
          icon={<Icon icon="zi-clock-1" />}
          activeIcon={<Icon icon="zi-clock-1-solid" />}
          linkTo="/form"
        />
        <BottomNavigation.Item
          key="me"
          label="Cá nhân"
          icon={<Icon icon="zi-user" />}
          activeIcon={<Icon icon="zi-user-solid" />}
          linkTo="/user"
        />
      </BottomNavigation>
    </Page>
  );
};

export default HomePage;
