export class Restaurante {
  constructor({ id, titulo, tipo, capa, cardapio }) {
    this.id = id
    this.titulo = titulo
    this.tipo = tipo
    this.capa = capa
    this.cardapio = cardapio
  }
}

export class Prato {
  constructor({ id, nome, descricao, imagem, preco, porcao, ingredientes }) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.imagem = imagem
    this.preco = preco
    this.porcao = porcao
    this.ingredientes = ingredientes
  }
}
