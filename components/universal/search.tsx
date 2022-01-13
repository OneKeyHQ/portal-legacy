import {
  ChangeEvent,
  InputHTMLAttributes,
  MouseEvent,
  KeyboardEvent,
  useRef,
} from "react";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import classNames from "classnames/dedupe";

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: (
    value: string,
    event?:
      | ChangeEvent<HTMLInputElement>
      | MouseEvent<HTMLElement>
      | KeyboardEvent<HTMLInputElement>
  ) => void;
  value?: string;
}

const Search = (props: SearchProps) => {
  const { value, onSearch, className, ...restProps } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target && onSearch) {
      onSearch((e as ChangeEvent<HTMLInputElement>).target.value, e);
    }
  };

  const onClear = () => {
    if (onSearch) {
      onSearch("");
    }
  };

  const inputClassnames = classNames(
    "focus:outline-none border border-transparent ",
    "block w-full sm:text-sm bg-gray-50 placeholder-gray-400 rounded-md p-4 pl-10",
    className
  );

  return (
    <div className="mt-1 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        ref={inputRef}
        className={inputClassnames}
        {...restProps}
        onChange={onChange}
        value={value}
        // FIXME: Change caret color, doesn't work below
        // style={{ caretColor: "rgb(0, 170, 17)" }}
      />
      {value && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={onClear}
          role="button"
          tabIndex={0}
        >
          <XIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

Search.displayName = "Search";

export default Search;
