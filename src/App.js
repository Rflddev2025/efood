import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Delivery from './pages/Delivery'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'

import HeaderHome from './components/HeaderHome'
import HeaderPerfil from './components/HeaderPerfil'
import Footer from './components/Footer'

import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FFF8F2;
`

const PageContent = styled.div`
  flex: 1;
`

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isPerfil = location.pathname.startsWith('/perfil')

  return (
    <MainContainer>
      <GlobalStyle /> {}

      {isHome && <HeaderHome />}
      {isPerfil && <HeaderPerfil />}
      {!isHome && !isPerfil && null}

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
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App





