import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  TableContainer,
  Spinner,
  Heading,
} from '@chakra-ui/react'
import { UsersTableRow } from './UsersTableRow'
import { useFetch } from '../../../hooks/useFetch'

export const UsersTable = () => {
  const { data, isLoading, error } = useFetch('users')

  const handleEditClick = id => {
    console.log(id)
  }

  if (isLoading) return <Spinner />
  if (error) return <Heading>{error}</Heading>

  return (
    <TableContainer
      bg="white"
      mt="6"
      rounded="md"
      height="sm"
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'blue',
          borderRadius: '24px',
        },
      }}
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>first name</Th>
            <Th>last name</Th>
            <Th>department</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.users.map(user => {
            return (
              <UsersTableRow
                key={user.id}
                id={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                department={user.company.department}
                handleRowClick={handleEditClick}
              />
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
