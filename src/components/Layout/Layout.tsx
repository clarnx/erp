import { FC, PropsWithChildren } from "react";

import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col" data-testid="layout">
      <Header />

      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />

        <main className="ml-64 flex-1" data-testid="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
