import {  Grid, GridItem, Icon, Text, VStack } from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { BiExpand } from "react-icons/bi";

const Highlights = () => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4} p={6} bg="gray.50">
      <GridItem>
        <VStack gap={1} align="start">
          <Icon as={MdLocationOn} boxSize={6} color="blue.500" />
          <Text fontWeight="bold">Location</Text>
          <Text>Sector 14, Gurgaon</Text>
        </VStack>
      </GridItem>

      <GridItem>
        <VStack gap={1} align="start">
          <Icon as={FaRupeeSign} boxSize={6} color="green.500" />
          <Text fontWeight="bold">Starting Price</Text>
          <Text>1.50 Cr* Onwards</Text>
        </VStack>
      </GridItem>

      <GridItem>
        <VStack gap={1} align="start">
          <Icon as={BiExpand} boxSize={6} color="purple.500" />
          <Text fontWeight="bold">Starting Size</Text>
          <Text>608 Sq. Ft.* Onwards</Text>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Highlights;
