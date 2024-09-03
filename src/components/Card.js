import { Heading, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack>
      <Box bg={"#fff"} borderRadius="lg">
        <Image src={imageSrc} alt={description} borderRadius="lg" />
        <Box p={5}>
          <Heading size="md" color="#000">
            {title}
          </Heading>
          <Text color="#000" fontSize="md" mt={3}>
            {description}
          </Text>
          <Text color="#000" mt="5">
            See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </Box>
      </Box>
    </VStack>
  );
};

export default Card;
