import { Flex, Image, Container, Box, Heading, Text, useColorModeValue as mode, } from "@chakra-ui/react"
import { LoginForm } from "../../components/LoginPage/LoginForm"
import { VerificationCode } from "../../components/LoginPage/VerificationCode"

import loginStyle from "../../styles/Login.module.css"

const index = () => {
    return (
        <Flex>
            <Box boxSize="sm" w="50%">
                <Image src="https://images.unsplash.com/photo-1629045198735-9d1c675e6d5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" w='100%' h="100vh" alt="Segun Adebayo" />
            </Box>
            <Box className={loginStyle.show} w="50%">
                <Flex h="100vh" align="center">
                    <Container>
                        <Heading as="h2" size="2xl" mb={10} color="#2b6cb0">
                            Log in
                        </Heading>
                        <LoginForm mb={10} />
                        <Flex justifyContent="center">
                            <Box as="a" color={mode('blue.600', 'blue.200')} fontWeight="semibold" fontSize="lg">
                                Forgot Password?
                            </Box>
                        </Flex>
                    </Container>
                </Flex>
            </Box>
            <Box className={loginStyle.hide} w="50%">
                <Flex h="100vh" align="center">
                    <Container>
                        <Heading as="h3" size="lg" mb={5}>
                            Two-Factor Authentication
                        </Heading>
                        <Text fontSize="lg" fontWeight="semibold" mb={5}>Please enter a valid authentication or recovery code to verify your identity.</Text>
                        <VerificationCode mb={10} />
                        <Flex justifyContent="center">
                            <Text fontSize="lg" fontWeight="semibold">Still can't get in?</Text> &nbsp; &nbsp;
                            <Box as="a" color={mode('blue.600', 'blue.200')} fontWeight="semibold" fontSize="lg">
                                Contact Admin
                            </Box>
                        </Flex>
                    </Container>
                </Flex>
            </Box>
        </Flex>
    )
}

export default index
