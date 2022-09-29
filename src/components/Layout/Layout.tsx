import { FC, PropsWithChildren } from "react";

import Sidebar from "../Sidebar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 flex h-14 items-center justify-center bg-purple-200 font-semibold uppercase">
        Next.js sidebar menu
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />

        <main className="ml-64 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
