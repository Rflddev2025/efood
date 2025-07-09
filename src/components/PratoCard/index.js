import styled from 'styled-components'

const Card = styled.div`
  border-radius: 8px;
  background: #e66767;
  color: white;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; 
`

const Imagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`

const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`

const Descricao = styled.p`
  font-size: 14px;
  flex: 1; 
  margin-bottom: 12px;
`

const Botao = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  font-weight: bold;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffe0c1;
  }
`

export default function PratoCard({ prato, aoClicar }) {
  return (
    <Card>
      <Imagem src={prato.foto} alt={prato.nome} />
      <Titulo>{prato.nome}</Titulo>
      <Descricao>{prato.descricao}</Descricao>
      <Botao onClick={() => aoClicar(prato)}>Adicionar ao carrinho</Botao>
    </Card>
  )
}

