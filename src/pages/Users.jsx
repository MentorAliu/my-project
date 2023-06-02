import {
  UsersHeader,
  UsersTable,
} from '../components/pageCompoents/users'
import { Box } from '@chakra-ui/react'

export const Users = () => {
  return (
    <Box width="full">
      <UsersHeader />
      <UsersTable />
    </Box>
  )
}
