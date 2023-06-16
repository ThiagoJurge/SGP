import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { apiPadtec } from "../api/api";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CgListTree } from "react-icons/cg";

const MenuComponent = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [getItem("Árvore de Equipamentos", 1, <CgListTree />)];

  return <Menu theme="light" mode="vertical" items={items} />;
};

export default MenuComponent;
