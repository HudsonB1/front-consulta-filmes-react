import styles from '@/App.module.css';

import Header from '@/components/Header/Header';

import cadastre from '@/assets/icons8-crie-um-novo-64.png';
import avalie  from '@/assets/icons8-classificação-64.png';
import edite from '@/assets/icons8-tarefa-64.png';

export default function App() {

   return (
      <div className={styles.App}>
         <Header />
         <div className={styles.container}>
            <h1>CRIE SUA LISTA DE AVALIAÇÕES DE FILMES!</h1>
            <div className={styles.overlay}>
               <p><span className={styles.span}>Bem-vindo</span> ao nosso aplicativo de avaliação de <span className={styles.span}>filmes</span>!</p>
               <p> Aqui você pode cadastrar novos filmes, editá-los e visualizar uma lista das suas <span className={styles.span}>avaliações</span>.</p>
            </div>
         </div>
         <div className={styles.module}>
            <div className={styles.modules}>
               <img className={styles.icon} src={cadastre} alt="cadastre" />
               <h3>Cadastre</h3>
               <p>Aqui você pode cadastrar novos filmes que assistiu recentemente para sua avaliação. 
                  Preencha o formulário com as informações do filme, como título, descrição, diretor, estrelas do filme, um poster maneiro e sua própria avaliação. 
                  Após preencher todos os campos, clique no botão 'Cadastrar' para adicionar o filme à nossa lista.</p>
            </div>
            <div className={styles.modules}>
               <img className={styles.icon} src={avalie} alt="avaliar" />
               <h3>Avaliações</h3>
               <p>
               Aqui você pode visualizar a lista completa de filmes cadastrados, juntamente com suas avaliações. 
               Explore os filmes disponíveis e descubra novos títulos para assistir. 
               Clique no título de um filme para obter mais informações, como sinopse, elenco e trailer. 
               Você também pode classificar os filmes e compartilhar suas opiniões sobre eles.
               </p>
            </div>
            <div className={styles.modules}>
               <img className={styles.icon} src={edite} alt="edite" />
               <h3>Edite</h3>
               <p>
               Nesta seção, você pode editar as informações dos filmes já cadastrados. 
               Abaixo, você encontrará uma lista dos filmes disponíveis, juntamente com botões de edição. 
               Ao clicar em 'Editar', você será redirecionado para uma página onde poderá modificar as informações do filme selecionado.
               </p>
            </div>
         </div>
      </div>
   )
}

