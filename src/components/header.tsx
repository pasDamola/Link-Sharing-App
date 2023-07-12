/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Avatar, Button, Flex, HStack, Box, Text } from "@chakra-ui/react";
import { LinkIcon, AtSignIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <Flex
      bg="#ffffff"
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
              borderRadius: isActive ? "2px" : "",
            };
          }}
        >
          <Box
            height="24px"
            as="button"
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
              borderRadius: "2px",
            }}
          >
            <HStack>
              <LinkIcon />
              <Text>Links</Text>
            </HStack>
          </Box>
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#efecfe" : "",
              color: isActive ? "#8876d7" : "#4b4f56",
              borderRadius: isActive ? "2px" : "",
            };
          }}
        >
          <Box
            height="24px"
            as="button"
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
              borderRadius: "2px",
            }}
          >
            <HStack>
              <AtSignIcon />
              <Text>Profile Details</Text>
            </HStack>
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
