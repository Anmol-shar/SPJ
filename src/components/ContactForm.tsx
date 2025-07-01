import { useState } from "react";
import { Button, Field, Input, VStack, Text, Flex, Box, Image } from "@chakra-ui/react";
import SPJPIC2 from "../assets/SPJ3.jpg";
import CenteredHeading from "./Heading";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    contact: false,
    email: false,
  });

  const handleSubmit = () => {
    const nameError = name.trim() === "";
    const contactError = contact.trim() === "";
    const emailError = email.trim() === "";

    setErrors({
      name: nameError,
      contact: contactError,
      email: emailError,
    });

    if (!nameError && !contactError && !emailError) {
      setSubmitted(true);
      setName("");
      setContact("");
      setEmail("");
    } else {
      setSubmitted(false);
    }
  };

  return (
    <><CenteredHeading title="Contatct Us" /><Flex width="100%"  px="6rem" py="2rem" gap="2rem">
      <Field.Root required>
     <VStack
  align="start"
  gap={errors.name || errors.contact || errors.email ? "0" : "0.9rem"}
  px="2rem"
  py="3rem"
  borderWidth="thin"
  width="100%"
>

          <h1
            style={{
              color: "rgba(27, 141, 218, 1)",
              fontWeight: "bold",
              alignSelf: "center",
              fontStyle: "italic",
            }}
          >
            SPJ Vedatam
          </h1>

          <VStack w="90%" align="start" gap={0}>
          <Field.Label>
            Name <Field.RequiredIndicator />
          </Field.Label>
            <Input
              placeholder="Name.."
              size="lg"
              w="91%"
              borderWidth="thin"
              p="0.2rem"
              value={name}
              onChange={(e) => setName(e.target.value)}
              borderColor={errors.name ? "red" : "gray"} />
            {errors.name && <Text color="red" fontSize="0.8rem">Name is required</Text>}
          </VStack>
          <VStack w="90%" align="start" gap={0}>

          <Field.Label>
            Contact No. <Field.RequiredIndicator />
          </Field.Label>
            <Input
              placeholder="Contact.."
              size="lg"
              w="91%"
              borderWidth="thin"
              p="0.2rem"
              borderRadius="lg"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              borderColor={errors.contact ? "red" : "gray"} />
            {errors.contact && <Text color="red" fontSize="0.8rem">Contact is required</Text>}
          </VStack>

          <VStack w="90%" align="start" gap={0}>
          <Field.Label>
            Email <Field.RequiredIndicator />
          </Field.Label>
            <Input
              placeholder="Email.."
              size="lg"
              w="91%"
              borderWidth="thin"
              p="0.2rem"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderColor={errors.email ? "red" : "gray"} />
            {errors.email && <Text color="red" fontSize="0.8rem">Email is required</Text>}
          </VStack>

          <VStack w="100%" align="start" gap={0}>
            <Button bg="rgba(27, 141, 218, 1)" w="82%" color="white" onClick={handleSubmit}>
              Submit
            </Button>

            {submitted && (
              <Text fontSize="md" color="green" fontWeight="medium">
                Submitted successfully!
              </Text>
            )}
          </VStack>

          <Text fontSize="sm" fontStyle="italic">
            RERA ID - RC/REP/HARERA/GGM/927/659/2025/30
          </Text>
        </VStack>
      </Field.Root>

      <Box width="65%" borderRadius="lg" overflow="hidden" boxShadow="md">
        <Image src={SPJPIC2} alt="SPJ Image" objectFit="cover" width="100%" h="63.5vh" />
      </Box>
    </Flex></>
  );
};

export default ContactForm;
