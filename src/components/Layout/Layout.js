import React, { useState, useEffect } from "react";
import { Menu, Layout, ConfigProvider, Drawer, Button } from "antd";
import { theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import ModeToggle from "../Generic/ModeToggle";
import MainRoute from "../../Route/route";
import MediaQueryHandler from "../Hooks/MediaQueryhandler";

const { Header, Content, Sider } = Layout;

function Layouts() {
  const { defaultAlgorithm, darkAlgorithm } = theme;

  const storedTheme = localStorage.getItem("theme") || "light";
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === "dark");
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const { isMobile } = MediaQueryHandler();

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

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
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
          <div className="logo" style={{ color: "white", fontSize: "20px" }}>
            Highlight-Generator
          </div>

          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ModeToggle isDarkMode={isDarkMode} onToggle={handleToggle} />
            {isMobile && (
              <Button
                type="text"
                icon={
                  <MenuOutlined style={{ color: "white", fontSize: "18px" }} />
                }
                onClick={toggleDrawer}
                style={{ marginLeft: "10px" }}
              />
            )}
          </div>
        </Header>

        <Layout style={{ marginTop: 55 }}>
          {/* Sidebar for desktop */}
          {!isMobile && (
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
          )}

          {/* Drawer for mobile */}
          {isMobile && (
            <Drawer
              title="Menu"
              placement="left"
              onClose={toggleDrawer}
              visible={drawerVisible}
              bodyStyle={{ padding: 0 }}
              headerStyle={{
                backgroundColor: isDarkMode ? "#001529" : "#ffffff",
              }}
              width={200}
            >
              <Menu selectedKeys={[]} mode="inline" style={{ height: "100%" }}>
                <Menu.Item key={[]} icon={<MessageOutlined />}></Menu.Item>
              </Menu>
            </Drawer>
          )}

          <Layout
            style={{
              marginLeft: isMobile ? 0 : collapsed ? 55 : 180,
              padding: "15px",
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
