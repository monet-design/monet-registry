"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#00B9FF",
    accentLight: "#75DBFF",
    promoBg: "#FF00FF",
    promoText: "#FFFFFF",
  },
  dark: {
    accent: "#00B9FF",
    accentLight: "#75DBFF",
    promoBg: "#9D00FF",
    promoText: "#FFFFFF",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  carousel: [
    {
      path: "/registry/imweb-me-hero-0/carousel-1.png",
      alt: "Website template 1",
    },
    {
      path: "/registry/imweb-me-hero-0/carousel-2.png",
      alt: "Website template 2",
    },
    {
      path: "/registry/imweb-me-hero-0/carousel-3.png",
      alt: "Website template 3",
    },
    {
      path: "/registry/imweb-me-hero-0/carousel-4.png",
      alt: "Website template 4",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, useAnimationFrame } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowUp,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

interface ImwebMeHero0Props {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  promoBannerText?: string;
  promoCta?: string;
  title?: string;
  subtitle?: string;
  chatPlaceholder?: string;
  features?: FeatureItem[];
  loginText?: string;
  ctaText?: string;
}

// Logo component
const ImwebLogo = ({ className }: { className?: string }) => (
  <svg
    width="138"
    height="30"
    viewBox="0 0 138 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g id="logo">
      <g id="Group">
        <path
          d="M97.1115 12.8061C94.6374 14.0066 92.9984 15.7563 91.6948 18.1795C88.67 23.8064 90.8575 29.8778 96.9982 29.8778C103.139 29.8778 106.515 25.8494 107.618 24.7023C108.078 24.2021 108.52 23.6819 108.944 23.1505C109.117 22.9326 109.453 23.155 109.322 23.4017C109.18 23.6707 109.029 23.9375 108.871 24.1976C107.909 25.7716 108.222 27.8392 109.69 28.9552C110.357 29.4621 111.269 29.8 112.518 29.8C116.433 29.8 119.658 26.7409 121.012 25.2292C121.175 25.0447 121.332 24.8601 121.49 24.6712C121.628 24.5022 122.138 23.8664 122.347 23.5863C122.514 23.3639 122.856 23.5774 122.731 23.8264C122.645 24.002 122.554 24.1776 122.46 24.3488C121.914 25.3492 121.885 26.5586 122.374 27.5902C122.969 28.8485 124.066 29.88 126.047 29.88C127.582 29.88 130.058 29.1108 132.363 26.9788C137.058 22.6325 137.46 18.9954 137.145 18.0506C136.343 15.6473 133.396 17.0546 130.587 19.1266C130.4 19.2644 130.151 19.0666 130.245 18.8531C131.055 17.0057 132.741 12.5171 131.148 10.1695C129.27 7.40384 125.439 9.09567 121.648 11.9613C121.472 12.0947 121.23 11.9213 121.299 11.7123C121.896 9.88045 123.204 4.99615 121.037 2.82634C116.084 -2.13132 105.573 11.2655 102.577 15.3339C102.433 15.5317 102.122 15.3895 102.175 15.1493C102.359 14.3134 102.335 13.7021 102.231 13.3864C101.658 11.6745 99.0725 11.8568 97.1159 12.8084L97.1115 12.8061Z"
          fill="currentColor"
        />
        <path
          d="M105.107 8.68846C107.045 6.67947 107.448 3.92018 106.005 2.52542C104.563 1.13065 101.822 1.62857 99.8835 3.63755C97.9448 5.64654 97.5423 8.40583 98.9847 9.8006C100.427 11.1954 103.168 10.6974 105.107 8.68846Z"
          fill="currentColor"
        />
      </g>
      <g id="Group_2">
        <path
          d="M44.9619 11.6188L47.8246 20.3358L50.2764 11.6188H54.6737L50.1276 26.3028H45.6703L42.4834 16.8188L39.3542 26.3028H34.8081L30.2042 11.6188H34.868L37.3176 20.3047L40.2092 11.6188H44.9619Z"
          fill="currentColor"
        />
        <path
          d="M68.7757 22.0788C68.0672 24.6199 65.7353 26.7474 62.0154 26.7474C57.9712 26.7474 54.3712 23.8507 54.3712 18.9175C54.3712 13.9842 57.8846 11.1764 61.6911 11.1764C66.2372 11.1764 69.04 13.9842 69.04 18.7107C69.04 19.331 68.98 20.0113 68.9511 20.1002H58.7374C58.8262 21.7542 60.3319 22.9369 62.0731 22.9369C63.6966 22.9369 64.6116 22.1677 65.0246 21.0161L68.7735 22.0788H68.7757Z"
          fill="currentColor"
        />
        <path
          d="M70.6368 26.3028V4.9115H75.0341V13.0083C75.6537 12.0923 77.2772 11.2653 79.2848 11.2653C83.5356 11.2653 86.1029 14.5156 86.1029 18.9174C86.1029 23.3193 83.2091 26.6296 79.1072 26.6296C77.1595 26.6296 75.6537 25.7737 74.9741 24.6488V26.3028H70.6346H70.6368Z"
          fill="currentColor"
        />
        <path
          d="M6.95801 26.1539V11.4677H11.2376V13.1528C11.9749 11.8523 13.8649 11.0253 15.4595 11.0253C17.556 11.0253 19.0617 11.8812 19.799 13.3307C20.9494 11.6767 22.3664 11.0253 24.3451 11.0253C27.119 11.0253 29.7774 12.6504 29.7774 16.6388V26.1539H25.4378V17.6436C25.4378 16.2542 24.7005 15.1626 23.1059 15.1626C21.5113 15.1626 20.6563 16.3742 20.6563 17.6748V26.1561H16.2279V17.6459C16.2279 16.2564 15.4906 15.1648 13.8671 15.1648C12.2437 15.1648 11.4464 16.3764 11.4464 17.7059V26.1561H6.96023L6.95801 26.1539Z"
          fill="currentColor"
        />
        <g id="Group_3">
          <path d="M4.7171 11.4675H0.230957V26.1538H4.7171V11.4675Z" fill="currentColor" />
          <path
            d="M5.16128 7.45478C5.16128 8.88205 4.00644 10.0381 2.58064 10.0381C1.15485 10.0381 0 8.88205 0 7.45478C0 6.02751 1.15485 4.87146 2.58064 4.87146C4.00644 4.87146 5.16128 6.02751 5.16128 7.45478Z"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
);

// Symbol Logo for chat
const ImwebSymbol = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3.7545 9.20131C2.84224 9.64398 2.23789 10.2891 1.75719 11.1827C0.641842 13.2575 1.44846 15.4962 3.71273 15.4962C5.97701 15.4962 7.22174 14.0108 7.62873 13.5878C7.79825 13.4034 7.96121 13.2115 8.11762 13.0156C8.1815 12.9353 8.30515 13.0173 8.25684 13.1083C8.20443 13.2074 8.14874 13.3058 8.0906 13.4017C7.73601 13.9821 7.85148 14.7445 8.39277 15.156C8.63844 15.3429 8.97501 15.4675 9.43524 15.4675C10.879 15.4675 12.068 14.3395 12.5675 13.7821C12.6273 13.7141 12.6855 13.646 12.7436 13.5763C12.7944 13.514 12.9827 13.2796 13.0597 13.1763C13.1211 13.0943 13.2472 13.173 13.2014 13.2648C13.1694 13.3296 13.1359 13.3944 13.1015 13.4575C12.9 13.8264 12.8894 14.2723 13.0695 14.6527C13.289 15.1167 13.6935 15.497 14.424 15.497C14.9899 15.497 15.9029 15.2134 16.753 14.4272C18.4841 12.8246 18.6324 11.4835 18.5161 11.1351C18.2204 10.249 17.1338 10.7679 16.0978 11.5319C16.0291 11.5827 15.9373 11.5097 15.9717 11.431C16.2706 10.7498 16.8922 9.09475 16.305 8.22909C15.6122 7.20931 14.1996 7.83315 12.8018 8.88981C12.7371 8.93899 12.6478 8.87505 12.6732 8.798C12.8935 8.12252 13.3758 6.32152 12.5766 5.52144C10.7504 3.69339 6.87452 8.63323 5.76982 10.1334C5.71659 10.2063 5.60195 10.1539 5.6216 10.0653C5.68957 9.75711 5.68056 9.53168 5.64207 9.41527C5.4308 8.78406 4.47759 8.85128 3.75614 9.20213L3.7545 9.20131Z"
      fill="currentColor"
    />
    <path
      d="M6.70275 7.68324C7.41762 6.94247 7.566 5.92503 7.03416 5.41073C6.50233 4.89643 5.49168 5.08003 4.77681 5.82081C4.06194 6.56159 3.91356 7.57903 4.44539 8.09333C4.97722 8.60762 5.98787 8.42402 6.70275 7.68324Z"
      fill="currentColor"
    />
  </svg>
);

// Feature icons
const PencilIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3765_4912)">
      <path
        d="M16.6699 4.90625L19.8519 8.08827L8.00791 19.9323L4.95556 20.3684C4.62558 20.4155 4.34273 20.1327 4.38987 19.8027L4.82589 16.7503L16.6699 4.90625Z"
        fill="#00B9FF"
      />
      <path
        d="M17.0223 4.55193C17.901 3.67325 19.3256 3.67325 20.2043 4.55193C21.083 5.43061 21.083 6.85523 20.2043 7.73391L19.6739 8.26424L16.492 5.08226L17.0223 4.55193Z"
        fill="#00B9FF"
      />
      <path
        d="M4.82422 16.75L6.06166 15.5126L9.24364 18.6945L8.0062 19.932L4.82422 16.75Z"
        fill="#75DBFF"
      />
      <path
        d="M3.83015 7.10555C3.43963 6.71502 3.43963 6.08185 3.83015 5.69133L5.59792 3.92356C5.98844 3.53304 6.62161 3.53304 7.01213 3.92356L20.6066 17.518C20.9971 17.9085 20.9971 18.5417 20.6066 18.9322L18.8388 20.7C18.4483 21.0905 17.8151 21.0905 17.4246 20.7L3.83015 7.10555Z"
        fill="#75DBFF"
      />
      <path
        d="M7.1885 6.92678C7.09086 6.82915 7.09086 6.67085 7.1885 6.57322L8.42593 5.33579L8.77949 5.68934L7.54205 6.92678C7.44442 7.02441 7.28613 7.02441 7.1885 6.92678Z"
        fill="#00B9FF"
      />
      <path
        d="M8.95607 8.6924C8.85844 8.59477 8.85844 8.43648 8.95607 8.33885L10.1935 7.10141L10.5471 7.45496L9.30963 8.6924C9.212 8.79003 9.0537 8.79003 8.95607 8.6924Z"
        fill="#00B9FF"
      />
      <path
        d="M10.7237 10.458C10.626 10.3604 10.626 10.2021 10.7237 10.1045L11.9611 8.86704L12.3146 9.22059L11.0772 10.458C10.9796 10.5557 10.8213 10.5557 10.7237 10.458Z"
        fill="#00B9FF"
      />
      <path
        d="M12.4912 12.2315C12.3936 12.1338 12.3936 11.9755 12.4912 11.8779L13.7287 10.6405L14.0822 10.994L12.8448 12.2315C12.7472 12.3291 12.5889 12.3291 12.4912 12.2315Z"
        fill="#00B9FF"
      />
      <path
        d="M14.2588 13.9971C14.1612 13.8995 14.1612 13.7412 14.2588 13.6435L15.4962 12.4061L15.8498 12.7597L14.6124 13.9971C14.5147 14.0947 14.3564 14.0947 14.2588 13.9971Z"
        fill="#00B9FF"
      />
      <path
        d="M16.0264 15.7627C15.9288 15.6651 15.9288 15.5068 16.0264 15.4092L17.2638 14.1717L17.6174 14.5253L16.3799 15.7627C16.2823 15.8603 16.124 15.8603 16.0264 15.7627Z"
        fill="#00B9FF"
      />
      <path
        d="M17.794 17.5362C17.6963 17.4385 17.6963 17.2802 17.794 17.1826L19.0314 15.9452L19.385 16.2987L18.1475 17.5362C18.0499 17.6338 17.8916 17.6338 17.794 17.5362Z"
        fill="#00B9FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_3765_4912">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 12.5C21 17.4706 16.9706 21.5 12 21.5C7.02944 21.5 3 17.4706 3 12.5C3 7.52944 7.02944 3.5 12 3.5C16.9706 3.5 21 7.52944 21 12.5Z"
      fill="#00B9FF"
    />
    <path
      d="M19 12.5C19 16.366 15.866 19.5 12 19.5C8.13401 19.5 5 16.366 5 12.5C5 8.63401 8.13401 5.5 12 5.5C15.866 5.5 19 8.63401 19 12.5Z"
      fill="#75DBFF"
    />
    <path
      d="M11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9V12.5C13 13.0523 12.5523 13.5 12 13.5H8.5C7.94772 13.5 7.5 13.0523 7.5 12.5C7.5 11.9477 7.94772 11.5 8.5 11.5H11V9Z"
      fill="#00B9FF"
    />
    <path
      d="M10 3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V4H10V3Z"
      fill="#00B9FF"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.5 2C17.1569 2 18.5 3.34315 18.5 5L18.5 19C18.5 20.6569 17.1569 22 15.5 22L8.5 22C6.84314 22 5.5 20.6569 5.5 19L5.5 5C5.5 3.34314 6.84315 2 8.5 2L15.5 2Z"
      fill="#00B9FF"
    />
    <path
      d="M12.9985 4.07812C13.2287 4.07812 13.415 4.26451 13.415 4.49463C13.415 4.72475 13.2287 4.91113 12.9985 4.91113H10.9985C10.7684 4.91113 10.582 4.72475 10.582 4.49463C10.582 4.26451 10.7684 4.07812 10.9985 4.07812H12.9985Z"
      fill="#75DBFF"
    />
    <path
      d="M8 9.7C8 9.3134 8.3134 9 8.7 9H9.3C9.6866 9 10 9.3134 10 9.7V10.3C10 10.6866 9.6866 11 9.3 11H8.7C8.3134 11 8 10.6866 8 10.3V9.7Z"
      fill="#75DBFF"
    />
    <path
      d="M11 9.7C11 9.3134 11.3134 9 11.7 9H12.3C12.6866 9 13 9.3134 13 9.7V10.3C13 10.6866 12.6866 11 12.3 11H11.7C11.3134 11 11 10.6866 11 10.3V9.7Z"
      fill="#75DBFF"
    />
    <path
      d="M14 9.7C14 9.3134 14.3134 9 14.7 9H15.3C15.6866 9 16 9.3134 16 9.7V10.3C16 10.6866 15.6866 11 15.3 11H14.7C14.3134 11 14 10.6866 14 10.3V9.7Z"
      fill="#75DBFF"
    />
    <path
      d="M8 12.7C8 12.3134 8.3134 12 8.7 12H9.3C9.6866 12 10 12.3134 10 12.7V13.3C10 13.6866 9.6866 14 9.3 14H8.7C8.3134 14 8 13.6866 8 13.3V12.7Z"
      fill="#75DBFF"
    />
    <path
      d="M11 12.7C11 12.3134 11.3134 12 11.7 12H12.3C12.6866 12 13 12.3134 13 12.7V13.3C13 13.6866 12.6866 14 12.3 14H11.7C11.3134 14 11 13.6866 11 13.3V12.7Z"
      fill="#75DBFF"
    />
    <path
      d="M14 12.7C14 12.3134 14.3134 12 14.7 12H15.3C15.6866 12 16 12.3134 16 12.7V13.3C16 13.6866 15.6866 14 15.3 14H14.7C14.3134 14 14 13.6866 14 13.3V12.7Z"
      fill="#75DBFF"
    />
    <path
      d="M8 15.7C8 15.3134 8.3134 15 8.7 15H9.3C9.6866 15 10 15.3134 10 15.7V16.3C10 16.6866 9.6866 17 9.3 17H8.7C8.3134 17 8 16.6866 8 16.3V15.7Z"
      fill="#75DBFF"
    />
    <path
      d="M11 15.7C11 15.3134 11.3134 15 11.7 15H12.3C12.6866 15 13 15.3134 13 15.7V16.3C13 16.6866 12.6866 17 12.3 17H11.7C11.3134 17 11 16.6866 11 16.3V15.7Z"
      fill="#75DBFF"
    />
    <path
      d="M14 15.7C14 15.3134 14.3134 15 14.7 15H15.3C15.6866 15 16 15.3134 16 15.7V16.3C16 16.6866 15.6866 17 15.3 17H14.7C14.3134 17 14 16.6866 14 16.3V15.7Z"
      fill="#75DBFF"
    />
  </svg>
);

// Promo banner 3D box icon
const PromoBoxIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 2L28 8V24L16 30L4 24V8L16 2Z"
      fill="#FF69B4"
      stroke="white"
      strokeWidth="2"
    />
    <path d="M16 14L28 8" stroke="white" strokeWidth="2" />
    <path d="M16 14L4 8" stroke="white" strokeWidth="2" />
    <path d="M16 14V30" stroke="white" strokeWidth="2" />
  </svg>
);

// Infinite Carousel component
const InfiniteCarousel = ({ images }: { images: typeof IMAGES.carousel }) => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemWidth = 280;
  const gap = 16;
  const totalWidth = images.length * (itemWidth + gap);

  useAnimationFrame((time) => {
    setOffset((time * 0.03) % totalWidth);
  });

  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="relative w-full h-[170px] overflow-hidden" ref={containerRef}>
      <div
        className="flex absolute"
        style={{
          transform: `translateX(-${offset}px)`,
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] h-[170px] rounded-lg border-2 border-gray-200 overflow-hidden"
            style={{ marginRight: `${gap}px` }}
          >
            <Image
              src={image.path}
              alt={image.alt}
              width={280}
              height={170}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ImwebMeHero0({
  mode = "light",
  logoText = "imweb",
  navItems = [
    { label: "주요기능", href: "#", hasDropdown: true },
    { label: "템플릿", href: "#", hasDropdown: true },
    { label: "요금", href: "#" },
    { label: "전환가 했기", href: "#", hasDropdown: true },
    { label: "스토리", href: "#" },
    { label: "고객지원", href: "#", hasDropdown: true },
  ],
  promoBannerText = "PG 기업이 없이 바로 상품을 편리하게 모아보세요!",
  promoCta = "지금 신청하면 PG 가입비 무료!",
  title = "운영하기 쉬운 쇼핑몰",
  subtitle = "단 한줄로 나의 브랜드를 현실로 만들어보세요",
  chatPlaceholder = "최소 25자 이상으로 필요한 웹사이트의 컨셉을 구체적으로 알려주세요\n참고 URL도 첨부 가능해요.",
  features = [
    { icon: <PencilIcon />, text: "디자인은 언제든 수정할 수 있어요." },
    { icon: <ClockIcon />, text: "최대 15분 이내로 생성해요." },
    { icon: <PhoneIcon />, text: "모바일도 반응형으로 자동 생성돼요." },
  ],
  loginText = "로그인",
  ctaText = "무료로 시작하기",
}: ImwebMeHero0Props) {
  const colors = COLORS[mode];
  const [showBanner, setShowBanner] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="relative w-full bg-white min-h-screen flex flex-col">
      {/* Promo Banner */}
      {showBanner && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full py-2.5 px-4 flex items-center justify-center gap-4 relative"
          style={{ backgroundColor: colors.promoBg }}
        >
          <button className="absolute left-4 text-white/80 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <PromoBoxIcon />
            <span className="text-white/90 text-sm">{promoBannerText}</span>
          </div>
          <span className="text-white font-bold text-sm">{promoCta}</span>
          <button className="absolute right-12 text-white/80 hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-900">
            <ImwebLogo className="h-7 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
            {loginText}
          </a>
          <button
            className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            {ctaText}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-500">{subtitle}</p>
        </motion.div>

        {/* AI Chat Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8"
        >
          {/* Chat Header */}
          <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
            <ImwebSymbol className="text-black" />
            <span className="font-bold text-sm text-gray-900">imweb AI</span>
          </div>

          {/* Chat Input Area */}
          <div className="p-5">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={chatPlaceholder}
              className="w-full h-24 resize-none text-gray-500 text-base placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          {/* Chat Footer */}
          <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">최소 25자</span>
              <span className="text-sm text-gray-400">{inputValue.length} / 1000</span>
            </div>
            <button
              disabled={inputValue.length < 25}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors disabled:bg-gray-200 disabled:cursor-not-allowed"
              style={{
                backgroundColor: inputValue.length >= 25 ? "#1A1A1A" : undefined,
              }}
            >
              <ArrowUp
                className={`w-4 h-4 ${inputValue.length >= 25 ? "text-white" : "text-gray-400"}`}
              />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-5xl mb-12"
        >
          <InfiniteCarousel images={IMAGES.carousel} />
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {feature.icon}
              <span className="text-sm text-gray-500">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </main>
    </section>
  );
}
