import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar";

export const App = () => (
  <ChakraProvider>
    <Navbar />
  </ChakraProvider>
);
