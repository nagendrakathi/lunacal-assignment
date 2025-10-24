import Image from "next/image";
import React from "react";

export default function RightBottom() {
  return (
    <div className="relative -mt-3 h-full w-full rounded-3xl bg-[#363C43] px-10 py-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
      <div className="mx-auto ml-3 flex flex-row justify-between gap-2 rounded-2xl">
        <button className="rounded-2xl bg-[#171717] px-6 py-3 text-white">
          Gallery
        </button>
        <div className="flex items-center justify-center">
          <button className="shadow-[0_4px_30px_rgba(255, 255, 255, 0.1)] relative flex items-center gap-1 rounded-full bg-white/5 px-5 py-3 text-[12px] font-medium tracking-wide text-white shadow-2xl backdrop-blur-2xl">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.01166 8.81662C4.01064 9.01713 4.08931 9.20984 4.23037 9.35235C4.37143 9.49486 4.56333 9.57549 4.76384 9.57651C4.96436 9.57753 5.15706 9.49886 5.29957 9.3578C5.44208 9.21674 5.52271 9.02484 5.52374 8.82433L5.54044 5.54816L8.8166 5.56486C9.01712 5.56588 9.20982 5.48721 9.35233 5.34615C9.49484 5.20509 9.57547 5.01319 9.57649 4.81268C9.57752 4.61216 9.49884 4.41945 9.35778 4.27695C9.21672 4.13444 9.02482 4.05381 8.82431 4.05278L5.54814 4.03608L5.56484 0.759916C5.56587 0.559403 5.48719 0.366695 5.34613 0.224188C5.20507 0.0816803 5.01317 0.00104616 4.81266 2.40593e-05C4.61214 -0.000998039 4.41944 0.0776756 4.27693 0.218738C4.13442 0.3598 4.05379 0.551695 4.05277 0.752209L4.03607 4.02838L0.759899 4.01168C0.559385 4.01065 0.366678 4.08933 0.22417 4.23039C0.0816627 4.37145 0.00102856 4.56335 6.45832e-06 4.76386C-0.00101564 4.96437 0.077658 5.15708 0.21872 5.29959C0.359782 5.4421 0.551677 5.52273 0.752191 5.52375L4.02836 5.54045L4.01166 8.81662Z"
                fill="white"
              />
            </svg>
            ADD IMAGE
          </button>
          <div className="ml-4 flex flex-row items-center gap-2">
            <button className="cursor-pointer rounded-full bg-linear-to-r from-[#23262a] to-[#161718] p-3">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                className="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.96422L15.1943 8.03658"
                  stroke="#6F787C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.96419 14.9998L0.999963 7.96423L8.03555 1.00001"
                  stroke="#6F787C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="cursor-pointer rounded-full bg-linear-to-r from-[#23262a] to-[#161718] p-3">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                className="h-3 w-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1942 8.0356L0.999954 7.96324"
                  stroke="#6F787C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.23002 0.999992L15.1943 8.03558L8.15866 14.9998"
                  stroke="#6F787C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 ml-3 flex flex-row gap-4">
        <Image
          src={"/image.png"}
          alt="image"
          width={100}
          height={100}
          className="h-full flex-1 rounded-4xl saturate-0 filter transition-all duration-500 hover:scale-110 hover:-rotate-2 hover:saturate-100"
        />
        <Image
          src={"/image.png"}
          alt="image"
          width={100}
          height={100}
          className="h-full flex-1 rounded-4xl saturate-0 filter transition-all duration-500 hover:scale-110 hover:-rotate-2 hover:saturate-100"
        />
        <Image
          src={"/image.png"}
          alt="image"
          width={100}
          height={100}
          className="h-full flex-1 rounded-4xl saturate-0 filter transition-all duration-500 hover:scale-110 hover:-rotate-2 hover:saturate-100"
        />
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-5 left-3"
      >
        <path
          d="M13.354 18.007C13.3526 18.2808 13.2701 18.5481 13.1168 18.775C12.9635 19.0019 12.7463 19.1783 12.4928 19.2818C12.2392 19.3853 11.9607 19.4113 11.6924 19.3565C11.4241 19.3017 11.178 19.1686 10.9854 18.974C10.7927 18.7794 10.6621 18.532 10.6101 18.2631C10.558 17.9943 10.5868 17.716 10.6929 17.4635C10.799 17.2111 10.9776 16.9957 11.2061 16.8447C11.4345 16.6938 11.7026 16.6139 11.9765 16.6153C12.3437 16.6172 12.6951 16.7649 12.9535 17.0259C13.2118 17.2868 13.3559 17.6398 13.354 18.007ZM12.033 5.53854C9.4876 5.52557 7.40813 7.37845 7.39646 9.66881L7.39411 10.1303C7.39286 10.3752 7.48891 10.6104 7.66114 10.7844C7.83336 10.9584 8.06765 11.0569 8.31247 11.0581C8.55728 11.0594 8.79256 10.9633 8.96655 10.7911C9.14054 10.6189 9.23899 10.3846 9.24024 10.1398L9.24259 9.67822C9.24906 8.40901 10.497 7.37689 12.0235 7.38467C13.5501 7.39246 14.7874 8.43724 14.781 9.70645C14.7745 10.9757 13.5265 12.0078 12 12C11.7552 11.9988 11.5199 12.0948 11.3459 12.267C11.1719 12.4393 11.0735 12.6735 11.0722 12.9184L11.0675 13.8414C11.0663 14.0862 11.1624 14.3215 11.3346 14.4955C11.5068 14.6695 11.7411 14.7679 11.9859 14.7692C12.2307 14.7704 12.466 14.6744 12.64 14.5022C12.814 14.3299 12.9124 14.0956 12.9137 13.8508L12.9141 13.7678C15.0207 13.392 16.6169 11.7212 16.6271 9.71586C16.6388 7.42551 14.5783 5.55152 12.033 5.53854ZM23.9999 12.0612C23.9878 14.4345 23.2722 16.751 21.9435 18.7176C20.6149 20.6843 18.733 22.2128 16.5356 23.1098C14.3383 24.0069 11.9244 24.2322 9.59897 23.7573C7.27359 23.2825 5.14125 22.1287 3.4716 20.4419C1.80194 18.7552 0.669969 16.6112 0.218818 14.2811C-0.232333 11.951 0.0176027 9.5394 0.937019 7.35134C1.85644 5.16329 3.40404 3.29701 5.38412 1.98851C7.36421 0.68001 9.68784 -0.0119421 12.0612 0.000155775C15.2427 0.019733 18.2865 1.30063 20.5247 3.56177C22.7629 5.82292 24.0127 8.87962 23.9999 12.0612ZM22.1537 12.0518C22.164 10.0435 21.5785 8.07739 20.4713 6.40193C19.3641 4.72648 17.7849 3.41697 15.9335 2.639C14.0821 1.86103 12.0415 1.64955 10.0699 2.03129C8.09827 2.41303 6.28412 3.37086 4.85686 4.78364C3.4296 6.19642 2.45333 8.00071 2.05151 9.96834C1.64968 11.936 1.84035 13.9786 2.59941 15.8378C3.35846 17.6971 4.6518 19.2895 6.31588 20.4137C7.97997 21.538 9.94005 22.1435 11.9483 22.1537C14.6403 22.1644 17.2266 21.1068 19.1398 19.213C21.0531 17.3191 22.137 14.7437 22.1537 12.0518Z"
          fill="url(#paint0_linear_1_107)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_107"
            x1="19.4209"
            y1="27.538"
            x2="3.5511"
            y2="1.9568"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A4E54" />
            <stop offset="1" stopColor="#A3ADBA" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="25"
        height="31"
        viewBox="0 0 25 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-3"
      >
        <rect
          x="0.156433"
          width="9.31217"
          height="9.31217"
          rx="1.16402"
          transform="rotate(0.292057 0.156433 0)"
          fill="#4A4E54"
        />
        <rect
          x="10.8441"
          y="0.0544739"
          width="9.31217"
          height="9.31217"
          rx="1.16402"
          transform="rotate(0.292057 10.8441 0.0544739)"
          fill="#4A4E54"
        />
        <rect
          x="0.101929"
          y="10.6877"
          width="9.31217"
          height="9.31217"
          rx="1.16402"
          transform="rotate(0.292057 0.101929 10.6877)"
          fill="#4A4E54"
        />
        <rect
          x="10.7897"
          y="10.7422"
          width="9.31217"
          height="9.31217"
          rx="1.16402"
          transform="rotate(0.292057 10.7897 10.7422)"
          fill="#4A4E54"
        />
        <rect
          x="0.0474854"
          y="21.3754"
          width="9.31217"
          height="9.31217"
          rx="1.16402"
          transform="rotate(0.292057 0.0474854 21.3754)"
          fill="#4A4E54"
        />
        <rect
          x="10.7352"
          y="21.4299"
          width="9.31217"
          height="9.31217"
          rx="1.16402"
          transform="rotate(0.292057 10.7352 21.4299)"
          fill="#4A4E54"
        />
      </svg>
    </div>
  );
}
