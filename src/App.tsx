import * as React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Box bg="#3b3d43" h="100vh">
        <Navbar />
      </Box>
    </ChakraProvider>
  );
};

export default App;
