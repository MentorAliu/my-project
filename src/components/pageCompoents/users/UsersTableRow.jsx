import {
  Tr,
  Td,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
} from '@chakra-ui/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const UsersTableRow = ({
  id,
  firstName,
  lastName,
  department,
  handleRowClick,
  onOpen,
  onOpenDelete,
}) => {
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{firstName}</Td>
      <Td>{lastName}</Td>
      <Td>{department}</Td>
      <Td>
        <Flex float="right">
          <Menu>
            <MenuButton as={Button} bg="0" rounded="full">
              <KeyboardArrowDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  onOpen()
                  handleRowClick(id)
                }}
              >
                Edit
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onOpenDelete()
                  handleRowClick(id)
                }}
              >
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Td>
    </Tr>
  )
}
