import Rating from '@mui/material/Rating';

import styles from './Movie.module.css';

interface Props {
   poster: string;
   name: string;
   director: string;
   stars: string[];
   rating: number;
   createdAt: Date;
   updatedAt: Date;
   description: string;
}

export default function Movie({poster, name, director, stars, rating, description, createdAt, updatedAt }: Props) {
   return (
      <div className={styles.movie_component}>
         <div className={styles.movie_container}>
            <img className={styles.movie_poster} src={poster} alt="poster" />
            <div className={styles.movie_info}>
               <h3>{name}</h3>
               <p>Direção: {director}</p>
               <p>Estrelas: {stars.join(", ")}</p>
               <div className={styles.movie_rating}>
                  <h4>Avaliação</h4>
                  <p>{rating}</p>
                  <Rating name="read-only" value={rating} readOnly max={10} />
               </div>
               <p>Data da avaliação: {createdAt.toLocaleString()}</p>
               <p>Data da atualização: {updatedAt.toLocaleString()}</p>
            </div>
         </div>
         <div className={styles.movie_description}>
            <p>{description}</p>
         </div>
      </div>
   )
}