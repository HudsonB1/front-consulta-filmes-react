import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import styles from './Lista.module.css';

import Movies from '@/interfaces/Movie';
import Movie from '@/components/Movie';

import ReplyIcon from '@mui/icons-material/Reply';


export default function Lista() {
   const [movies, setMovies] = useState<Movies[]>([]);


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
      <div className={styles.container_movies}>
         <h1>Lista de avaliações</h1>

         <div>
            <div className={styles.movies_list}>
               <h2><Link to="/"><ReplyIcon sx={{ color: 'white', fontSize: 30 }} /></Link>Filmes</h2>

               {movies.length === 0 ? <h2>Lista vazia!</h2> :
                  <ul>
                     {movies.map((movie) => (
                        <li>
                           <Movie poster={movie.poster} name={movie.title} director={movie.director} stars={movie.stars} rating={movie.rating} description={movie.description} createdAt={new Date(movie.createdAt)} updatedAt={new Date(movie.updatedAt)} />
                        </li>
                     ))}
                  </ul>
               }
            </div>
         </div>
      </div>
   )
}