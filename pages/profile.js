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
  Heading,
  Image
} from "@chakra-ui/react";


import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";


import Timeline from "../components/pages/index/Timeline";
import Profile from "../components/pages/index/Profile";
import Navbar from "../components/Layout/Navbar";
import { useRouter } from "next/router";
import { transform } from "framer-motion";

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
  const { colorMode, toggleColorMode } = useColorMode();
  const navigationItem = (
    <>
      {Links.map((link) => (
        <Link
          href={link.route}
          key={link.name}
          position= "relative"
          zoom
          _hover={link.name=="PAINTINGS"? 
          { transitionDuration: ".2s", fontSize:"1.1vw", paddingInline:"1.3vw", transform: "scale(1.4)", overflow: "hidden"}:
        { transitionDuration: ".2s", fontSize:"1.1vw", paddingInline:"1.1vw", transform: "scale(1.5)", overflow: "hidden"} }
          fontSize="1.2vw"
          p={1}
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
      <title>Jonathan | Profile</title>
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
      <Container maxW="container.lg">
        <Navbar/>
       
        <Container maxW="container.lg" marginTop="-8vh">
        <Box
            align="center"
            spacing={0}
            direction="column"
            padding={0}
          >
        {colorMode === "light" ? 
        
        <Image 
            src={"/creativeb.png"} 
            alt='Dan Abramov'
            width="11vw" 
            height="14vh" 
            marginBottom="-2vh"/>: 

            <Image 
            src={"/creativew.png"} 
            alt='Dan Abramov'
            width="11vw" 
            height="14vh" 
            marginBottom="-2vh"/>}
            
        {colorMode === "light" ? 
        
        <Text fontSize="5.5vw" opacity="10%" marginBottom={"-2vh"} letterSpacing={10}>PROFILE</Text>
        :
        <Text fontSize="5.5vw" opacity="50%" marginBottom={"-2vh"} letterSpacing={10}>PROFILE</Text>}

        <Image 
            src={"/profile.png"} 
            alt='Dan Abramov'
            width="6vw"
            height="10vh" />
        <Box
        role="contentinfo"
        mt={-5}
        mx="auto"
        marginTop="1vh"
        maxW="xl"
        px={{ base: "10", md: "20" }}
        >
        <Text fontFamily="sans-serif" align="justify"> Hi I am Jonathan Tribiana from Philippines. 
        Since my college days in Fine Arts I’m inspired by the paintings of the old masters. 
        This is what I strive to recreate in my own work; to better my understanding and pass the knowledge on.</Text>
        <Text  fontFamily="sans-serif" align="justify">I have been a professional Artist for the last 17 years. 
        It’s all I do. It’s been an amazing ride and has taken me around the world. I was born in the United States and moved to Australia when I was 10 years old. I stayed in Australia for 20+ years where I studied my craft. My career began in Perth, Western Australia. 
        In the years that followed my first solo exhibition in 2002, I have enjoyed exhibiting my work and painting for clients internationally.</Text>
        </Box>
        </Box>
        </Container>
        <Box
        role="contentinfo"
        mt={-5}
        mx="auto"
        maxW="7xl"
        py="8"
        px={{ base: "4", md: "8" }}
        >
        <Container maxW="container.lg">
          <Stack
            align="center"
            spacing={0}
            direction="column"
            padding={0}
            pb={4}
          >
             <HStack
                marginTop={"2"}
                as={"nav"}
                spacing={2}
              >
                {navigationItem}
              </HStack>
            <ButtonGroup variant={"solid"} colorScheme={"blackAlpha"} spacing={1}>
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
