// import Image from "next/image";
// import styles from "./page.module.css"

// import Head from "next/head";

import { Heading, Flex, Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import WithSubnavigation from "./Components/Navbar/NavBar";
import StatsGridWithImage from "./Components/Stats/StatsGridWithImage";
import GridListWithHeading from "./Components/GridList/GridListWithHeading";
import LargeWithLogoCentered from "./Components/Footer/LargeWithLogoCentered";
import ContactFormWithSocialButtons from "./Components/Contact/ContactFormWithSocialButtons";

export default function Home() {
  return (
    <main>
      
      <WithSubnavigation />
      <Flex
        height="80vh"
        alignItems="center"
        justifyContent="center"
        textAlign={"center"}
        direction={"column"}
        color={"#FEFEFE"}
        backgroundImage={"url(/Images/CyberSecHome.jpg)"}
        backgroundSize="cover"
      >
        <Heading letterSpacing={10} py={1}>
          CYBERSEC
        </Heading>
        <Heading py={5} px={2}> The First fully integrated AI platform In India</Heading>

        <Button colorScheme="teal" size="md" width="sm">
          XDR
        </Button>
      </Flex>
      <StatsGridWithImage/>
      <GridListWithHeading/>
      <ContactFormWithSocialButtons/>
      <LargeWithLogoCentered/>
    </main>
  );
}
