import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #e66767;
  padding: 8px;
  background: #ffe6e6;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Imagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const Titulo = styled.h3`
  font-size: 16px;
  margin: 8px 0;
`

const Descricao = styled.p`
  font-size: 14px;
  text-align: center;
  color: #333;
`

const Botao = styled.button`
  margin-top: auto;
  background: #e66767;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`

export default function PratoCard({ prato }) {
  return (
    <Card>
      <Imagem src={prato.imagem} alt={prato.nome} />
      <Titulo>{prato.nome}</Titulo>
      <Descricao>{prato.descricao}</Descricao>
      <Botao>Adicionar ao carrinho</Botao>
    </Card>
  )
}
