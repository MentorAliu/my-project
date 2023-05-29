import { Box, Flex } from '@chakra-ui/react'
import { Sidebar } from './Sidebar'

const Layout = ({ children }) => {
  return (
    <Box>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Flex>Header</Flex>
        <Flex>{children}</Flex>
      </Box>
    </Box>
  )
}

export default Layout
