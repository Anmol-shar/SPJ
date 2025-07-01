import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="rgba(27, 141, 218, 1)" color="white" py="1.5rem" px="2rem" textAlign="center">
      <Text fontSize="sm">
        <Text as="span" fontWeight="bold">
          HARERA
        </Text>
        RERA-GRG-PROJ-1833-2024
      </Text>

      <Text fontSize="sm" mt="0.5rem" maxW="900px" mx="auto">
        Disclaimer : SPJ Vedatam: This website is meant only for information purposes.
        It should not be considered or claimed as an official site. This website belongs
        to an authorized channel partner.
        <Link href="/privacy-policy" color="blue"  >
          Privacy Policy
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
