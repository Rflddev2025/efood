import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'
import Delivery from './pages/Delivery'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const PageContent = styled.div`
  display: flex;
  flex: 1;
`

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <PageContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil/:id" element={<Perfil />} />
            <Route path="/entrega" element={<Delivery />} />
            <Route path="/pagamento" element={<Payment />} />
            <Route path="/confirmacao" element={<Confirmation />} />
          </Routes>
        </PageContent>
        <Footer />
      </MainContainer>
    </BrowserRouter>
  )
}

export default App


