/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Avatar, Button, Flex, HStack, Box } from "@chakra-ui/react";
import { LinkIcon, AtSignIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <Flex
      bg="#f0f2f5"
      justify="space-between"
      alignItems="center"
      py="2"
      px="4"
      borderRight="1px solid #f2f2f2"
      color="#54656f"
    >
      <Avatar
        boxSize="40px"
        name="Clara Fiona"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwZmVtYWxlJTIwaGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <HStack spacing={4}>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#efecfe" : "",
              color: isActive ? "#8876d7" : "#4b4f56",
              border: isActive ? "none" : "",
            };
          }}
        >
          <Box
            height="24px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="none"
            px="8px"
            borderRadius="2px"
            fontSize="14px"
            fontWeight="semibold"
            _hover={{
              bg: "#efecfe",
              color: "#8876d7",
            }}
          >
            <LinkIcon />
            Links
          </Box>
        </NavLink>
        <NavLink to="/profile">
          <Box
            as="button"
            height="24px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="1px"
            px="8px"
            borderRadius="2px"
            fontSize="14px"
            fontWeight="semibold"
            bg="#f5f6f7"
            borderColor="#ccd0d5"
            color="#4b4f56"
            _hover={{ bg: "#ebedf0" }}
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
          >
            <AtSignIcon />
            Profile Details
          </Box>
        </NavLink>
      </HStack>
      <NavLink to="/preview">
        <Button size="xs" variant="outline" colorScheme="purple">
          Preview
        </Button>
      </NavLink>
    </Flex>
  );
}
