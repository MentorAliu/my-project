import { useState, Fragment } from 'react'
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  TableContainer,
  useDisclosure,
  Heading,
} from '@chakra-ui/react'
import { UsersTableRow, EditUserModal, DeleteUserModal } from './'

export const UsersTable = ({ data }) => {
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure()
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure()
  const [userId, setUserId] = useState('')

  const handleEditClick = id => {
    setUserId(id)
  }

  if (data.users.length == 0) return <Heading>No users found</Heading>

  return (
    <Fragment>
      <TableContainer
        bg="white"
        boxShadow="lg"
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
        <Table variant="simple" size="sm">
          <Thead position="sticky" top="0" bg="teal.100">
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
                  onOpen={onOpenEdit}
                  onOpenDelete={onOpenDelete}
                />
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {isOpenEdit && (
        <EditUserModal
          isOpen={isOpenEdit}
          onClose={onCloseEdit}
          userId={userId}
        />
      )}
      {isOpenDelete && (
        <DeleteUserModal
          isOpen={isOpenDelete}
          onClose={onCloseDelete}
          userId={userId}
        />
      )}
    </Fragment>
  )
}
