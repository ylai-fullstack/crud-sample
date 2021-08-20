import {
    Button,
    chakra,
    FormControl,
    HTMLChakraProps,
    Input,
    Stack,
} from '@chakra-ui/react'

export const VerificationCode = (props: HTMLChakraProps<'form'>) => (
    <chakra.form
        onSubmit={(e) => {
            e.preventDefault()
            // your login logic here
        }}
        {...props}
    >
        <Stack spacing="6">
            <FormControl id="code">
                <Input name="code" type="number" placeholder="Enter code" required />
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
                Verify
            </Button>
        </Stack>
    </chakra.form>
)