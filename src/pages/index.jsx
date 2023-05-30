import React from "react";
import { List, Page, Icon, useNavigate, BottomNavigation } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";

import UserCard from "../components/user-card";

const HomePage = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  return (
    <Page className="page" hideScrollbar>
      <div className="navbar fixed top-0 left-0 min-w-[100vw] max-w-[100vw] bg-white z-[999]">
        EZS SHOP
      </div>
      <div className="py-5">
        <div className="section-container">
          <UserCard user={user} />
        </div>
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
              .map((_) => (
                <List.Item suffix={<Icon icon="zi-arrow-right" />}>
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
