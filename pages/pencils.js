import Head from "next/head";
import {
  Box,
  Stack,
  HStack,
  VStack,
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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Zoom } from '@mui/material';

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

const Pics = [
    {
      name: "penc1",
      sourc: "/penc1.jpeg",
    },
    {
      name: "penc2",
      sourc: "/penc2.jpeg",
  
    },
    {
      name: "penc3",
      sourc: "/penc3.jpeg",
      rows: 2,
    },
    {
        name: "penc4",
        sourc: "/penc4.jpeg",
        rows: 3,
        cols: 2,
    },
    {
        name: "penc5",
        sourc: "/penc5.jpeg",
    },
    {
      name: "penc6",
      sourc: "/penc6.jpg",
    },
  ];


export default function Paintings() {
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
      <title>Jonathan | Paintings</title>
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
        
        <Text fontSize="5.5vw" opacity="10%" letterSpacing={10} marginBottom={"-3.9vh"}>PENCILS</Text>
        :
        <Text fontSize="5.5vw" opacity="10%" letterSpacing={10} marginBottom={"-3.9vh"}>PENCILS</Text>}

            <ImageList sx={{ width: 500, height: 400 }} cols={3} variant="quilted"rowHeight={97}>
            {Pics.map((item) => (
                <ImageListItem key={item.sourc} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                    src={`${item.sourc}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.sourc}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>
        
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
            <ButtonGroup  variant={"solid"} colorScheme={"blackAlpha"} spacing={1}>
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
