import React from "react";
import Video from "../assets/production_ID_4167404.mp4";

function Hero() {
  return (
    // gap-8: 每行每列的間距
    // relative: 用於定義背景圓形的位置
    // pb-28: padding-bottom: 28px;
    <div className="grid justify-items-center gap-8 pb-28 relative">
      {/* sm, md, xl... 在比較寬的屏幕解析度下使用不同的樣式*/}
      <p className="text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal">
        打造一個完美的、現象級的、充滿創造力的網站
      </p>
      <p className="text-xl text-gray-700 md:w-1/2 text-center">
        這是一個完美的工具這是一個完美的工具這是一個完美的工具這是一個完美的工具這是一個完美的工具這是一個完美的工具
      </p>
      <div>
        <button className="rounded bg-blue-500 text-base text-white py-3 px-8">
          立即試用
        </button>
        <button className="rounded bg-gray-900 text-base text-white py-3 px-8 ml-3">
          了解更多
        </button>
      </div>
      <div className="relative w-full">
        <svg
          width="256"
          height="256"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 -z-10"
        >
          <circle cx="128" cy="128" r="128" fill="url(#paint0_linear_0_22)" />
          <defs>
            <linearGradient
              id="paint0_linear_0_22"
              x1="0"
              y1="0"
              x2="0"
              y2="256"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.774017" stop-color="#EAEAEA" />
              <stop offset="1" stop-color="#DFDFDF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative grid justify-items-center">
        {/* 使用 [] 可以自定義 */}
        {/* object-cover: 當寬度不足的時候, 影片自動進行拉伸, 且拉伸不會變形 (等比例縮放) */}
        {/* object-top: 縮放時以頂部為基準, 顯示頂部, 擷取下方超出部分 */}
        <video
          src={Video}
          controls
          className="w-[768px] h-[432px] object-cover object-top rounded"
        ></video>
        <div className="flex absolute rounded-full bg-white -bottom-7 px-5 py-4 drop-shadow-xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <circle cx="12" cy="12" r="11" stroke="#999999" stroke-width="2" />
            <path d="M10 17L16 12L10 7V17Z" fill="#999999" />
          </svg>
          查看2分鐘演示影片
        </div>
      </div>
      <svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 md:bottom-20 -left-10 -z-10"
      >
        <circle cx="64" cy="64" r="64" fill="url(#paint0_linear_0_23)" />
        <defs>
          <linearGradient
            id="paint0_linear_0_23"
            x1="0"
            y1="0"
            x2="0"
            y2="128"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.774017" stop-color="#EAEAEA" />
            <stop offset="1" stop-color="#DFDFDF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Hero;
