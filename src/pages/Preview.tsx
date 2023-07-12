import { Box, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Preview = () => {
  return (
    <>
      <Box
        bg="#623bfd"
        height="40vh"
        borderRadius="0px 0px 20px 20px"
        width="100%"
        position="fixed"
      >
        <Box
          display="flex"
          bg="#ffffff"
          justifyContent="space-between"
          borderRadius="5px"
          mx="2"
          px="2"
          my="2"
          py="2"
        >
          <NavLink to="/">
            <Button color="#623bfd" variant="outline">
              Back To Editor
            </Button>
          </NavLink>
          <Button bg="#623bfd" color="white" variant="solid">
            Share Link
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Preview;
