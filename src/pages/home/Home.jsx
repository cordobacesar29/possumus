import React, {useEffect, useState} from "react";
import { useDisclosure } from '@chakra-ui/react'
import { 
  Text, Flex, Table, TableContainer,
  Tbody, Td, Thead, Tr, TableCaption,
  Button, Spinner, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { getPeople, getDetails } from "../../services/api-services";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Home = () => {
  const [data, setData] = useState(undefined);
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [character, setCharacter] = useState(undefined);

  const moreInfo = (url) => {
    getDetails(url).then((data) => {
      setCharacter(data);
      onOpen();
    }
    );
  };
  const handleNext = () => {
    setLoading(true);
    setPage((data.next).slice(-1));
    setLoading(false);
  };
  const handlePrevious = () => {
    if(data.previous === null) {
      return;
    } else {
      setLoading(true);
      setPage((data.previous).slice(-1));
      setLoading(false);
    };
  };

  useEffect(() => {
    setLoading(true);
    getPeople(page).then((data) => {
      setData(data);
      setPeople(data.results);
      setLoading(false);
    }
    );
  }, [page]);

  return (
    <Flex justifyContent="center" direction="row" mt="3rem">
      {loading ? 
        <Spinner  
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.100'
          color='#fcd702'
          size='xl'
        /> 
        :
        <Flex>
          <TableContainer 
            border="1px solid #fcd702" 
            p="0rem 2rem"
            borderRadius="8px"
          >
            <Table>
              <TableCaption>
                <Flex justify="center">
                  {page > 1 ?
                  <Button 
                    border="1px solid #fcd702"
                    onClick={handlePrevious}
                  >
                    Previous
                  </Button>
                  : null
                  }
                  {page < 9 ?
                  <Button 
                    border="1px solid #fcd702"
                    onClick={handleNext}
                    marginLeft="1rem"
                  >
                    Next
                  </Button>
                  : null 
                  }
                </Flex>
              </TableCaption>
              <Thead>
                <Tr color="#fcd702">
                  <Td>Character Name</Td>
                  <Td>More Information</Td>
                </Tr>
              </Thead>
              <Tbody >
                {
                people.map((p) => {
                  return (
                    <Tr key={p.name}>
                      <Td>{p.name}</Td>
                      <Td textAlign="end">
                        <Button 
                          colorScheme='yellow' 
                          variant='ghost' size="xs" 
                          onClick={() => moreInfo(p.url)}
                        >
                          <ExternalLinkIcon  marginRight=".5rem" color="#fcd702"/>
                          <Text>+ info</Text>
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      }
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{character && character.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              <Text><b>Height: </b>{character && character.height}</Text>
              <Text><b>Mass: </b>{character && character.mass}</Text>
              <Text><b>Hair color: </b>{character && character.hair_color}</Text>
              <Text><b>Eye color: </b>{character && character.eye_color}</Text>
              <Text><b>Skin color: </b>{character && character.skin_color}</Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='yellow' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}