
let modalKey = 0;
let quantProduto = 1;
let cart = [];

// Função para abrir o modal com as informações do produto
function abrirModal(item) {
  modalKey = item.id;
  quantProduto = 1;

  // Exibe o modal
  const modal = document.querySelector('.produtoWindowArea');
  modal.style.display = 'flex';

  // Atualiza os dados do produto
  document.querySelector('.produtoInfo h1').innerHTML = item.Produto;
  document.querySelector('.produtoBig img').src = item.img;
  document.querySelector('.produtoInfo--desc').innerHTML = item.Descrição;
  document.querySelector('.produtoInfo--qt').innerHTML = quantProduto;
  document.querySelector('.produtoInfo--actualPrice').innerHTML = `R$${item.Preço.toFixed(2).replace('.', ',')}`;
}

// Função para fechar o modal
function fecharModal() {
  document.querySelector('.produtoWindowArea').style.display = 'none';
}

// Função para atualizar quantidade e preço dinamicamente
function atualizarModal() {
  const precoBase = produtosJson[modalKey - 1].Preço;
  const precoFinal = precoBase * quantProduto;

  document.querySelector('.produtoInfo--qt').innerHTML = quantProduto;
  document.querySelector('.produtoInfo--actualPrice').innerHTML = `R$${precoFinal.toFixed(2).replace('.', ',')}`;
}

// Renderiza os produtos na tela
produtosJson.forEach((item) => {
  const produtoItem = document.querySelector('.models .produto-item').cloneNode(true);

  produtoItem.querySelector('.produto-item--img img').src = item.img;
  produtoItem.querySelector('.produto-item--name').innerHTML = item.Produto;
  produtoItem.querySelector('.produto-item--desc').innerHTML = item.Descrição;
  produtoItem.querySelector('.produto-item--price').innerHTML = `R$${item.Preço.toFixed(2).replace('.', ',')}`;

  // Evento de clique no produto para abrir modal
  produtoItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    abrirModal(item);
  });

  document.querySelector('.produto-area').append(produtoItem);
});

// Eventos de controle do modal
document.querySelector('.produtoInfo--CancelButton').addEventListener('click', fecharModal);

document.querySelector('.produtoInfo--qtmenos').addEventListener('click', () => {
  if (quantProduto > 1) {
    quantProduto--;
    atualizarModal();
  }
});

document.querySelector('.produtoInfo--qtmais').addEventListener('click', () => {
  quantProduto++;
  atualizarModal();
});

document.querySelector('.produtoInfo--addButton').addEventListener('click', () => {
  const produtoSelecionado = produtosJson.find((p) => p.id === modalKey);
  const itemNoCarrinho = cart.find((p) => p.id === modalKey);

  if (itemNoCarrinho) {
    itemNoCarrinho.quant += quantProduto;
  } else {
    cart.push({
      id: produtoSelecionado.id,
      quant: quantProduto,
    });
  }

  console.log('Carrinho:', cart);
  fecharModal();
});