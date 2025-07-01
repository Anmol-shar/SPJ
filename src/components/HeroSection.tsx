import { HStack, Box,Text, Image, Heading } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import SPJPIC from "../assets/SPJ_Vedatam.png.jpg";

const HeroSection = () => {
  const navItems = [
    "Overview",
    "Highlights",
    "Gallery",
    "Price List",
    "Amenities",
    "Location",
    "Floor Plans",
  ];

  return (
    <>

   <HStack
  w="100vw"
  maxW="100%"
  justifyContent="space-between"
  bgColor="rgba(27, 141, 218, 1)"
  py="1rem"
  px="2rem"
  color="white"
>
  <Image src={Logo} alt="SPJ"   />

  <HStack gap="1.5rem" >
    {navItems.map((item, index) => (
      <Text key={index}  fontWeight="bold"  fontSize="3xl"  cursor="pointer">
        {item}
      </Text>
    ))}
  </HStack>

  <Heading size="md">0987890987</Heading>
</HStack>
<Box w="100%"   overflow="hidden">
  <Image 
    src={SPJPIC} 
    alt="SPJ" 
    w="100%" 
    h="100%" 
    objectFit="cover" 
  />
</Box>

</>

  );
};

export default HeroSection;
