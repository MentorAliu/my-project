import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
function App() {
  return (
    <Box>
      <Layout>
        <Routes>
          <Route path="*" element={<div>NO Route Found</div>} />
        </Routes>
      </Layout>
    </Box>
  )
}

export default App
