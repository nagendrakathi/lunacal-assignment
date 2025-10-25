import React from "react";
import RightTop from "./right-top";
import RightBottom from "./right-bottom";

export default function Right() {
  return (
    <div className="relative flex h-full w-full flex-col gap-4 lg:w-1/2 ">
      <RightTop />
      <svg
        className="mx-auto h-10 w-10/12"
        viewBox="0 0 620 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <g filter="url(#filter0_d)">
          <rect
            x="4"
            y="0"
            width="612"
            height="4"
            rx="2"
            fill="url(#paint0_linear)"
            fillOpacity="0.1"
            shapeRendering="crispEdges"
          />
          <rect
            x="4"
            y="0"
            width="612"
            height="4"
            rx="2"
            fill="white"
            fillOpacity="0.05"
            shapeRendering="crispEdges"
          />
        </g>

        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="620"
            height="16"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>

          <linearGradient
            id="paint0_linear"
            x1="310"
            y1="0"
            x2="310"
            y2="4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#282828" />
            <stop offset="1" stopColor="#F8F8F8" />
          </linearGradient>
        </defs>
      </svg>

      <RightBottom />
      <svg
        className="absolute mx-auto h-4 w-10/12 -bottom-7 ml-15"
        viewBox="0 0 620 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <g filter="url(#filter0_d)">
          <rect
            x="4"
            y="0"
            width="612"
            height="4"
            rx="2"
            fill="url(#paint0_linear)"
            fillOpacity="0.1"
            shapeRendering="crispEdges"
          />
          <rect
            x="4"
            y="0"
            width="612"
            height="4"
            rx="2"
            fill="white"
            fillOpacity="0.05"
            shapeRendering="crispEdges"
          />
        </g>

        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="620"
            height="16"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>

          <linearGradient
            id="paint0_linear"
            x1="310"
            y1="0"
            x2="310"
            y2="4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#282828" />
            <stop offset="1" stopColor="#F8F8F8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
