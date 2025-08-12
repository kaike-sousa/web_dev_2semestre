//Crud trata das quatro variáveis em um programa: Create, Read, Uptade, Delete
//Objects - trata das propriedades e itens de cada array
//estrutura:

// const pessoa ={
//     nome: "Kaike",
//     idade: 18,
//     cidade: "São Paulo",
//     "cidade natal": "São Paulo"
// }
// acessa uma palavra
// console.log(pessoa.cidade);

// acessa duas palavras
// console.log(pessoa[nome]);

// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        image: "https://placedog.net/150?random=3",
        date: "12/10/2023 12:00:00"
    }
];

//Função para mostrar quando carregar
window.onload = function(){
    mostraPosts()

    document.querySelector("#postForm").addEventListener('submit', criarPost)
}

//Create
function criarPost(inforDoEvento){
    //Previne que o formulário seja enviado antes de pegarmos as infos
    inforDoEvento.preventDefault();

    //pega os valores digitados pelo usuario
    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postText").value;
    const dataPost = new Date().toLocaleString();

    //Criar um novo objeto de post
    const post = {
        text: textoPost,
        category: categoriaPost, 
        imagem: imagemPost,
        date: dataPost
    }

    //Adiciona o post no inicio do array
    posts.unshift(post)

    mostraPosts();
}

//Read
function mostraPosts(){
    const listaPosts = document.querySelector("#postList")
    listaPosts.innerHTML = ''

    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")

        cardPost.innerHTML = `
            <p>${pegaItem.text}</p>
            <img src= '${pegaItem.image}' style = 'max-width: 150px'/>
            <p>${pegaItem.category}</p>
            <p>${pegaItem.date}</p>
            <button>Editar</button>
            <button>Apagar</button>
        `
        listaPosts.append(cardPost)
    })
}
//Uptade
//Delete