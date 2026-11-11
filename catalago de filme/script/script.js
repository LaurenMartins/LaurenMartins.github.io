function corClassificacao(idade){
    if (idade === 0) return "#008000"; 
    if (idade <= 12) return "#0096d6";                     
    if (idade <= 14) return "#fcc011";                     
    if (idade <= 16) return "#e67823";                     
    return "#db2525";
}

function gerarEstrelas(nota){
    const totalEstrelas = 5;
    const estrelasCheias = '★'.repeat(nota);
    const estrelasVazias = '☆'.repeat(totalEstrelas - nota);
    return estrelasCheias + estrelasVazias;
}

async function carregarFilmes(){
    const resposta = await fetch('https://rafaelescalfoni.github.io/desenv_web/filmes.json');
    const filmes = await resposta.json();
    console.log("Filmes carregados com sucesso:", filmes);

    filmes.forEach(filme => {
      console.log("Título do filme:", filme.titulo);
      console.log("Objeto do filme completo:", filme);
    });

    const catalogo = document.getElementById('catalogo');

filmes.forEach(filme => {
    const generosTexto = filme.generos.join(', ');
    const elencoTexto = filme.elenco.join(', ');
    const corFundo = corClassificacao(filme.classificacao);
    const notaFilme = filme.opinioes.length > 0 ? filme.opinioes[0].rating : 0;
    const textoEstrelas = gerarEstrelas(notaFilme);

    const htmlSemelhantes = filme.titulosSemelhantes.map(idSemelhante => {
        const filmeSemelhante = filmes.find(f => f.id === idSemelhante);
            if (filmeSemelhante) {
                return `<img src="${filmeSemelhante.figura}" alt="${filmeSemelhante.titulo}" class="img-thumbnail">`;
            }
            return '';
    }).join('');

    const primeiraOpiniao = filme.opinioes.length > 0 ? filme.opinioes[0].descricao : 'Sem comentários.';

    catalogo.innerHTML +=`
        <article class="card">
          <div class="card-classificacao" style="background-color:${corFundo}">
          ${filme.classificacao}</div>
          <img src="${filme.figura}" alt="${filme.titulo}" class="card-capa">

          <h2 class="card-titulo">${filme.titulo}</h2>

          <table class="card-tabela">
            <tr>
              <th>gêneros:</th>
              <td>${generosTexto}</td>
            </tr>
            <tr>
              <th>elenco:</th>
              <td>${elencoTexto}</td>
            </tr>
            <tr>
              <th>resumo:</th>
              <td>${filme.resumo}</td>
            </tr>
          </table>

          <div class="card-opinioes">
            <div class="card-rating">
              <span class="estrelas">${textoEstrelas}</span>
            </div>
            <p class="comentario">"${primeiraOpiniao}"</p>
          </div>
        
          <div class="card-semelhantes">
        <h3>Títulos Semelhantes</h3>
        <div class="lista-thumbnails">
          ${htmlSemelhantes}
        </div>
      </div>
    </article>
    `
    })
}

carregarFilmes();



