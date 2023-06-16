import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tree } from "antd";
import {
  AmplifierIcon,
  DefaultIcon,
  FanIcon,
  MfHaIcon,
  MuxDemuxIcon,
  OPSIcon,
  OcmIcon,
  RoadmIcon,
  SpvlIcon,
  SscIcon,
  TransponderIcon,
} from "../../icons/Icons";
import { apiPadtec } from "../../api/api";
const { DirectoryTree } = Tree;

const TreeView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function getItem(key, title, children, isLeaf, icon) {
    return {
      title,
      key,
      children,
      isLeaf,
      icon,
    };
  }

  function getIcon(family) {
    if (family == "ops") {
      return <OPSIcon />;
    } else if (family == "amplifier") {
      return <AmplifierIcon />;
    } else if (family == "fan") {
      return <FanIcon />;
    } else if (family == "mf-ha") {
      return <MfHaIcon />;
    } else if (family == "supervisor") {
      return <SpvlIcon />;
    } else if (family == "mux/demux") {
      return <MuxDemuxIcon />;
    } else if (family == "lightpad") {
      return <DefaultIcon />;
    } else if (family == "wss") {
      return <RoadmIcon />;
    } else if (family == "ocm") {
      return <OcmIcon />;
    } else if (family == "transponder") {
      return <TransponderIcon />;
    } else if (family == "ssc") {
      return <SscIcon />;
    } else {
      return <DefaultIcon />;
    }
  }
  async function fetchData() {
    try {
      const response = await apiPadtec.get("/api/tree/all");
      setData([
        getItem(
          response.data.key,
          response.data.name,
          response.data.children.map((item) =>
            getItem(
              item.key,
              item.name,
              item.children.map((item) =>
                getItem(
                  item.key,
                  item.name,
                  item.children.map((item) => getItem(item.key, item.name))
                )
              )
            )
          )
        ),
      ]);
    } catch (error) {
      setData(error);
    }
  }

  const updateTreeData = (list, key, children) =>
    list.map((node) => {
      if (node.key === key) {
        return {
          ...node,
          children,
        };
      }
      if (node.children) {
        return {
          ...node,
          children: updateTreeData(node.children, key, children),
        };
      }
      return node;
    });

  const onLoadData = ({ key, children }) =>
    new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }
      setTimeout(async () => {
        try {
          const itens = await apiPadtec.get(`/api/tree/node/${key}`);
          const listItens = itens.data.children.map((item) =>
            getItem(
              item.key,
              <NavLink to={`/tree/${item.key}/${item.family.replace("/", "")}`}>
                {item.name}
              </NavLink>,
              null,
              true,
              getIcon(item.family)
            )
          );
          setData((origin) =>
            updateTreeData(
              origin,
              key,
              listItens.map((item) => item)
            )
          );
        } catch (error) {}

        resolve();
      }, 10);
    });

  return (
    <>
      <DirectoryTree
        treeData={data}
        showLine
        loadData={onLoadData}
        style={{ textAlign: "left" }}
      />
    </>
  );
};

export default TreeView;
