import { Button, Flex } from '@chakra-ui/react'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

export const UsersFooter = ({ handleBackwards, handleForwards }) => {
  return (
    <Flex mt="4">
      <Flex ml="auto" gap="4">
        <Button bg="gray.50" rounded="full">
          <ArrowBack />
        </Button>
        <Button bg="gray.50" rounded="full">
          <ArrowForward />
        </Button>
      </Flex>
    </Flex>
  )
}
