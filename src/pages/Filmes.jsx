import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
  const urlBase = 'https://api.themoviedb.org/3/movie/';
  const urlImg = 'https://image.tmdb.org/t/p/w342/';

  useEffect(() => {
    fetch(`${urlBase}popular?${apiKey}`)
      .then(response => response.json())
      .then(response => setFilmes(response.results))
      .catch(erro => console.log(erro));
  }, []);

  return (
    <>
      <h1 className="text-4xl text-center my-6 text-white">Filmes</h1>
      <div className="listaFilmes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filmes.map(filme => (
          <div className="card-filme text-white bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center" key={filme.id}>
            <img
              className="w-full h-auto mb-4 rounded-lg"
              src={`${urlImg}${filme.poster_path}`}
              alt={`Poster do filme ${filme.title}`}
            />
            <h1 className="text-xl font-bold mb-2 text-center">{filme.title}</h1>
            <p className="text-sm text-center mb-4">{filme.overview}</p>
            <Link className="text-blue-400 underline" to={`${filme.id}`}>
              SABER MAIS
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Filmes;