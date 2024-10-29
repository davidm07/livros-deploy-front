import { useState, useEffect } from 'react';
import './App.css';

interface Livro {
  titulo: string;
  autor: string;
}

function App() {
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_URL);
        const result: Livro[] = await response.json();
        setLivros(result);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchLivros();
  }, []);

  return (
    <div className="livros-container">
      <h1>Livros Cadastrados</h1>
      {livros.length > 0 ? (
        livros.map((livro, index) => (
          <div key={index} className="livro-card">
            <h2><strong>Título:</strong> {livro.titulo}</h2>
            <p><strong>Autor:</strong> {livro.autor}</p>
          </div>
        ))
      ) : (
        <p>Nenhum livro cadastrado.</p>
      )}
    </div>
  );
}

export default App;
