import React from "react";
import AppSidebar from "../components/AppSidebar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200 flex flex-row">
      <AppSidebar />
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Layout;
