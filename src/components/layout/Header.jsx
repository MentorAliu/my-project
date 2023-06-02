import {
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'
import MenuIcon from '@mui/icons-material/Menu'

export const Header = () => {
  return (
    <Flex
      py="2"
      justifyContent="space-between"
      px="6"
      alignItems="center"
      bg="white"
      borderBottom="1px"
      borderBottomColor="gray.300"
    >
      <Heading size="md" color="gray.600">
        My Application
      </Heading>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<MenuIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem command="⌘T">Profile</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
