import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Header from '../components/Header'
import Form from '../components/Form'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default function App(): JSX.Element {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ flexGrow: 0 }}>
        <Header />

        <Form />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Body />
      </Box>

      <Footer />
    </Container>
  )
}
