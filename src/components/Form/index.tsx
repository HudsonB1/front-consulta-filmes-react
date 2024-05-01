import { useState, ChangeEvent, FormEvent } from 'react';

import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';

import styles from './Form.module.css';
import axios from 'axios';

interface Props {
   closeModal: () => void;
   btnText: string;
}

export default function Form({ closeModal, btnText }: Props) {
   const [title, setTitle] = useState<string>();
   const [rating, setRating] = useState<number | null>(0);
   const [description, setDescription] = useState<string>();
   const [director, setDirector] = useState<string>();
   const [poster, setPoster] = useState<string>();


   const [star, setStar] = useState("");
   const [stars, setStars] = useState<string[]>([]);

   function handleChange(event: ChangeEvent<HTMLInputElement>) {
      if (event.target.name === "title") {
         setTitle(event.target.value);
      } else if (event.target.name === "description") {
         setDescription(event.target.value);
      } else if (event.target.name === "director") {
         setDirector(event.target.value);
      } else if (event.target.name === "poster") {
         setPoster(event.target.value);
      }
   }

   async function addMovieHandler(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const body = {
         title: title,
         rating: rating,
         description: description,
         director: director,
         stars: stars,
         poster: poster
      }

      try {
         await axios.post('http://192.168.3.101:6969/api/movie', body);
         console.log("OK")
         closeModal();
      } catch (error) {
         console.error('Erro ao buscar filmes:', error);
      }

   }

   const deleteStar = (star: string) => {
      const arrStars = stars.filter((item) => item !== star);
      setStars(arrStars);
   };



   return (
      <>
         <form onSubmit={addMovieHandler} className={styles.form}>
            <div className={styles.input_container}>
               <label className={styles.label_container} htmlFor="title">Título:</label>
               <input onChange={handleChange} type="text" name="title" id="title" />
            </div>
            <div className={styles.input_container}>
               <label className={styles.label_container} htmlFor="rating">Avaliação:</label>
               <Rating name="rating" defaultValue={3} value={rating} onChange={(event, newValue) => { setRating(newValue); }} />
            </div>
            <div className={styles.input_container}>
               <label className={styles.label_container} htmlFor="description">Descrição:</label>
               <input onChange={handleChange} type="text" name="description" id="description" />
            </div>
            <div className={styles.input_container}>
               <label className={styles.label_container} htmlFor="director">Diretor:</label>
               <input onChange={handleChange} type="text" name="director" id="director" />
            </div>
            <div className={styles.input_stars}>
               <label className={styles.label_container} htmlFor="stars">Estrelas:</label>
               <div>
                  <input type="text" name="stars" id="stars" onChange={(e) => setStar(e.target.value)} value={star} className={styles.input_star} />
                  <AddIcon className={styles.addIcon} onClick={() => {
                     setStars([...stars, star]);
                     setStar("");
                  }} />
               </div>
               <ul>
                  {stars.length === 0 ? null : stars.map((star) => <li key={star}>
                     <Chip sx={{ justifyContent: 'space-between' }} color='info' label={star} variant="outlined" onDelete={() => deleteStar(star)} />
                  </li>)}
               </ul>

            </div>
            <div className={styles.input_container}>
               <label className={styles.label_container} htmlFor="poster">Poster:</label>
               <input onChange={handleChange} type="text" name="poster" id="poster" />
            </div>
            <div>
               <button type="button" onClick={closeModal}>Cancelar</button>
               <button type="submit">{btnText}</button>
            </div>
         </form>
      </>
   )
};