import { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";

import Movie from '@/interfaces/Movie';


export default function Lista() {

   const [movies, setMovies] = useState<Movie[]>([]);
   useEffect(() => {
      const fetchMovies = async () => {
         try {
            const response = await axios.get('http://192.168.3.101:6969/api/movies');
            setMovies(response.data);
         } catch (error) {
            console.error('Erro ao buscar filmes:', error);
         }
      };

      fetchMovies();
   }, []);
   return (
      <div>
         <h1>Lista</h1>
         
         <div>
            <div className='movies-list'>
               <h2>Lista de Filmes</h2>
               <ul>
                  {
                     movies.map((movie) => (
                        <li>{movie.title}</li>
                     ))
                  }
               </ul>
            </div>
         </div>
         <Link to="/">Voltar</Link>
      </div>
   )
}