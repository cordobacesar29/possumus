import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useUser } from "../../context/UserContext";

export const Login = () => {
  const { googleSignIn } = useUser();
  return (
    <Flex direction="column" justifyContent="center" align="center">
      <Flex 
        as="form" 
        justifyContent="center" 
        direction="column"
        p="2rem"
        w="24rem"
        align="center"
        border="1px solid #fcd702"
        borderRadius="5px"
      >
        <Text>Sign in and enjoy our App</Text>
        <Button
          m="1rem" 
          onClick={googleSignIn}
        >
          Sign with Google
        </Button>
      </Flex>
    </Flex>
  );
}