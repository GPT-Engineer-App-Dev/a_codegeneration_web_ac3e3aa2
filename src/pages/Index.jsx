import { Box, VStack, Heading, Text, Input, Button, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInputText(e.target.value);

  const generateCode = () => {
    // Placeholder for code generation logic
    const code = `// Generated code based on input\nconsole.log("${inputText.replace(/"/g, '\\"')}");`;
    setOutputText(code);
    toast({
      title: "Code generated successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={5} p={10}>
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={2}>
          CodeGeneration.io
        </Heading>
        <Text fontSize="lg">Your AI-powered code generator</Text>
      </Box>

      <Box w="100%">
        <Text mb={2}>Enter your description:</Text>
        <Textarea placeholder="Describe the function or code you want to generate..." value={inputText} onChange={handleInputChange} />
      </Box>

      <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg" onClick={generateCode} isDisabled={!inputText}>
        Generate Code
      </Button>

      {outputText && (
        <Box w="100%">
          <Text mb={2}>Generated Code:</Text>
          <Textarea value={outputText} isReadOnly placeholder="Your generated code will appear here..." />
        </Box>
      )}
    </VStack>
  );
};

export default Index;
