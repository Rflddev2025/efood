import { FooterBar, Texto, SocialIcons } from './styles'
import Logo from '../Logo'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <FooterBar>
    <Logo small />
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
      A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade<br />
      dos produtos é toda do estabelecimento contratado.
    </Texto>
  </FooterBar>
)

export default Footer

