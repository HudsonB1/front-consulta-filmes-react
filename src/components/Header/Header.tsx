import styles from './Header.module.css';

export default function Header() {

   return (
      <header className={styles.header}>
         <h1>Avaliação de filmes</h1>
            <ul>
               <li>Cadastro</li>
               <li>Lista</li>
            </ul>
      </header>
   );
}