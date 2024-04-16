import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header/Header';

import styles from './App.module.css'

import Movie from './interfaces/Movie';

export default function App() {

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
      <>
         <Header />
         <div className={styles.App}>
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
      </>
   )
}

