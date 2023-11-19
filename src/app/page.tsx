// import Image from "next/image";
// import styles from "./page.module.css";

// import Head from "next/head";

import { Heading, Flex, Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import WithSubnavigation from './Components/Navbar/NavBar'

export default function Home() {
  return (
    <main>
      <WithSubnavigation />
      <Flex height="80vh" alignItems="center" justifyContent="center">
        <Heading letterSpacing={10}>CYBERSEC</Heading>
      </Flex>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
    </main>
  );
}
