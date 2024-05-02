import { Box, Flex, Heading, Text, Link, Image, VStack, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={5}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
        <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ1NzY2NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" mx="auto" alt="Profile Image" />
        <VStack spacing={4} align="center" mt={5}>
          <Heading as="h1" size="xl">
            John Doe
          </Heading>
          <Text fontSize="lg">Software Developer</Text>
          <Text textAlign="center">Passionate about building scalable software and complex systems. I specialize in full-stack development and love working with React and Node.js.</Text>
        </VStack>
      </Box>
      <Box mt={5}>
        <Heading as="h2" size="lg">
          Connect with me
        </Heading>
        <Flex justify="center" mt={3}>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} m={1} />
          </Link>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} m={1} />
          </Link>
          <Link href="mailto:johndoe@example.com">
            <IconButton aria-label="Email" icon={<FaEnvelope />} m={1} />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;
