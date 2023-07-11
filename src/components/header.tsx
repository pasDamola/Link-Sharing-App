/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Avatar, Button, Flex, HStack } from "@chakra-ui/react";
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
        <NavLink to="/">
          <Button
            size="sm"
            leftIcon={<LinkIcon />}
            colorScheme="purple"
            variant="unstyled"
          >
            Links
          </Button>
        </NavLink>
        <NavLink to="/profile">
          <Button
            size="sm"
            leftIcon={<AtSignIcon />}
            colorScheme="purple"
            variant="outline"
          >
            Profile Details
          </Button>
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
