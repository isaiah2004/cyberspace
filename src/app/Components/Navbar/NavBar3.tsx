"use client";

// Navbar.tsx
import React from "react";
import {
  Box,
  Flex,
  Button,
  Link,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Your Logo
        </Heading>
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => console.log("Toggle menu")}
      >
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H3zm0 5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H3zm0 5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H3z"
          />
        </svg>
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Flex align="center" justify="space-between">
          <Link href="#" p={2}>
            Home
          </Link>
          <Link href="#" p={2}>
            About
          </Link>
          <Link href="#" p={2}>
            Services
          </Link>

          {/* Mega Menu */}
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    transform="translate(0 -9)"
                  >
                    <circle
                      cx="3"
                      cy="11"
                      r="1"
                      fill="#000"
                      fill-opacity=".36"
                    />
                    <circle
                      cx="3"
                      cy="21"
                      r="1"
                      fill="#000"
                      fill-opacity=".36"
                    />
                    <circle
                      cx="3"
                      cy="15"
                      r="1"
                      fill="#000"
                      fill-opacity=".36"
                    />
                  </g>
                </svg>
              }
            >
              Mega Menu
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link href="#">Category 1</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#">Category 2</Link>
              </MenuItem>
              {/* Add more categories as needed */}
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
