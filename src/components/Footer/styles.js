import styled from 'styled-components'

export const FooterBar = styled.footer`
  background-color: #FFEBD9;
  text-align: center;
  padding: 40px 0 32px;
`

export const Texto = styled.p`
  font-size: 14px;
  color: #E66767;
  margin-top: 16px;
  line-height: 1.4;
  font-family: 'Roboto', sans-serif;
`

export const SocialIcons = styled.div`
  margin-top: 24px;
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
