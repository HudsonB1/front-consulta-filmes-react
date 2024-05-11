import { useEffect, useState } from 'react';
import axios from 'axios';

import MovieEdit from '@/components/MovieEdit';
import Modal from '@/components/Modal';
import Form from '@/components/Form';

import styles from './Editar.module.css'

import { Link } from "react-router-dom";

import Movies from '@/interfaces/Movie';

import ReplyIcon from '@mui/icons-material/Reply';


export default function Editar() {
   const [movies, setMovies] = useState<Movies[]>([]);
   const [remove, setRemove] = useState<boolean>(false);
   const [edit, setEdit] = useState<boolean>(false);
   const [id, setId] = useState<string>("");

   async function fetchMovies() {
      try {
         const response = await axios.get('http://192.168.3.101:6969/api/movies');
         setMovies(response.data);
      } catch (error) {
         console.error('Erro ao buscar filmes:', error);
      }
   };

   useEffect(() => {
      fetchMovies();
   }, []);

   async function onRemove(id: string) {
      try {
         await axios.delete(`http://192.168.3.101:6969/api/movie/${id}`);
         setMovies(movies.filter((movie) => movie._id !== id));
      } catch (error) {
         console.error('Erro ao remover filme:', error);
      }
      toggleModal();
   }

   function toggleModal() {
      const modal = document.querySelector('#modal_edit');
      modal!.classList.toggle("hide");
   }

   return (
      <div className={styles.container_edit}>
         <Modal h2="" children={
            remove ?
               <div>
                  <p>Tem certeza que deseja apagar esta avaliação?</p>
                  <button className={styles.button} type="button" onClick={toggleModal}>Cancelar</button>
                  <button className={styles.button} type="button" onClick={() => onRemove(id)}>Sim</button>
               </div>
               : edit ?
                  <Form closeModal={toggleModal} btnText='Editar' id={id} updateMovies={fetchMovies}/> : null
         } />
         <h1>Editar avaliações</h1>
         <h2><Link to="/"><ReplyIcon sx={{ color: '#fff', fontSize: 20 }} /></Link>Editar</h2>
         {
            movies.length === 0 ? <p>Lista vazia!</p> :
               movies.map((movie) => (
                  <MovieEdit name={movie.title}
                     onRemove={() => {
                        toggleModal();
                        setEdit(false);
                        setRemove(true);
                        setId(movie._id);
                     }}
                     onEdit={() => {
                        toggleModal();
                        setEdit(true);
                        setRemove(false);
                        setId(movie._id);
                     }} />
               ))
         }
      </div>
   )
}