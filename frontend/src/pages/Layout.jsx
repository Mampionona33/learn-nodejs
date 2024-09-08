import React from "react";
import AppSidebar from "../components/AppSidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppSidebar />
      {children}
    </div>
  );
};

export default Layout;
