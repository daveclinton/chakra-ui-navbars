import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";

function navbar() {
  return (
    <Flex flexDir="row" gap="100px">
      <Box>
        <Link>LOGO</Link>
      </Box>
      <Flex flexDir="row">
        <Link>Home</Link>
        <Link>Portfolio</Link>
        <Button>CALL-ME</Button>
      </Flex>
    </Flex>
  );
}

export default navbar;
