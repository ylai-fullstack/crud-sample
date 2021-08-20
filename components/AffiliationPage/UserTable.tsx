import React from "react";
import {
  Container,
  Flex,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Text,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";

import AffiliationStyle from "../../styles/Affiliations.module.css";

// const { isOpen: isEditAffiliation, onOpen: onEditAffiliation, onClose: closeEditAffiliation, } = useDisclosure();
// const { isOpen: isDeleteAffiliation, onOpen: onDeleteAffiliation, onClose: closeDeleteAffiliation } = useDisclosure()

const UserTable = (props) => {
  const [value, setValue] = React.useState("");
  const {
    isOpen: isNewAffiliation,
    onOpen: onNewAffiliation,
    onClose: closeNewAffiliation,
  } = useDisclosure();
  const {
    isOpen: isEditAffiliation,
    onOpen: onEditAffiliation,
    onClose: closeEditAffiliation,
  } = useDisclosure();
  const {
    isOpen: isDeleteAffiliation,
    onOpen: onDeleteAffiliation,
    onClose: closeDeleteAffiliation,
  } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    // <table>
    //     <thead>
    //         <tr>
    //             <th>ID</th>
    //             <th>Name</th>
    //             <th>Username</th>
    //             <th>Actions</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         { props.users.length > 0 ? (
    //             props.users.map(user => {
    //                 const {id, name, username} = user;
    //                 return (
    //                     <tr key={id}>
    //                         <td>{id}</td>
    //                         <td>{name}</td>
    //                         <td>{username}</td>
    //                         <td>
    //                             <button onClick={() => props.deleteUser(id)}>Delete</button>
    //                             <button onClick={() => props.editUser(id, user)}>Edit</button>
    //                         </td>
    //                     </tr>
    //                 )
    //             })
    //         ) : (
    //             <tr>
    //                 <td colSpan={4}>No users found</td>
    //             </tr>
    //         )
    //         }
    //     </tbody>
    // </table>
    <div>
      <Container className={AffiliationStyle.wrapper} maxW="100%" mx="auto">
        <Flex justifyContent="space-between" py="5" maxW="90%" mx="auto">
          <Heading as="h3" size="lg" mb={5}>
            Affiliations
          </Heading>
          <Button colorScheme="blue" size="lg" onClick={onNewAffiliation}>
            New Affiliation
          </Button>
        </Flex>
        <Box borderWidth="2px" bgColor="#fff" maxW="90%" mx="auto">
          <Table>
            <Thead bgColor="gray.50" borderWidth="2">
              <Tr>
                <Th
                  fontSize="18px"
                  fontWeight="medium"
                  letterSpacing="revert"
                  textTransform="capitalize"
                >
                  Name
                </Th>
                <Th
                  fontSize="18px"
                  fontWeight="medium"
                  letterSpacing="revert"
                  textTransform="capitalize"
                >
                  Initials
                </Th>
                <Th
                  fontSize="18px"
                  fontWeight="medium"
                  letterSpacing="revert"
                  textTransform="capitalize"
                >
                  Area Required
                </Th>
                <Th
                  fontSize="18px"
                  fontWeight="medium"
                  letterSpacing="revert"
                  textTransform="capitalize"
                >
                  International
                </Th>
                <Th
                  fontSize="18px"
                  fontWeight="medium"
                  letterSpacing="revert"
                  textTransform="capitalize"
                >
                  Actions
                </Th>
              </Tr>
            </Thead>
            {/* <UserTable users={users} deleteUser={deleteUser} editUser={editUser} /> */}
            <Tbody>
              <Tr bgColor="gray.50">
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td>
                  <Flex>
                    <Link onClick={() => props.editUser(name)}>
                      <RiPencilFill className={AffiliationStyle.icons} />
                    </Link>
                    <Link onClick={() => props.deleteUser(name)}>
                      <FaTrash className={AffiliationStyle.icons} />
                    </Link>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Box maxW="90%" mx="auto" py="10">
          <Flex justifyContent="space-between" alignContent="flex-start">
            <Text as="p" fontSize="18px">
              12 Affiliations
            </Text>
            <Box>
              <Button
                colorScheme="gray"
                size="md"
                fontSize="18px"
                border="2px"
                borderColor="gray.50"
                mr="3"
              >
                Previous
              </Button>
              <Button
                colorScheme="gray"
                size="md"
                fontSize="18px"
                border="2px"
                borderColor="gray.50"
              >
                Next
              </Button>
            </Box>
          </Flex>
        </Box>
      </Container>
    </div>
  );
};

export default UserTable;