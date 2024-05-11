import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import styles from './Form.module.css';
import axios from 'axios';

interface Props {
   closeModal: () => void;
   btnText: string;
   id?: string;
   updateMovies?: () => void;
}

export default function Form({ closeModal, btnText, id, updateMovies }: Props) {
   const [title, setTitle] = useState<string>('');
   const [rating, setRating] = useState<number | null>(0);
   const [description, setDescription] = useState<string>('');
   const [director, setDirector] = useState<string>('');
   const [poster, setPoster] = useState<string>('');
   const [star, setStar] = useState<string>('');
   const [stars, setStars] = useState<string[]>([]);


   // Verifica se o id foi passado e busca os dados do filme - caso tenha o id é porque se trata de uma edição e não um novo cadastro
   // Quando o id estiver definido, busca os dados do filme e preenche os campos do formulário
   useEffect(() => {
      if (id) {
         async function fetchMovie() {
            try {
               const response = await axios.get(`http://192.168.3.101:6969/api/movie/${id}`);
               const { title, rating, description, director, stars, poster } = response.data;
               setTitle(title);
               setRating(rating);
               setDescription(description);
               setDirector(director);
               setStars(stars);
               setPoster(poster);
            } catch (error) {
               console.error('Erro ao buscar o filme:', error);
            }
         }
         fetchMovie();
      }
   }, [id]);

   function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const { name, value } = event.target;
      if (name === 'title') setTitle(value);
      else if (name === 'description') setDescription(value);
      else if (name === 'director') setDirector(value);
      else if (name === 'poster') setPoster(value);
   }

   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const body = {
         title,
         rating,
         description,
         director,
         stars,
         poster
      };

      try {
         // Caso o id tenha sido passado, atualiza o filme e atualiza a lista de filmes na tela
         if (id) {
            // Atualiza o filme
            await axios.patch(`http://192.168.3.101:6969/api/movie/${id}`, body);
            if (updateMovies) updateMovies();
         } else {
            // Cria um novo filme
            await axios.post('http://192.168.3.101:6969/api/movie', body);
         }
         closeModal();
      } catch (error) {
         console.error('Erro ao salvar o filme:', error);
      }
   }

   const deleteStar = (star: string) => {
      const updatedStars = stars.filter((item) => item !== star);
      setStars(updatedStars);
   };

   return (
      <form onSubmit={handleSubmit} className={styles.form}>
         <div className={styles.input_container}>
            <label className={styles.label_container} htmlFor="title">Título:</label>
            <input onChange={handleChange} type="text" name="title" id="title" value={title} />
         </div>
         <div className={styles.input_container}>
            <label className={styles.label_container} htmlFor="rating">Avaliação:</label>
            <Rating name="rating" defaultValue={3} value={rating} onChange={(event, newValue) => { if (event.type === "change") setRating(newValue); }} max={10} />
         </div>
         <div className={styles.input_container}>
            <label className={styles.label_container} htmlFor="description">Descrição:</label>
            <textarea onChange={handleChange} name="description" id="description" value={description} />
         </div>
         <div className={styles.input_container}>
            <label className={styles.label_container} htmlFor="director">Diretor:</label>
            <input onChange={handleChange} type="text" name="director" id="director" value={director} />
         </div>
         <div className={styles.input_stars}>
            <label className={styles.label_container} htmlFor="stars">Estrelas:</label>
            <div>
               <input type="text" name="stars" id="stars" onChange={(e) => setStar(e.target.value)} value={star} className={styles.input_star} />
               <AddIcon className={styles.addIcon} onClick={() => {
                  setStars([...stars, star]);
                  setStar('');
               }} />
            </div>
            <ul>
               {stars.length === 0 ? null : stars.map((star) =>
                  <li key={star}>
                     <Chip sx={{ justifyContent: 'space-between' }} color='info' label={star} variant="outlined" onDelete={() => deleteStar(star)} />
                  </li>
               )}
            </ul>
         </div>
         <div className={styles.input_container}>
            <label className={styles.label_container} htmlFor="poster">Poster:</label>
            <input onChange={handleChange} type="text" name="poster" id="poster" value={poster} />
         </div>
         <div>
            <button className={styles.button} type="button" onClick={closeModal}>Cancelar</button>
            <button className={styles.button} type="submit">{btnText}</button>
         </div>
      </form>
   );
}
