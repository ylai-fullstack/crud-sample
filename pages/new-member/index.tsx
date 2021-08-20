import { Box, Container, Heading, HStack } from "@chakra-ui/layout"
import { Step } from "../../components/AddNewMemberPage/Step"

import newMemberStyle from "../../styles/NewMember.module.css"

const index = () => {
    return (
        <div className={newMemberStyle.wrapper}>
            <Box as="a" className={newMemberStyle.linkPosition} color="#2b6cb0" fontWeight="semibold" fontSize="md">
                Back to Members list
            </Box>
            <Box borderWidth="2px" bgColor="#fff" maxW="80%" mx="auto">
                <Container maxW="container.xl">
                    <Heading as="h3" size="lg">Add New Member</Heading>
                    <Box mx="auto" maxW="3xl" py="10" px={{ base: '6', md: '8' }}>
                        <nav aria-label="Progress steps">
                            <HStack as="ol" listStyleType="none" spacing="0">
                                <Step>1. Personal info</Step>
                                <Step>2. Contact info</Step>
                                <Step>3. Church info</Step>
                            </HStack>
                        </nav>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default index
