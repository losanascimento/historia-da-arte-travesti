 const galeria =
 
 [
    {
        "nome": "Renata Carvalho",
        "subtitulo": "Manifesto Transpofágico",
        "texto": "Renata convida, em cena, o público a olhar o seu corpo travesti, incansavelmente, e apresenta ahistoricidade dele. Meu corpo veio antes de mim, sem eu pedir diz Renata. De certa forma, eu fiqueigrávida de mim mesma. Eu me pari. O solo aborda o corpo etapa dos hormônios, silicone industrial e próteses mamárias, o punitivismo, o encarceramento em massa, a censura, a patologia, a AIDS, a diáspora, as violências e assassinatos acometidos aos corpos trans/travestis: Eu não me descobri travesti, me gritaram, reforça a artista. texto por Casa1",
        "imagem": "imgobra.jpg",
        "link": "https: //www.instagram.com/renatacarvalhooficial/"
    },
    {
        "nome": "Liniker",
        "subtitulo": "Indigo Borboleta Anil",
        "texto": "Liniker de Barros Ferreira Campos, primeira cantora trans brasileira a receber um Grammy Latino, premiação mais importante da música latina, pela categoria de ‘Melhor Álbum de Música Popular Brasileira’ pelo disco Indigo Borboleta Anil.",
        "imagem": "liniker.jpg",
        "link": "https://www.instagram.com/linikeroficial/"
    },
    {
        "nome": "Linn da Quebrada",
        "subtitulo": "Trava Línguas",
        "texto": "Foi na música que a artista multimídia brasileira Linn da Quebrada despontou em 2017, com sua primeira faixa, “Enviadescer”. De lá para cá, a cantora e compositora desenvolveu seu processo criativo musical em diferentes etapas, explorando seu corpo através da palavra, dela criando som e fazendo barulho.",
        "imagem": "linn.jpg",
        "link": "https://www.instagram.com/linndaquebrada/"
    },
    {
        "nome": "Agrippina R. Manhattan",
        "subtitulo": "Transfobia",
        "texto": "Graduanda em Artes Visuais e História da Arte pela Universidade Federal do Rio de Janeiro, Agrippina R. Manhattan é artista visual travesti e já participou de exposições nacionais e internacionais. Teve trabalhos expostos em locais como a galeria Fortes D’Aloia & Gabriel, no Rio de Janeiro, e na feira BA Photo, na Argentina. texto por Casa Vogue",
        "imagem": "agri.jpg",
        "link": "https://www.instagram.com/um_amor.impossivel/"
    },
    {
        "nome": "Castiel Vitorino Brasileiro",
        "subtitulo": "Série fotográfica Corpo-flor",
        "texto": "artista visual travesti, macumbeira e psicóloga formada pela Universidade Federal do Espirito Santo. Vê em seu trabalho uma experiência de incorporação e de liberdades perecíveis em diversas abordagens, sobretudo performance, fotografia, desenho e escultura. texto por Casa Vogue",
        "imagem": "imgobraa.jpg",
        "link": "https://www.instagram.com/castielvitorino/"
    }
    
]



function setData(singer) {
    const imagem = document.createElement('img')
    imagem.classList.add("imgobra")
    const nome = document.createElement('h2')
    nome.classList.add("nome")
    const subtitulo = document.createElement('h3')
    subtitulo.classList.add("subtitulo")
    const texto = document.createElement('p')
    texto.classList.add("textinho")
    const link = document.createElement("a")
    link.classList.add("link")
    const div = document.createElement('div')
    div.classList.add("artista")
  
  imagem.setAttribute('src', `./imgs/${singer.imagem}`)
  nome.innerText = singer.nome
  subtitulo.innerText = singer.subtitulo
  texto.innerText = singer.texto
  link.setAttribute('href', singer.link)
  
  div.appendChild(imagem)
  div.appendChild(nome)
  div.appendChild(subtitulo)
  div.appendChild(texto)
  div.appendChild(link) 

  let obra = document.querySelector(".obra")
  obra.appendChild(div)
}

for (let i = 0; i < galeria.length; i++) {
    setData(galeria[i])   
}
