
produtosJson.map((item, index) => {
    console.log(item)
    
    let produtoItem = document.querySelector(".models .produto-item").cloneNode(true);
    document.querySelector(".produto-area").append(produtoItem);

    produtoItem.querySelector('.produto-item--img img').src = item.img;
    produtoItem.querySelector('.produto-item--name').innerHTML = item.Produto;
    produtoItem.querySelector('.produto-item--desc').innerHTML = item.Descrição;
    produtoItem.querySelector('.produto-item--price').innerHTML = item.Preço;

    produtoItem.querySelector('.produto-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log("clicou")
    //abrir janela
    document.querySelector('.produtoWindowArea').style.display = 'flex'
    // preencher os dados
    document.querySelector('.produtoInfo h1').innerHTML = item.Produto;
    document.querySelector('.produtoBig img').src = item.img;
    document.querySelector('.produtoInfo--desc').innerHTML = item.Descrição
    document.querySelector('.produtoInfo--actualPrice').innerHTML = item.Preço

    })
    

    document.querySelector('.produtoInfo--CancelButton').addEventListener('click', () => {
        document.querySelector('.produtoWindowArea').style.display = 'none'
    })

})
console.log("Script carregado com sucesso!");
