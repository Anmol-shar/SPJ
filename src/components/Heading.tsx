import { Center } from "@chakra-ui/react";

interface CenteredHeadingProps {
  title: string;
}

const CenteredHeading = ({ title }: CenteredHeadingProps) => {
  return (
    <Center w="100%" py={4}>
      
<h1 style={{ color: "rgba(27, 141, 218, 1)",fontWeight:"bold" }}>{title}</h1>

      
    </Center>
  );
};

export default CenteredHeading;
