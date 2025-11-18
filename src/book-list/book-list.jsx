import "./book-list.css";

function BookList({ livros, aoRemoverLivro, aoIniciarEdicao }) {
  return (
    <main className="content">
      <table className="styled-table" aria-label="Lista de livros">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Ano</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <tr key={index}>
              <td data-label="Título">{livro.titulo}</td>
              <td data-label="Autor">{livro.autor}</td>
              <td data-label="Ano">{livro.ano}</td>
              <td data-label="Ações">
                <div className="action-group">
                  <button
                    type="button"
                    className="btn-edit"
                    aria-label={`Editar ${livro.titulo}`}
                    onClick={() =>
                      typeof aoIniciarEdicao === "function" &&
                      aoIniciarEdicao(index)
                    }
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    className="btn-delete"
                    aria-label={`Excluir ${livro.titulo}`}
                    onClick={() =>
                      typeof aoRemoverLivro === "function" &&
                      aoRemoverLivro(index)
                    }
                  >
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default BookList;
