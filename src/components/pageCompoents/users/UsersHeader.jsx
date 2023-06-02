import { Box, Flex, Input } from '@chakra-ui/react'
import React from 'react'

export const UsersHeader = () => {
  return (
    <Flex py="4" rounded="md" bg="white" boxShadow="md">
      <Box pl="2">
        <Input variant="filled" placeholder="Search Users" />
      </Box>
    </Flex>
  )
}
