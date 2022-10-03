import { FC } from "react";

import Icon from "../Icon";

const Header: FC = () => {
  return (
    <header
      className="sticky top-0 ml-64 flex items-center justify-between px-12 py-6"
      data-testid="header"
    >
      <div className="flex flex-grow items-center p-1 py-2">
        <div>
          <p className="font-bold text-tertiary-300">Hi User,</p>
          <p className="font-bold text-primary-300">Welcome back!</p>
        </div>

        <div className="relative ml-14 text-tertiary-200 focus-within:text-primary-300">
          <input
            type="search"
            className="w-72 rounded-xl border-none bg-primary-50 py-3 pr-9 text-sm text-tertiary-300 focus:outline-none"
            placeholder="Search"
            data-testid="search-input"
          />

          <span className="absolute inset-y-0 right-2 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none">
              <div className="mt-1">
                <Icon src="/svg/Search.svg" height={21} width={21} />
              </div>
            </button>
          </span>
        </div>
      </div>

      <button className="flex items-center gap-2 rounded-md bg-primary-50 py-3 px-3">
        <div className="h-8 w-8 rounded-full bg-primary-300" />

        <div className="flex flex-col text-start">
          <span className="text-xs font-medium text-tertiary-300">
            Test User
          </span>
          <span className="text-xs font-medium text-tertiary-200">041045</span>
        </div>

        <div className="ml-8 flex flex-col">
          <Icon
            src="/svg/Chevron.svg"
            height={7}
            width={7}
            className="rotate-180"
          />
          <Icon src="/svg/Chevron.svg" height={7} width={7} />
        </div>
      </button>
    </header>
  );
};

export default Header;
