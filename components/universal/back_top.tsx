import { useState, useEffect, HTMLAttributes, FC, useCallback } from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import classNames from "classnames";

type BackTopProps = HTMLAttributes<HTMLButtonElement> & {
  top?: number;
};

function scrollToTop(smooth = true) {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
}

// eslint-disable-next-line react/prop-types
const BackTop: FC<BackTopProps> = ({ top = 200, className }) => {
  const [visible, setVisible] = useState(false);
  const onScroll = useCallback(() => {
    setVisible(document.documentElement.scrollTop > top);
  }, [top]);
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    // Remove listener on unmount
    return () => document.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const buttonClasses = classNames(
    "h-12 w-12 p-3 fixed z-20 right-5 rounded-full bg-white text-green-600",
    "shadow-md hover:bg-gray-200 hover:text-green-400 focus:outline-none",
    className
  );

  // Use style since custom position haven't supported yet
  const buttonStyles = {
    bottom: "4.25rem",
  };

  return (
    visible && (
      <button
        className={buttonClasses}
        style={buttonStyles}
        onClick={() => scrollToTop()}
      >
        <ChevronUpIcon />
      </button>
    )
  );
};

export default BackTop;
