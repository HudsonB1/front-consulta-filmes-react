import { Link } from "react-router-dom";

import styles from './Header.module.css';

export default function Header() {

   return (
      <header className={styles.header}>
         <h1>Avaliação de filmes</h1>
         <ul>
            <Link className={styles.list} to="/cadastro"><li>Cadastro</li></Link>
            <Link className={styles.list} to="/editar"><li>Editar</li></Link>
            <Link className={styles.list} to="/lista"><li>Lista</li></Link>
         </ul>
      </header>
   );
}