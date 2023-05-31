import React, { useEffect, useState } from "react";
import { List, Page, Icon, useNavigate, BottomNavigation, Box, Text } from "zmp-ui";

import { configAppView } from "zmp-sdk";
import { Search } from "./components/search";
import { Banner } from "./components/banner";
import { Category } from "./components/category";
import { Sales } from "./components/sales";
import { Products } from "./components/products";

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
      <Banner />
      <Category />
      <div className="px-1 bg-white">
        <img src="https://cf.shopee.vn/file/sg-50009109-cc368950f2bb0d57e2dd1404cdfc6928" />
      </div>
      <Sales />
      <Products />
      <BottomNavigation fixed onChange={(key) => console.log(key)}>
        <BottomNavigation.Item
          key="chat"
          label="Trang chủ"
          icon={<Icon icon="zi-home" />}
          activeIcon={<Icon icon="zi-home" />}
          linkTo="/"
        />
        <BottomNavigation.Item
          label="Danh mục"
          key="discovery"
          icon={<Icon icon="zi-more-grid" />}
          activeIcon={<Icon icon="zi-more-grid-solid" />}
        />
        <BottomNavigation.Item
          key="timeline"
          label="Thông báo"
          icon={<Icon icon="zi-notif" />}
          activeIcon={<Icon icon="zi-notif-solid" />}
          linkTo="/form"
        />
        <BottomNavigation.Item
          label="Liên hệ"
          key="contact"
          icon={<Icon icon="zi-chat" />}
          activeIcon={<Icon icon="zi-chat" />}
          linkTo="/about"
        />
        <BottomNavigation.Item
          key="me"
          label="Tài khoản"
          icon={<Icon icon="zi-user" />}
          activeIcon={<Icon icon="zi-user-solid" />}
          linkTo="/user"
        />
      </BottomNavigation>
    </Page>
  );
};

export default HomePage;
