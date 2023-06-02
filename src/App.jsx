import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import MainAppPage from './pages/MainAppPage'
function App() {
  return (
    <Box>
      <Layout>
        <MainAppPage />
      </Layout>
    </Box>
  )
}

export default App
