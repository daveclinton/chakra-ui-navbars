import * as React from "react";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const Navbar: React.FC = () => {
  return (
    <Flex
      pos="fixed"
      zIndex={1}
      top={0}
      left={0}
      alignItems="center"
      justifyContent={{ base: "space-between", lg: "center" }}
      width="100%"
      height="64px"
      bg="#19191c"
      color="#f9f9f9"
      boxSizing="border-box"
      p={{ base: "0 0 0 16px", lg: "auto" }}
    >
      <Box as="span"></Box>
      <Button>
        <span>Menu</span>
      </Button>
      <Heading>Awards</Heading>
      <Flex>
        <Button
          border={0}
          p={0}
          bg="transparent"
          color="inherit"
          cursor="pointer"
        >
          Skills
        </Button>
        <Button
          border={0}
          p={0}
          bg="transparent"
          color="inherit"
          cursor="pointer"
        >
          Awards
        </Button>
        <Button
          border={0}
          p={0}
          bg="transparent"
          color="inherit"
          cursor="pointer"
        >
          Projects
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
