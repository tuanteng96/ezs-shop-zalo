import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { getUserInfo } from "zmp-sdk";
import { Text } from "zmp-ui";

const Profile = ({ scrollTop }) => {
  const [Info, setInfo] = useState(null);

  useEffect(() => {
    getUserInfo({
      success: ({ userInfo }) => {
        setInfo(userInfo);
      },
      fail: (error) => {
        // xử lý khi gọi api thất bại
        console.log(error);
      },
    });
  }, []);

  return (
    <div className="flex items-end px-4">
      <div>
        <img
          className="w-11 h-11 rounded-full border-inset"
          src={Info?.avatar}
          alt={Info?.name}
        />
      </div>
      <div className="pl-2">
        <Text
          size="xxSmall"
          className={clsx(scrollTop > 0 ? "text-gray" : "text-white")}
        >
          Welcome,
        </Text>
        <Text.Title size="small">{Info?.name}</Text.Title>
      </div>
    </div>
  );
};

export { Profile };
