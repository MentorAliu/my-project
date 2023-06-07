import { Box, Flex, Input } from '@chakra-ui/react'
import React from 'react'

export const UsersHeader = ({ handleSearch }) => {
  return (
    <Flex py="2" rounded="md" bg="white" boxShadow="md">
      <Box pl="2">
        <Input
          variant="filled"
          placeholder="Search Users"
          onChange={e => handleSearch(e.target.value)}
        />
      </Box>
    </Flex>
  )
}
