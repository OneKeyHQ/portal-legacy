import { FormattedMessage } from "react-intl";
import classNames from "classnames";
import Link from "../universal/link";
import { useLocale } from "../universal/IntlProvider";
interface MediaItemsProps {
  hide?: boolean;
}

const MediaItems = (props: MediaItemsProps) => {
  const { hide } = props;

  const hideinLargeScreen = hide ? "flex lg:hidden" : "hidden lg:flex";
  const containerClasses = classNames(
    "lg:mt-20 lg:mb-10 mt-8 mb-0 space-x-10 lg:justify-start justify-between px-8 md:px-40 lg:p-0",
    hideinLargeScreen
  );

  const mediaClassNames = classNames(
    "rounded-full w-10 h-10 flex justify-center items-center cursor-pointer",
    "text-green-600 hover:text-green-400 hover:bg-gray-200",
    "transition duration-200 transform hover:scale-110"
  );

  return (
    <div className={containerClasses}>
      <a
        href="https://twitter.com/OneKeyHQ"
        target="_blank"
        rel="noreferrer"
        className={mediaClassNames}
        style={{ boxShadow: "0px 2px 36px rgba(0, 0, 0, 0.08)" }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8333 2.33916C12.25 2.62499 11.6783 2.74108 11.0833 2.91666C10.4294 2.17874 9.45988 2.13791 8.52829 2.48674C7.59671 2.83558 6.98654 3.68841 6.99996 4.66666V5.24999C5.10704 5.29841 3.42121 4.43624 2.33329 2.91666C2.33329 2.91666 -0.106207 7.25258 4.66663 9.33333C3.57463 10.0607 2.48554 10.5513 1.16663 10.5C3.09629 11.5517 5.19921 11.9134 7.01979 11.3849C9.10813 10.7782 10.8243 9.21316 11.4829 6.86874C11.6793 6.15572 11.7769 5.41908 11.7728 4.67949C11.7716 4.53424 12.6536 3.06249 12.8333 2.33858V2.33916Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a
        href="https://discord.gg/nwUJaTzjzv"
        target="_blank"
        rel="noreferrer"
        className={mediaClassNames}
        style={{ boxShadow: "0px 2px 36px rgba(0, 0, 0, 0.08)" }}
      >
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 71 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="71" height="55" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <a
        href="https://weibo.com/yourKeysyourBitcoin"
        target="_blank"
        rel="noreferrer"
        className={mediaClassNames}
        style={{ boxShadow: "0px 2px 36px rgba(0, 0, 0, 0.08)" }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7798 8.28158C11.7798 10.2427 9.13725 12.0289 5.98959 12.0289C3.10209 12.0283 0.583252 10.6102 0.583252 8.47816C0.583252 7.34241 1.27159 6.09408 2.47325 4.92683C4.12525 3.325 6.10684 2.57425 7.05709 3.49883C7.34759 3.78 7.47884 4.15333 7.4765 4.58266C8.62859 4.24666 9.60567 4.347 10.0916 5.02133C10.3535 5.38475 10.4019 5.82633 10.2818 6.30875C11.1632 6.66458 11.7798 7.34125 11.7798 8.28158ZM13.3046 6.13083C13.2658 6.28059 13.169 6.40879 13.0357 6.48723C12.9023 6.56566 12.7433 6.58791 12.5935 6.54908C12.4437 6.51025 12.3155 6.41352 12.2371 6.28016C12.1587 6.14681 12.1364 5.98776 12.1753 5.838C12.2756 5.45341 12.276 5.04958 12.1764 4.66479C12.0769 4.28001 11.8807 3.92703 11.6065 3.63932C11.3323 3.35161 10.9891 3.13872 10.6096 3.02082C10.23 2.90293 9.82663 2.88394 9.43767 2.96566C9.36228 2.98229 9.28434 2.98379 9.20837 2.97007C9.1324 2.95635 9.05991 2.92768 8.9951 2.88574C8.93029 2.84379 8.87445 2.7894 8.83082 2.72572C8.78719 2.66203 8.75663 2.59032 8.74092 2.51474C8.72521 2.43915 8.72465 2.3612 8.73929 2.2854C8.75393 2.2096 8.78347 2.13747 8.8262 2.07317C8.86892 2.00887 8.92399 1.95369 8.9882 1.91084C9.05241 1.86798 9.12448 1.83829 9.20025 1.8235C9.78342 1.70141 10.3881 1.73022 10.957 1.90719C11.526 2.08416 12.0403 2.40344 12.4513 2.83479C12.8623 3.26613 13.1564 3.79526 13.3057 4.37206C13.4551 4.94886 13.4547 5.55423 13.3046 6.13083Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        href="https://github.com/OneKeyHQ/OneKey-Wallet"
        target="_blank"
        rel="noreferrer"
        className={mediaClassNames}
        style={{ boxShadow: "0px 2px 36px rgba(0, 0, 0, 0.08)" }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.25 10.0833C1.74983 10.8708 1.74983 8.59583 0.75 8.33333L4.25 10.0833ZM7.75 11.25V9.20833C7.75 8.625 7.80775 8.38875 7.45833 8.04167C9.08642 7.86667 10.6667 7.24483 10.6667 4.51833C10.6644 3.81608 10.3849 3.14312 9.88908 2.64583C10.0061 2.34455 10.0622 2.02306 10.0542 1.69995C10.0462 1.37684 9.97421 1.05853 9.84242 0.763416C9.84242 0.763416 9.22992 0.588416 7.81475 1.5025C6.6248 1.19233 5.3752 1.19233 4.18525 1.5025C2.7695 0.588416 2.15758 0.763416 2.15758 0.763416C2.02579 1.05853 1.9538 1.37684 1.94579 1.69995C1.93778 2.02306 1.99391 2.34455 2.11092 2.64583C1.86354 2.89388 1.66752 3.18829 1.53409 3.51221C1.40066 3.83612 1.33244 4.18318 1.33333 4.5335C1.33333 7.24017 2.91358 7.84683 4.54167 8.04167C4.19692 8.38525 4.215 8.73175 4.25 9.20833V11.25"
            fill="currentColor"
          />
          <path
            d="M7.75 11.25V9.20833C7.75 8.625 7.80775 8.38875 7.45833 8.04167C9.08642 7.86667 10.6667 7.24483 10.6667 4.51833C10.6644 3.81608 10.3849 3.14312 9.88908 2.64583C10.0061 2.34455 10.0622 2.02306 10.0542 1.69995C10.0462 1.37684 9.97421 1.05853 9.84242 0.763416C9.84242 0.763416 9.22992 0.588416 7.81475 1.5025C6.6248 1.19233 5.3752 1.19233 4.18525 1.5025C2.7695 0.588416 2.15758 0.763416 2.15758 0.763416C2.02579 1.05853 1.9538 1.37684 1.94579 1.69995C1.93778 2.02306 1.99391 2.34455 2.11092 2.64583C1.86354 2.89388 1.66752 3.18829 1.53409 3.51221C1.40066 3.83612 1.33244 4.18318 1.33333 4.5335C1.33333 7.24017 2.91358 7.84683 4.54167 8.04167C4.19692 8.38525 4.215 8.73175 4.25 9.20833V11.25M4.25 10.0833C1.74983 10.8708 1.74983 8.59583 0.75 8.33333L4.25 10.0833Z"
            stroke="currentColor"
            strokeWidth="0.816667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a
        href="https://www.reddit.com/r/OneKeyHQ/"
        target="_blank"
        rel="noreferrer"
        className={mediaClassNames}
        style={{ boxShadow: "0px 2px 36px rgba(0, 0, 0, 0.08)" }}
      >
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.437508 5.6875C0.437427 5.3521 0.533756 5.02374 0.715024 4.74153C0.896291 4.45933 1.15486 4.23518 1.45992 4.09577C1.76498 3.95637 2.10369 3.9076 2.43569 3.95525C2.76769 4.00291 3.079 4.145 3.33253 4.36459C4.24878 3.87781 5.34293 3.5837 6.48614 3.51554L6.20199 1.81062L5.00811 1.99428C4.95053 2.29855 4.78724 2.57268 4.5471 2.7682C4.30696 2.96372 4.00543 3.06805 3.69581 3.06276C3.38618 3.05746 3.0884 2.94287 2.85509 2.73924C2.62178 2.53562 2.46796 2.25607 2.42083 1.95C2.37371 1.64394 2.4363 1.33107 2.59754 1.06669C2.75879 0.80231 3.00831 0.603447 3.302 0.505249C3.59569 0.407051 3.91464 0.415841 4.20247 0.530065C4.49031 0.644289 4.7285 0.856593 4.87494 1.12945L6.49599 0.880073C6.60974 0.862518 6.72583 0.89052 6.81907 0.958006C6.91231 1.02549 6.97519 1.12702 6.99405 1.24056L7.37211 3.50889C8.56642 3.56039 9.71345 3.85774 10.6675 4.36459C11.0149 4.06372 11.4667 3.91162 11.9253 3.94115C12.3839 3.97067 12.8125 4.17945 13.1184 4.52237C13.4244 4.86529 13.5831 5.31482 13.5603 5.77382C13.5376 6.23281 13.3351 6.66442 12.9968 6.97538C13.0817 7.26771 13.1249 7.57058 13.125 7.875C13.125 9.07455 12.4665 10.1911 11.2707 11.0189C10.124 11.8128 8.60731 12.25 7.00001 12.25C5.39271 12.25 3.87598 11.8128 2.72931 11.0189C1.53355 10.1911 0.875008 9.07455 0.875008 7.875C0.875132 7.5706 0.918321 7.26774 1.00329 6.97544C0.825459 6.81122 0.683428 6.61208 0.586076 6.39048C0.488724 6.16887 0.438147 5.92955 0.437508 5.6875ZM10.0625 7.21875C10.0625 7.04569 10.0112 6.87652 9.91504 6.73263C9.8189 6.58873 9.68224 6.47658 9.52236 6.41036C9.36247 6.34413 9.18654 6.3268 9.0168 6.36056C8.84707 6.39433 8.69116 6.47766 8.56879 6.60003C8.44642 6.7224 8.36308 6.87831 8.32932 7.04805C8.29556 7.21778 8.31289 7.39371 8.37911 7.5536C8.44534 7.71349 8.55749 7.85014 8.70138 7.94629C8.84528 8.04243 9.01445 8.09375 9.18751 8.09375C9.41949 8.09349 9.6419 8.00121 9.80593 7.83718C9.96997 7.67314 10.0622 7.45073 10.0625 7.21875ZM4.99318 10.0138C5.6138 10.3335 6.30185 10.5004 6.99999 10.5004C7.69814 10.5004 8.38619 10.3335 9.00681 10.0138C9.10956 9.96037 9.18693 9.86838 9.22197 9.75799C9.25701 9.6476 9.24684 9.52783 9.19371 9.42492C9.14058 9.32202 9.04882 9.24438 8.93853 9.20902C8.82825 9.17367 8.70844 9.18348 8.60539 9.23631C8.10891 9.49211 7.5585 9.62556 7.00001 9.62556C6.44151 9.62556 5.8911 9.49211 5.39463 9.23631C5.29154 9.18316 5.17156 9.17311 5.06106 9.20839C4.95056 9.24367 4.8586 9.32138 4.80538 9.42444C4.75216 9.5275 4.74205 9.64748 4.77727 9.758C4.81248 9.86851 4.89015 9.96052 4.99318 10.0138ZM4.81251 8.09375C4.98557 8.09375 5.15474 8.04243 5.29863 7.94629C5.44252 7.85014 5.55468 7.71349 5.6209 7.5536C5.68713 7.39371 5.70446 7.21778 5.67069 7.04805C5.63693 6.87831 5.5536 6.7224 5.43123 6.60003C5.30886 6.47766 5.15295 6.39433 4.98321 6.36056C4.81348 6.3268 4.63754 6.34413 4.47766 6.41036C4.31777 6.47658 4.18112 6.58873 4.08497 6.73263C3.98883 6.87652 3.93751 7.04569 3.93751 7.21875C3.93777 7.45073 4.03005 7.67314 4.19408 7.83718C4.35812 8.00121 4.58052 8.09349 4.81251 8.09375Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
};

export default function Hero() {
  const { locale } = useLocale();

  const isEnglishLocale = locale === "en-US";
  const imgClass = classNames("h-10", {
    "w-53": isEnglishLocale,
    "w-45": !isEnglishLocale,
  });

  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div
          className="hidden lg:block lg:absolute lg:inset-0"
          aria-hidden="true"
        >
          <svg
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width="640"
            height="784"
            fill="none"
            viewBox="0 0 640 784"
          >
            <defs>
              <pattern
                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                x="118"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y="72"
              width="640"
              height="640"
              className="text-gray-50"
              fill="currentColor"
            />
            <rect
              x="118"
              width="404"
              height="784"
              fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
            />
          </svg>
        </div>
        <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
          <main className="mx-auto max-w-7xl px-4">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <div className="flex sm:justify-center lg:justify-start">
                  <img
                    key={new Date().getTime()}
                    src={`/img/logo_green_text${
                      isEnglishLocale ? "_en" : ""
                    }.png`}
                    alt="OneKey Logo"
                    className={imgClass}
                    // layout="fixed"
                  />
                </div>
                <h1>
                  <span className="mt-1 block text-5xl tracking-tight font-extrabold sm:text-5xl xl:text-7xl capitalize">
                    <FormattedMessage
                      id="pages.home.hero.title"
                      defaultMessage="<span>更受用户信赖的</span><strong>加密货币钱包</strong>"
                      values={{
                        span: (text: string) => (
                          <span className="block text-gray-900">{text}</span>
                        ),
                        strong: (text: string) => (
                          <span className="block text-green-600 mt-4">
                            {text}
                          </span>
                        ),
                      }}
                    />
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  <FormattedMessage
                    id="pages.home.hero.desc"
                    defaultMessage="难以置信的好用，坚若磐石的安全。"
                  />
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <Link
                    className="text-sm font-medium text-green-600"
                    href="/cryptos"
                  >
                    <FormattedMessage
                      id="pages.home.hero.more"
                      defaultMessage="查看币种支持列表 →"
                      values={{ br: () => <br /> }}
                    />
                  </Link>
                  <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        href="https://app.onekey.so/"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                      >
                        <FormattedMessage id="pages.home.hero.download" />
                      </Link>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">
                    <FormattedMessage
                      id="pages.home.hero.privacy.guarantee"
                      defaultMessage="我们不会通过你的数据隐私获利或分享给任何第三方，了解我们的<a>隐私政策</a>."
                      values={{
                        a: (text: string) => (
                          <a
                            href={`https://help.onekey.so/hc/${locale?.toLowerCase()}/articles/360002003315`}
                            className="font-medium text-gray-900 underline ml-1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {text}
                          </a>
                        ),
                      }}
                    />
                  </p>
                </div>
                <MediaItems />
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <svg
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                  width="640"
                  height="784"
                  fill="none"
                  viewBox="0 0 640 784"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                      x="118"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    y="72"
                    width="640"
                    height="640"
                    className="text-gray-50"
                    fill="currentColor"
                  />
                  <rect
                    x="118"
                    width="404"
                    height="784"
                    fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                  />
                </svg>
                <div className="relative mx-auto w-full lg:max-w-lg">
                  <img
                    src="/img/hero.png"
                    alt="hero"
                    // layout="responsive"
                    // width={512}
                    // height={544.75}
                    className="w-128"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <MediaItems hide />
    </div>
  );
}
