import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './App.module.css'

import Movie from '../backend/src/models/Movie';

export default function App() {

   const [movies, setMovies] = useState<any>([]);

   useEffect(() => {
      const fetchMovies = async () => {
         try {
            const response = await axios.get('http://192.168.3.101:6969/api/movies');
            console.log(response.data);
            setMovies(response.data);
         } catch (error) {
            console.error('Erro ao buscar filmes:', error);
         }
      };

      fetchMovies();
   }, []);




   return (
      <div className={styles.App}>
         <h1>Olá</h1>
         <div className='movies-list'>
            <h2>Lista de Filmes</h2>
            <ul>
               {movies.map((movie) => (
                  <li>{movie.title}</li>
               ))}
            </ul>
         </div>
      </div >
   )
}

