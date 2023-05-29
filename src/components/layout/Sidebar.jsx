import { sidebarItems } from './sidebarItems'
import { Flex, Text, Box } from '@chakra-ui/react'

export const Sidebar = () => {
  return (
    <Box>
      {sidebarItems.map(item => (
        <Flex key={item.name}>
          {item.icon} <Text>{item.name}</Text>
        </Flex>
      ))}
    </Box>
  )
}
