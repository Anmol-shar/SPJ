import { Box, Heading, Text, HStack, Icon, VStack } from "@chakra-ui/react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <HStack
      w="100%"
      minW="40%"
      border="1px solid"
     borderRadius="md"
      align="stretch"
    >
        <Box
          bg="rgba(27, 141, 218, 1)"
          color="white"
          px={4}
          py={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minW="70px"
        >
          <Icon as={icon} boxSize={50} />
        </Box>

      <VStack p="1rem" align="start" gap={1}>
  <Text fontStyle="italic" fontSize="md">
    {title}
  </Text>
  <Heading size="md" fontWeight="bold">
    {description}
  </Heading>
</VStack>

    </HStack>
  );
};

export default ServiceCard;
