import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const AppSidebar = () => {
  return (
    <Sidebar className="h-screen">
      <Menu>
        <MenuItem component={<Link to="/" />} icon={"🏠"}>
          Home
        </MenuItem>
        <MenuItem component={<Link to="/products" />} icon={"🛒"}>
          Products
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default AppSidebar;
