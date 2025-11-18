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
    <>
      <Header />
      <h1 className="app-heading">Sistema de Cadastro de Livros</h1>
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
