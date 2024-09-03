import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack>
      <Box bg={'#fff'} borderRadius="md">
        <Image src={imageSrc} alt={description} borderRadius="md" />
        <Box p={5}>
        <Heading size="md" color="#000">{title}</Heading>
        <Text color="#000" fontSize="sm" mt={3}>{description}</Text>
    <Text color="#000">See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
    </Box>
    </Box>
    </VStack>
  )
  
  
};

export default Card;
