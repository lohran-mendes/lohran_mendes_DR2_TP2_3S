import { useState, useEffect } from "react";
import "./book-form.css";

function BookForm({
  aoAdicionarLivro,
  livroParaEditar,
  indiceParaEditar,
  aoAtualizarLivro,
}) {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");

  useEffect(() => {
    if (livroParaEditar) {
      setTitulo(livroParaEditar.titulo || "");
      setAutor(livroParaEditar.autor || "");
      setAno(livroParaEditar.ano || "");
    } else {
      setTitulo("");
      setAutor("");
      setAno("");
    }
  }, [livroParaEditar]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!titulo || !autor || !ano) return;

    const livro = { titulo, autor, ano };

    if (
      typeof indiceParaEditar === "number" &&
      typeof aoAtualizarLivro === "function"
    ) {
      aoAtualizarLivro(indiceParaEditar, livro);
    } else if (typeof aoAdicionarLivro === "function") {
      aoAdicionarLivro(livro);
      setTitulo("");
      setAutor("");
      setAno("");
    }
  }

  return (
    <form
      className="book-form"
      aria-label="Formulário adicionar livro"
      onSubmit={handleSubmit}
    >
      <div className="form-row">
        <label className="sr-only" htmlFor="titulo">
          Título do livro
        </label>
        <input
          id="titulo"
          className="input"
          type="text"
          placeholder="Título do livro"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label className="sr-only" htmlFor="autor">
          Autor
        </label>
        <input
          id="autor"
          className="input"
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label className="sr-only" htmlFor="ano">
          Ano de publicação
        </label>
        <input
          id="ano"
          className="input"
          type="text"
          placeholder="Ano de publicação"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />
      </div>

      <div className="form-row form-actions">
        <button className="btn" type="submit">
          {typeof indiceParaEditar === "number"
            ? "Salvar Alterações"
            : "Adicionar Livro"}
        </button>
      </div>
    </form>
  );
}

export default BookForm;
