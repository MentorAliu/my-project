import {
  UsersHeader,
  UsersTable,
} from '../components/pageCompoents/users'
import { Box } from '@chakra-ui/react'
import { useFetch } from '../hooks/useFetch'

export const Users = () => {
  const { data, isLoading, error } = useFetch('users')

  return (
    <Box width="full">
      <UsersHeader />
      <UsersTable />
    </Box>
  )
}
