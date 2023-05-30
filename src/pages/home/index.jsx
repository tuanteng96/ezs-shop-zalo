import React, { useEffect, useState } from "react";
import { List, Page, Icon, useNavigate, BottomNavigation, Box } from "zmp-ui";
import { Profile } from "./components/Profile";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import { configAppView } from "zmp-sdk";

const HomePage = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    configAppView({
      headerTextColor: scrollTop > 0 ? "black" : "white",
      success: (res) => {
        // xử lý khi gọi api thành công
      },
      fail: (error) => {
        // xử lý khi gọi api thất bại
        console.log(error);
      },
    });
  }, [scrollTop])

  const handleScroll = event => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  return (
    <Page className="page !pt-0" hideScrollbar onScroll={handleScroll}>
      <div className={clsx('navbar fixed top-0 left-0 min-w-[100vw] max-w-[100vw] z-[999] transition', scrollTop > 0 ? 'bg-white' : 'text-white')}>
        <Profile scrollTop={scrollTop} />
      </div>
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
              <img src="https://dermaclear.qodeinteractive.com/wp-content/uploads/2021/10/Main-home-img-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dermaclear.qodeinteractive.com/wp-content/uploads/2021/10/bl-img15.jpg" />
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