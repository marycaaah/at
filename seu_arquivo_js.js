const quotes = [
    {
      quote: "O verdadeiro conhecimento é saber que nada se sabe.",
      author:"Sócrates See More.",
      image:"th.jpeg"
    },
    {
      quote: "A liberdade é a possibilidade do isolamento. Se te é impossível viver só, nasceste escravo." ,
      author: "-Fernando Pessoa",
      image:"fernandopessoa.jpg"
    },
    {
      quote: "Se você quer ser feliz por um dia, beba. Se você quer ser feliz por uma semana, mate um porco e coma. Se você quer ser feliz para sempre, case-se.",
      author: "Provérbio Chinês",
      image:"proverbio chines.jpg"
    },
    {
      quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
      author:  "-John Lenon",
      image:"john-lennon.webp"
    },
    {
      quote: "A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz.",
      author: "Jean-Paul Sartre",
      image:"th (1).jpeg"
    },
    {
      quote: "A imaginação é mais importante que o conhecimento. O conhecimento é limitado, enquanto a imaginação abraça o mundo inteiro.",
      author: "Albert Einstein",
      image:"albert_einstein-.jpg"
    },
    {
      quote: "A maior glória em viver não está em nunca cair, mas em nos levantarmos cada vez que caímos.",
      author: "Nelson Mandela ",
      image:"nelson-mandela.jpg"
    },
    {
      quote: "O fracasso é simplesmente a oportunidade de começar de novo, desta vez de forma mais inteligente.",
      author: "Henry Ford",
      image:"th (2).jpeg"
    },
    {
      quote: "Não tenha medo da mudança. Ela assusta, mas pode ser a chave daquilo que você procura.",
      author: "Paulo Coelho",
      image:"paulocoelho.webp"
    },
    
    // Adicione mais citações à lista
  ];
  
  const quoteDisplay = document.getElementById('quoteDisplay');
  const authorDisplay = document.getElementById('authorDisplay');
  const authorImage = document.getElementById('authorImage');
  const newQuoteButton = document.getElementById('newQuoteButton');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
    authorImage.src = randomQuote.image; // Define a imagem do autor
  }
  
  newQuoteButton.addEventListener('click', generateRandomQuote);
  
  // Exibir uma citação aleatória ao carregar a página
  generateRandomQuote();