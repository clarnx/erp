import { FC } from "react";

import Icon from "../Icon";
import Typography from "../Typography";

const Header: FC = () => {
  return (
    <header
      className="sticky top-0 ml-64 flex items-center justify-between px-12 py-6"
      data-testid="header"
    >
      <div className="flex flex-grow items-center p-1 py-2">
        <div>
          <Typography preset="subheading">Hi User,</Typography>
          <Typography
            color="text-primary-300"
            variant="h4"
            size="text-base"
            className="font-bold"
          >
            Welcome back!
          </Typography>
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
          <Typography
            color="text-tertiary-300"
            variant="p"
            size="text-xs"
            className="font-medium"
          >
            Test User
          </Typography>
          <Typography
            color="text-tertiary-200"
            variant="p"
            size="text-xs"
            className="font-light"
          >
            041045
          </Typography>
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
