import * as React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const Navbar: React.FC = () => {
  const [isOpen, toggleMenu] = React.useState(false);

  return (
    <Flex
      pos="fixed"
      zIndex={1}
      top={0}
      left={0}
      alignItems="center"
      justifyContent={{ base: "center", md: "space-between" }}
      width="100%"
      height="64px"
      bg="#19191c"
      color="#f9f9f9"
      boxSizing="border-box"
      p={{ base: "0 0 0 16px", lg: "auto" }}
    >
      <Button
        border={0}
        bg="transparent"
        color="inherit"
        cursor="pointer"
        pos="absolute"
        top={0}
        left={0}
        placeItems="center"
        width="64px"
        height="64px"
        display={{ md: "none" }}
        onClick={() => toggleMenu(!isOpen)}
      >
        <span className="material-icons">Menu</span>
      </Button>
      <Heading fontSize="16px">Awards</Heading>
      {isOpen ? (
        <Flex
          pos="fixed"
          zIndex={3}
          top="0"
          left={0}
          w="270px"
          h="100%"
          p="20px"
          gap="8px"
          flexDir="column"
          alignItems="flex-start"
          bg="#000000"
          transition="translate 0.3s"
          visibility={{ md: "hidden" }}
        >
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
      ) : (
        <Flex
          display={{ base: "none", md: "block" }}
          pos="static"
          w="auto"
          bg="transparent"
          flexDir="row"
        >
          <Button
            border={0}
            p="0 8px"
            bg="transparent"
            color="rgba(255, 255, 255, 0.5)"
            cursor="pointer"
            _active={{ color: "inherit" }}
          >
            Skills
          </Button>

          <Button
            border={0}
            p="0 8px"
            bg="transparent"
            color="rgba(255, 255, 255, 0.5)"
            cursor="pointer"
            _active={{ color: "inherit" }}
          >
            Awards
          </Button>
          <Button
            border={0}
            p="0 8px"
            bg="transparent"
            color="rgba(255, 255, 255, 0.5)"
            cursor="pointer"
            _active={{ color: "inherit" }}
          >
            Projects
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
