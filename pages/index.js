import Head from "next/head";
import {
  Box,
  Stack,
  HStack,
  Text,
  Container,
  ButtonGroup,
  IconButton,
  Link,
  Divider,
  useColorMode,
  Image
} from "@chakra-ui/react";
import React, { useEffect} from "react";

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/router";

const Links = [
  {
    name: "HOME",
    route: "/",
  },
  {
    name: "PROFILE",
    route: "/profile",
  },
  {
    name: "PAINTINGS",
    route: "/paintings",
  },
  {
    name: "PENCILS",
    route: "/pencils",
  },
  {
    name: "CONTACT",
    route: "/",
  },
];


export default function Home() {
  let router = useRouter();
  let { asPath } = router;
  const navigationItem = (
    <>
      {Links.map((link) => (
        <Link
          href={link.route}
          key={link.name}
          fontSize="1.4vw"
          color="white"
          p={1}
          _hover={link.name=="PAINTINGS"? 
          { transitionDuration: ".2s", fontSize:"1.1vw", paddingInline:"1.3vw", transform: "scale(1.4)", overflow: "hidden"}:
          { transitionDuration: ".2s", fontSize:"1.1vw", paddingInline:"1.1vw", transform: "scale(1.5)", overflow: "hidden"} }
          letterSpacing={2}
          fontFamily="sans-serif"
          rounded={"md"}
          currentPath={asPath}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
  return (
    <>
    <div>
    <Head>
      <title>Jonathan | Home</title>
      <meta
        name="description"
        content="Tribiana | UI/UX Designer"
      />
      <meta property="og:type" content="website" />
      <meta name="robots" content="follow, index" />
      <meta
        property="og:title"
        content="Tribiana | UI/UX Designer"
      />
      <meta property="og:image" content="/meta-image.jpg" />
    </Head>
    <main>
      <Container maxW="102vw" maxH="100vh" border="2px" borderColor={"white"}
       background= "linear-gradient(to bottom, #FFFFFF 50%, #000000 50%)">
        <Container maxW="container.lg"  align="center">
        <Stack
            align="center"
            marginTop="20vh"
          >
        <HStack
         align="center"
         spacing="0"
         >
            <Image 
            src={"/facew.png"} 
            alt='Dan Abramov'
            width="25vw" 
            height="38vh"/>

            <Image 
            src={"/faceb.png"} 
            alt='Dan Abramov'
            width="25vw" 
            height="38vh" />
        </HStack>
        </Stack>
        <Image
        src={"/creativew.png"} 
        alt='Dan Abramov'
        width="15vw" 
        height="18vh" 
        mb="5vh"/>
        </Container>
        <Box
        role="contentinfo"
        marginTop="-13vh"
        mx="auto"
        maxW="7xl"
        py="20"
        px={{ base: "4", md: "8" }}
        >
        <Container maxW="container.lg" mt="1vh">
          <Stack
            spacing="4.2"
            align="center"
          >
             <HStack
                as={"nav"}
                spacing={5}
              >
                {navigationItem}
              </HStack>
              <ButtonGroup variant={"solid"} colorScheme={"gray"} spacing={2}>
            <IconButton
                as="a"
                href="https://www.instagram.com/jonathan.tribiana.art/"
                aria-label="instagram"
                backgroundColor="#C21975"
                size={"sm"}
                borderRadius={25}
                icon={<FaInstagram fontSize="1.4vw" color="white" />}
              />
              <IconButton
                as="a"
                href="https://www.facebook.com/profile.php?id=100080270886527"
                aria-label="Facebook"
                borderRadius={20}
                size={"sm"}
                backgroundColor="#1877F2"
                icon={<FaFacebook fontSize="1.4vw" color="white"/>}
              />
              <IconButton
                as="a"
                href="https://www.youtube.com/"
                aria-label="Youtube"
                borderRadius={25}
                size={"sm"}
                backgroundColor="red"
                icon={<FaYoutube fontSize="1.4vw" color="white" />}
              />
            </ButtonGroup>
          </Stack>

        </Container>
        </Box>
      </Container>
    </main>
  </div>
</>
  )
}
