import styled from 'styled-components'

export const FooterBar = styled.footer`
  background-color: #FFEBD9;
  text-align: center;
  padding: 40px 0 32px;
`

export const LogoFooter = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  color: #E66767;
  border: 1px solid #E66767;
  border-radius: 8px;
  padding: 6px 16px;
  background-color: #fff;
  font-family: 'Roboto', sans-serif;
  text-transform: lowercase;
`

export const SocialIcons = styled.div`
  margin: 24px;
  display: flex;
  justify-content: center;
  gap: 24px;

  a {
    color: #E66767;
    font-size: 20px;
    transition: color 0.2s;

    &:hover {
      color: #c24a4a;
    }
  }
`

export const Texto = styled.p`
  font-size: 14px;
  color: #E66767;
  line-height: 1.4;
  font-family: 'Roboto', sans-serif;
  margin-top: 60px;
`
