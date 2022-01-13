import { Fragment, useRef, useState } from "react";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const solutions = [
  {
    name: <FormattedMessage id="components__nav__shop_youzan" />,
    description: <FormattedMessage id="components__nav__shop_youzan_desc" />,
    href: "https://j.youzan.com/dZTtS2",
  },
  {
    name: <FormattedMessage id="components__nav__shop_shopify" />,
    description: <FormattedMessage id="components__nav__shop_shopify_desc" />,
    href: "https://shop.onekey.so/",
  },
];

export default function ShopLink() {
  const [isHover, setIsHover] = useState(false);
  const buttonRef = useRef();

  return (
    <Popover
      className="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
            ref={buttonRef}
          >
            <span>
              <FormattedMessage
                id="components.nav.shop"
                defaultMessage="商店"
              />
            </span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            show={open || isHover}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute z-10 left-1/2 transform -translate-x-1/2 pt-3 px-2 w-screen max-w-xs sm:px-0"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {solutions.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      target="_blank"
                    >
                      <p className="text-base font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
