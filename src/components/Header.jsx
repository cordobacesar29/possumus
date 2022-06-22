import React from "react";
import { Flex, Text, Heading, Button } from "@chakra-ui/react";

export const Header = (props) => {
  const displayName = props.user ? props.user.displayName : "";
  const name = displayName.split(" ")[0];
  return (
    <Flex justify="space-around" alignContent="center" p="1rem">
      <Heading color="#fcd702">Possumus Challenge</Heading>
      {props.user ? (
        <Flex direction="row" align="center">
          <Text> Welcome, {name}</Text>
          <Button colorScheme="yellow" onClick={props.logOut} marginLeft="1rem">Logout</Button>
        </Flex>
        ) : ( null )
      }
    </Flex>
  );
}