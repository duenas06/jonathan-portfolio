import {
  Box,
  Heading,
  SlideFade,
  Link,
  LightMode,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import { FaEnvelope, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import Paragraph from "../../Paragraph";

const Profile = () => {
  return (
    <SlideFade in={true} offsetY={80}>
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          mb={3}
        >
          Hey , Roberto Dueñas
        </Heading>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          Backend developer focused on Javascript,{" "}
          <Link
            color="green.500"
            href="https://www.nodejs.org"
            isExternal
            fontWeight="500"
          >
            Nodejs,
          </Link>{" "}
          <Link
            color="green.500"
            href="https://www.reactjs.org"
            fontWeight="500"
            isExternal
          >
            React
          </Link>
          . I work as a Backend developer and have a dream of becoming a Full Stack Developer. You’ve found my personal website
          on the internet.
        </Paragraph>
        <Box mt={10}>
          <LightMode>
            <ButtonGroup>
              <Button
                colorScheme="green"
                bg="green.500"
                href="aduenas246@gmail.com"
                borderRadius={5}
                p={3}
                as="a"
                leftIcon={<FaEnvelope />}
              >
                aduenas246@gmail.com
              </Button>
              <Button
                colorScheme="green"
                bg="green.500"
                href="https://www.linkedin.com/in/andre-duenas-72a445209/"
                borderRadius={5}
                p={3}
                as="a"
                leftIcon={<FaLinkedinIn />}
              >
                LinkedIn
              </Button>
            </ButtonGroup>
          </LightMode>
        </Box>
      </Box>
    </SlideFade>
  );
};

export default Profile;
