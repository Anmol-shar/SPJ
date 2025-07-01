import { VStack, HStack, Text, Icon  } from '@chakra-ui/react';
import { FaRegStar } from "react-icons/fa";
const FeatureList = () => {
  const features = [
    "Premium retail shops designed for optimal functionality",
    "Excellent connectivity to major business hubs",
    "State-of-the-art infrastructure with modern amenities",
    "High visibility for retail spaces, ensuring a steady flow of customers",
    "Ample parking spaces for business owners and visitors",
    "Premium Commercial Property in Sector 14 Gurgaon",
    "Centralized Services",
    "3-Level Car Parking",
    "Exceptional Connectivity",
    "Elegant and Luxurious Ambiance",
    "World-class Facilities",
  ];

  return (
      <VStack gap={4} w="100%" align="start" px="0.5rem">
        {features.map((feature, index) => (
          <HStack
                key={index}
                gap={4}
                p={4}
                bg="gray.50"
                borderRadius="md"
                align="flex-start"
            >
                <Icon
                    as={FaRegStar}
                    boxSize={20} />
                <Text
                    fontSize="1rem"
                    lineHeight="1.5"
                    fontStyle="italic"
                >
                    {feature}
                </Text>
            </HStack>
        ))}
      </VStack>
  );
};

export default FeatureList;