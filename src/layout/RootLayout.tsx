import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { LeftPanel } from "../components/LeftPanel";

const RootLayout = () => {
  return (
    <>
      <Flex direction="column">
        <Header />
        <Flex>
          <LeftPanel />
          <Outlet />
        </Flex>
      </Flex>
    </>
  );
};

export default RootLayout;
