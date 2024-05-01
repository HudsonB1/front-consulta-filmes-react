import { Link } from "react-router-dom";

import styles from './Header.module.css';

interface Props {
   openModal: () => void;
}


export default function Header({ openModal }: Props) {

   return (
      <header className={styles.header}>
         <h1>Avaliação de filmes</h1>
         <ul>
            <Link className={styles.list} to=""><li onClick={openModal}>Cadastro</li></Link>
            <Link className={styles.list} to="/editar"><li>Editar</li></Link>
            <Link className={styles.list} to="/lista"><li>Lista</li></Link>
         </ul>
      </header>
   );
}