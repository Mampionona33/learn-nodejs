import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const AppSidebar = () => {
  const appMenu = [
    {
      label: "Home",
      to: "/",
      icon: "🏠",
    },
    {
      label: "Products",
      to: "/products",
      icon: "🛒",
    },
  ];
  return (
    <Sidebar className="h-screen">
      <Menu>
        {appMenu.map((menu) => (
          <MenuItem
            component={<Link to={menu.to} />}
            icon={menu.icon}
            key={menu.label}
          >
            {menu.label}
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default AppSidebar;
