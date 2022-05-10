import { Heading, SlideFade, List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Timeline = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Timeline
      </Heading>
      <Heading mt={10} mb={5} as="h2" size="md">
        2021
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Working as part-time Backend Developer
        </ListItem>
      </List>
      <Heading mt={10} mb={5} as="h2" size="md">
        2020
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />2 Month internship at
          Black Bear Securities as a Backend Developer
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Undergraduate College
        </ListItem>
      </List>
    </SlideFade>
  );
};

export default Timeline;
