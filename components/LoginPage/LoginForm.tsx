import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    HTMLChakraProps,
    Input,
    Stack,
} from '@chakra-ui/react'
import { PasswordField } from './PasswordField'

export const LoginForm = (props: HTMLChakraProps<'form'>) => (
    <chakra.form
        onSubmit={(e) => {
            e.preventDefault()
            // if () {

            // }
        }}
        {...props}
    >
        <Stack spacing="6">
            <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input name="email" type="email" autoComplete="email" placeholder="Enter your email" required />
            </FormControl>
            <PasswordField />
            <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                Login
            </Button>
        </Stack>
    </chakra.form>
)