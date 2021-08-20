import * as React from 'react'
import { Container, Flex, Heading, Button, Link,
  Table, Thead, Tbody, Tr, Th, Td, Box, Text,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
  Input, useDisclosure, Stack, Textarea, Radio, RadioGroup,
  AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, AlertDialogCloseButton } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { AddAffiliation } from '@/components/AddAffiliation';

import AffiliationStyle from "../../styles/Affiliations.module.css"
import { useEffect } from 'react';

const index = () => {
  const table = [
    {
     name: 'Kapisanan ng mga Kabataan Tungo sa Kasakdalan International',
     initial: 'KKTK',
     required: 'No',
     international: 'Yes',
    },
  ]
  const [value, setValue] = React.useState("");
  const { isOpen: isNewAffiliation, onOpen: onNewAffiliation, onClose: closeNewAffiliation, } = useDisclosure();
  const { isOpen: isEditAffiliation, onOpen: onEditAffiliation, onClose: closeEditAffiliation, } = useDisclosure();
  const { isOpen: isDeleteAffiliation, onOpen: onDeleteAffiliation, onClose: closeDeleteAffiliation } = useDisclosure()
  const cancelRef = React.useRef()

  return (
    <div>
      <Flex h="100vh" flexDirection="column">
        <Flex flex="1" overflow="hidden">
          <Sidebar display={{ base: 'none', md: 'flex' }} />
          <Container className={AffiliationStyle.wrapper}  maxW="100%" mx="auto">
            <Flex justifyContent="space-between"  py="5" maxW="90%" mx="auto">
              <Heading as="h3" size="lg" mb={5}>Affiliations</Heading>
              <Button colorScheme="blue" size="lg" onClick={onNewAffiliation}>New Affiliation</Button>
            </Flex>
            <Box borderWidth="2px" bgColor="#fff" maxW="90%" mx="auto">
            <Table>
              <Thead bgColor="gray.50" borderWidth="2">
                <Tr>
                  <Th fontSize="18px" fontWeight="medium" letterSpacing="revert" textTransform="capitalize">Name</Th>
                  <Th fontSize="18px" fontWeight="medium" letterSpacing="revert" textTransform="capitalize">Initials</Th>
                  <Th fontSize="18px" fontWeight="medium" letterSpacing="revert" textTransform="capitalize">Area Required</Th>
                  <Th fontSize="18px" fontWeight="medium" letterSpacing="revert" textTransform="capitalize">International</Th>
                  <Th fontSize="18px" fontWeight="medium" letterSpacing="revert" textTransform="capitalize">Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {table.map((value, index) => {
                  return (
                  <Tr key={index} bgColor="gray.50">
                    <Td>{value.name}</Td>
                    <Td>{value.initial}</Td>
                    <Td>{value.required}</Td>
                    <Td>{value.international}</Td>
                    <Td><Flex>
                        <Link onClick={onEditAffiliation}>
                          <RiPencilFill className={AffiliationStyle.icons}/>
                        </Link>
                        <Link onClick={onDeleteAffiliation}>
                          <FaTrash className={AffiliationStyle.icons}/>
                        </Link>
                      </Flex>
                    </Td>
                  </Tr>
                  )
                })}
              </Tbody>
            </Table>
            </Box>
            <Box maxW="90%" mx="auto" py="10">
              <Flex justifyContent="space-between" alignContent="flex-start"> 
                <Text as="p" fontSize="18px">12 Affiliations</Text>
                <Box>
                  <Button colorScheme="gray" size="md" fontSize="18px" border="2px" borderColor="gray.50" mr="3">Previous</Button>
                  <Button colorScheme="gray" size="md" fontSize="18px" border="2px" borderColor="gray.50">Next</Button>
                </Box>
              </Flex>
            </Box>
          </Container>
        </Flex>
      </Flex>
      <Modal isOpen={isNewAffiliation} onClose={closeNewAffiliation}>
        <ModalOverlay/>
        <ModalContent borderRadius={0} maxW="45%" mx="auto" p={[8, 8, 8, 8]}>
          <ModalHeader as="h3" fontSize="25px" fontWeight="bold">Add New Affiliation</ModalHeader>
          <ModalBody>
            <Stack>
              <Text as="p" fontWeight="medium" pt={5}>Name</Text>
              <Input size="md" border="2px" maxW="100%"/>
              <Text as="p" fontWeight="medium" pt={5}>Initials</Text>
              <Input size="md" border="2px"/>
              <Text as="p" fontWeight="medium" pt={5}>Native Name (Optional)</Text>
              <Input size="md" border="2px"/>
              <Text as="p" fontWeight="medium" pt={5}>Description (Optional)</Text>
              <Textarea size="lg" border="2px"/>
            </Stack>
            <RadioGroup className="area_required" mb={7} mt={7}>
              <Text as="p" fontWeight="medium" mb={3}>Area Required</Text>
              <Stack direction="row" spacing={10}>
                <Radio colorScheme="purple" value="area_required_yes">Yes</Radio>
                <Radio colorScheme="purple" value="area_required_no">No</Radio>
              </Stack>
            </RadioGroup>
            <RadioGroup className="international" mb={5} mt={5}>
              <Text as="p" fontWeight="medium" mb={3}>International</Text>
              <Stack direction="row" spacing={10}>
                <Radio colorScheme="purple" value="international_yes">Yes</Radio>
                <Radio colorScheme="purple" value="international_no">No</Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>
          <ModalFooter d="flex" justifyContent="flex-start">
            <Button mr={5} colorScheme="blue">Save</Button>
            <Button colorScheme="gray" onClick={closeNewAffiliation}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isEditAffiliation} onClose={closeEditAffiliation}>
        <ModalOverlay/>
        <ModalContent borderRadius={0} maxW="45%" mx="auto" p={[8, 8, 8, 8]}>
          <ModalHeader as="h3" fontSize="25px" fontWeight="bold">Edit Affiliation</ModalHeader>
          <ModalBody>
            <Stack>
              <Text as="p" fontWeight="medium" pt={5}>Name</Text>
              <Input size="md" border="2px" maxW="100%"/>
              <Text as="p" fontWeight="medium" pt={5}>Initials</Text>
              <Input size="md" border="2px"/>
              <Text as="p" fontWeight="medium" pt={5}>Native Name (Optional)</Text>
              <Input size="md" border="2px"/>
              <Text as="p" fontWeight="medium" pt={5}>Description (Optional)</Text>
              <Textarea size="lg" border="2px"/>
            </Stack>
            <RadioGroup className="area_required" mb={7} mt={7}>
              <Text as="p" fontWeight="medium" mb={3}>Area Required</Text>
              <Stack direction="row" spacing={10}>
                <Radio colorScheme="purple" value="area_required_yes">Yes</Radio>
                <Radio colorScheme="purple" value="area_required_no">No</Radio>
              </Stack>
            </RadioGroup>
            <RadioGroup className="international" mb={5} mt={5}>
              <Text as="p" fontWeight="medium" mb={3}>International</Text>
              <Stack direction="row" spacing={10}>
                <Radio colorScheme="purple" value="international_yes">Yes</Radio>
                <Radio colorScheme="purple" value="international_no">No</Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>
          <ModalFooter d="flex" justifyContent="flex-start">
            <Button mr={5} colorScheme="blue">Save</Button>
            <Button colorScheme="gray" onClick={closeEditAffiliation}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AlertDialog motionPreset="slideInBottom" leastDestructiveRef={cancelRef} onClose={closeDeleteAffiliation} isOpen={isDeleteAffiliation} isCentered>
      <AlertDialogOverlay />
      <AlertDialogContent borderRadius={0}>
        <AlertDialogHeader mb={2} mt={3} fontWeight="bold">Delete Affiliation</AlertDialogHeader>
          {table.map((value, index) => {
            return (
              <AlertDialogBody mb={3}>
                Are you sure you want to delete <b>{value.initial}</b> ?
              </AlertDialogBody>
            )
          })}
          <AlertDialogFooter mb={3} d="flex" justifyContent="flex-start">
            <Button colorScheme="red" mr={3}>
              Yes, Delete
            </Button>
            <Button ref={cancelRef} onClick={closeDeleteAffiliation}>
              Cancel
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default index