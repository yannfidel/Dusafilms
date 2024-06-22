import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PaginaFilmes() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
  const urlBase = 'https://api.themoviedb.org/3/movie/';
  const urlImg = 'https://image.tmdb.org/t/p/w1280/';

  useEffect(() => {
    fetch(`${urlBase}${id}?${apiKey}&Language=pt-BR`)
      .then(response => response.json())
      .then(response => setFilme(response))
      .catch(erro => console.log(erro));
  }, [id]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Contêiner para o conteúdo do filme */}
      <div className="w-full max-w-4xl p-4 flex flex-col items-center justify-center">
        {filme.backdrop_path && (
          <img
            src={`${urlImg}${filme.backdrop_path}`}
            alt={filme.title}
            className="rounded-md shadow-lg mb-4 max-w-full h-auto object-center"
          />
        )}
        <h1 className="text-3xl font-bold mb-4 text-center break-words w-full px-2">{filme.title}</h1>
        <p className="text-lg leading-relaxed text-center px-4 overflow-ellipsis overflow-hidden">{filme.overview}</p>
      </div>
    </div>
  );
}

export default PaginaFilmes;