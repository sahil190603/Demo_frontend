import React, { useEffect, useState } from "react";
import { Menu, Layout, ConfigProvider } from "antd";
import { theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import ModeToggle from "../Generic/ModeToggle";
import MainRoute from "../../Route/route";

const { Header, Content, Sider } = Layout;

function Layouts() {
  const { defaultAlgorithm, darkAlgorithm } = theme;

  
  const storedTheme = localStorage.getItem("theme") || "light"; 
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === "dark"); 
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const handleToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            position: "fixed",
            width: "100%",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            backgroundColor: isDarkMode ? "#001529" : "#1890ff",
            padding: "0 22px",
            height: "55px",
          }}
        >
          <div className="logo">Highlight-Generator</div>
          <div style={{ marginLeft: "auto" }}>
            <ModeToggle isDarkMode={isDarkMode} onToggle={handleToggle} />
          </div>
        </Header>

        <Layout style={{ marginTop: 55 }}>
          <Sider
            collapsible
            width={180}
            collapsed={collapsed}
            onCollapse={handleCollapse}
            collapsedWidth={55}
            trigger={
              collapsed ? (
                <MenuUnfoldOutlined
                  style={{ color: "white", fontSize: "18px" }}
                />
              ) : (
                <MenuFoldOutlined
                  style={{ color: "white", fontSize: "18px" }}
                />
              )
            }
            style={{
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 55,
              backgroundColor: isDarkMode ? "#001529" : "#ffffff",
            }}
          >
            <Menu selectedKeys={[]} mode="inline" style={{ height: "100%" }}>
              <Menu.Item key={[]} icon={<MessageOutlined />}></Menu.Item>
            </Menu>
          </Sider>

          <Layout
            style={{
              marginLeft: collapsed ? 55 : 180,
              padding: "15px",
              //   transition: "margin-left 0.2s",
              transition: "0.2s",
            }}
          >
            <Content>
              <MainRoute />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default Layouts;
