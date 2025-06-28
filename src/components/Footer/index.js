import { FooterBar, Texto, SocialIcons } from './styles'
import Logo from '../Logo'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <FooterBar>
    <Logo />
    <SocialIcons>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
    </SocialIcons>
    <Texto>
      Rua Acácias, 78 - React City - MG <br />
      Desenvolvido por Rodrigo Francis
    </Texto>
  </FooterBar>
)

export default Footer
