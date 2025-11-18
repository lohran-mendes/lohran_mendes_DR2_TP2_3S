import { useState } from "react";
import "./App.css";
import BookForm from "./book-form/book-form";
import BookList from "./book-list/book-list";
import Header from "./header/header";

function App() {
  const [livros, setLivros] = useState([
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
    { titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890 },
    {
      titulo: "Memórias Póstumas de Brás Cubas",
      autor: "Machado de Assis",
      ano: 1881,
    },
  ]);
  const [indiceEditando, setIndiceEditando] = useState(null);
  const [livroEditando, setLivroEditando] = useState(null);

  function manipulaAdicaoDeLivro(livroNovo) {
    setLivros((livrosAntigos) => [livroNovo, ...livrosAntigos]);
  }

  function manipulaRemocaoDeLivro(indice) {
    setLivros((livrosAtuais) => livrosAtuais.filter((_, i) => i !== indice));
  }

  function manipulaEdicaoDeLivro(indice, livroAtualizado) {
    setLivros((livrosAtuais) =>
      livrosAtuais.map((l, i) => (i === indice ? livroAtualizado : l))
    );
  }

  function iniciaEdicaoDeLivro(indice) {
    setIndiceEditando(indice);
    setLivroEditando(livros[indice] || null);
  }

  function finalizaEdicao() {
    setIndiceEditando(null);
    setLivroEditando(null);
  }

  return (
    // <div className="AppComponent">
    // <h1>Ao rodar o projeto é possível verificar as questões adicionando os caminhos na url de cada rota que é mencionada no arquivo main.jsx, ou clicando nos links abaixo:</h1>
    // <ul>
    //   <li><a href="/question_01">Questão 01</a></li>
    //   <li><a href="/question_02">Questão 02</a></li>
    //   <li><a href="/question_03">Questão 03</a></li>
    //   <li><a href="/question_04">Questão 04</a></li>
    //   <li><a href="/question_05">Questão 05</a></li>
    //   <li><a href="/question_06">Questão 06</a></li>
    //   <li><a href="/question_07">Questão 07</a></li>
    //   <li><a href="/question_08">Questão 08</a></li>
    //   <li><a href="/question_09">Questão 09</a></li>
    //   <li><a href="/question_10">Questão 10</a></li>
    //   <li><a href="/question_11">Questão 11</a></li>
    //   <li><a href="/question_12">Questão 12</a></li>
    //   <li><a href="/question_13">Questão 13</a></li>
    //   <li><a href="/question_14">Questão 14</a></li>
    //   <li><a href="/question_15">Questão 15</a></li>
    //   <li><a href="/question_16">Questão 16</a></li>
    // </ul>
    // </div>
    <>
      <Header />
      <BookList
        livros={livros}
        aoRemoverLivro={manipulaRemocaoDeLivro}
        aoIniciarEdicao={iniciaEdicaoDeLivro}
      />
      <BookForm
        aoAdicionarLivro={manipulaAdicaoDeLivro}
        livroParaEditar={livroEditando}
        indiceParaEditar={indiceEditando}
        aoAtualizarLivro={(indice, livroAtualizado) => {
          manipulaEdicaoDeLivro(indice, livroAtualizado);
          finalizaEdicao();
        }}
      />
    </>
  );
}

export default App;
