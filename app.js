/**************************
 * OBJETIVO: Criar os Cards de compra do Site
 * 
 * *************************/

const produtos = ['produtos.json']

const containerCard = document.getElementById('containerCard');


function criarCards(produtos){

    let cards = document.createElement('div');
    cards.classList.add('cards');

    let imagem = document.createElement('img');
    imagem.src = `./img/${produtos.imagem}`;
   
    
    let nome = document.createElement('h3');
    nome.textContent = produtos.nome;

    
    let descricao = document.createElement('p');
    descricao.textContent = produtos.descricao;

    let preco = document.createElement('h2');
    preco.textContent = produtos.preco;
    preco.classList.add('informacoes h2');

    cards.appendChild(img);
    cards.appendChild(h3);
    cards.appendChild(p);
    cards.appendChild(h2);

    containerCard.appendChild(cards);

}


