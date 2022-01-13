import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import classNames from "classnames/dedupe";
import { useLocale } from "../../components/universal/IntlProvider";

const LANGUAGES = { "zh-CN": "中文", "en-US": "English" };

interface LanguageItemsProps {
  open: boolean;
  onLanguageClick: (locale: string) => void;
}

const LanguageItems = ({ open, onLanguageClick }: LanguageItemsProps) => {
  const items = (
    <div className="py-1">
      {Object.keys(LANGUAGES).map((locale) => (
        <Menu.Item
          key={LANGUAGES[locale]}
          onClick={() => onLanguageClick(locale)}
        >
          {({ active }) => (
            <div
              className={classNames(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "block px-4 py-2 text-sm cursor-pointer"
              )}
            >
              {LANGUAGES[locale]}
            </div>
          )}
        </Menu.Item>
      ))}
    </div>
  );

  return (
    <Transition
      show={open}
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        static
        className="origin-top-right absolute z-10 right-0 mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        {items}
      </Menu.Items>
    </Transition>
  );
};

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { setLocale, locale } = useLocale();

  const [currentLanguage, setCurrentLanguage] = useState(
    LANGUAGES[locale] ?? "中文"
  );

  const triggerClasses = classNames(
    "inline-flex justify-center w-full rounded-full",
    "border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-600"
  );

  const containerClasses = classNames(
    "relative inline-block text-left",
    className
  );

  const handleLanguageChange = (locale: string) => {
    const languageLabel = LANGUAGES[locale];
    if (languageLabel === currentLanguage) {
      return;
    }

    setCurrentLanguage(languageLabel);
    setLocale(locale);
  };

  return (
    <Menu as="div" className={containerClasses}>
      {({ open }) => (
        <>
          <div>
            <Menu.Button className={triggerClasses}>
              {currentLanguage}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <LanguageItems open={open} onLanguageClick={handleLanguageChange} />
        </>
      )}
    </Menu>
  );
};

export default LanguageSwitcher;
