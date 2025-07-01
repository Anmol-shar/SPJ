// components/ServicesGrid.tsx
import { HStack,VStack, Box,Image } from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";
import SPJPIC2 from "../../assets/SPJ_Vedatam2.jpg";



import { FaLocationDot } from "react-icons/fa6";
import { TbCoinRupeeFilled } from "react-icons/tb";
 
import { PiBuildingsFill } from "react-icons/pi";
import { LuLandPlot } from "react-icons/lu";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { MdPayments } from "react-icons/md";
import CenteredHeading from "../Heading";
import FeatureList from "../feature/Feature";

const ServicesGrid = () => {
  const services = [
    {
      icon: FaLocationDot,
      title: "Location",
      description:
        "Sector 14, Gurgaon",
    },
    {
      icon: TbCoinRupeeFilled,
      title: "Starting Price",
      description:
        "1.50 Cr* Onwards",
    },
    {
      icon: PiBuildingsFill,
      title: "Starting Size",
      description:
        "608 Sq. Ft.* Onwards",
    },
 
     
  ];
  const servicess = [
    {
      icon: LuLandPlot,
      title: "Land Area",
      description:
        "4.15 Acres*",
    },
    {
      icon: GrStatusDisabledSmall,
      title: "Status",
      description:
        "New Launch",
    },
    {
      icon: MdPayments,
      title: "Payment Plan",
      description:
        "Flexible Payment Plan",
    },
 
     
  ];

  return (
    <><VStack w="80%" p="1rem">


      <HStack w="90%" gap="2rem" p="1rem" justifyContent="space-between">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </HStack>
      <HStack w="90%" gap="2rem" p="1rem" justifyContent="space-between">

        {servicess.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </HStack>

    </VStack><CenteredHeading title="Highlights" />
    <HStack w="90%" h="70vh"  px="6rem" gap={6} alignSelf="center"  justifyContent="space-between">
      <Box minW="60%" h="62vh"  borderRight="1px solid black">
  <Image
    src={SPJPIC2}
    alt="SPJ Vedatam"
    w="100%"
    h="100%"
    objectFit="cover" 
  />
      </Box>
      <FeatureList/>
 

      </HStack></>
    
  );
};

export default ServicesGrid;
