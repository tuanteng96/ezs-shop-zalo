import React from "react";

const Products = () => {
  return (
    <>
      <div className="p-3 uppercase font-semibold bg-white text-app">
        Gợi ý hôm nay
      </div>
      <div className="p-1.5 grid grid-cols-2 gap-1.5">
        {Array(20)
          .fill()
          .map((_, index) => (
            <div className="bg-white" key={index}>
              <div>
                <img src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgb0gln7onsa97_tn" />
              </div>
              <div className="p-2">
                <div className="line-clamp-2 text-xs leading-4 mb-2">
                  Gấu Bông Khủng Long Hóa Ếch Xanh, Gối Ôm Cho Bé Chất Liệu Cao
                  Cấp, Mềm Mại Dài 52Cm.
                </div>
                <div className="text-danger font-semibold text-sm">45.000đ</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export { Products };
