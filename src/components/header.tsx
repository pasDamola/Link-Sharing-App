/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Avatar,
  Button,
  Flex,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { LinkIcon, AtSignIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <Flex
      bg="#f0f2f5"
      justify="space-between"
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
      <HStack spacing="3">
        {/* <NavLink to="/">
          <Tag size="sm" variant="unstyled" colorScheme="purple">
            <TagLeftIcon as={LinkIcon} />
            <TagLabel>Links</TagLabel>
          </Tag>
        </NavLink>
        <NavLink to="/profile">
          <Tag size="sm" variant="unstyled" colorScheme="purple">
            <TagLeftIcon as={AtSignIcon} />
            <TagLabel>Profile Details</TagLabel>
          </Tag>
        </NavLink> */}
        <NavLink to="/">
          <Button
            size="sm"
            _hover={{
              background: "purple",
              color: "white",
            }}
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
            _hover={{
              background: "purple",
              color: "white",
            }}
            leftIcon={<AtSignIcon />}
            colorScheme="purple"
            variant="unstyled"
          >
            Profile Details
          </Button>
        </NavLink>
      </HStack>
      <NavLink to="/preview">
        <Button colorScheme="purple" variant="outline">
          Preview
        </Button>
      </NavLink>
    </Flex>
  );
}
