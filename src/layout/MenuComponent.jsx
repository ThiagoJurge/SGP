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

  const items = [getItem(<NavLink to={'/tree'}>Árvore de Equipamentos</NavLink>, 1, <CgListTree />)];

  return <Menu theme="light" mode="inline" items={items} />;
};

export default MenuComponent;
