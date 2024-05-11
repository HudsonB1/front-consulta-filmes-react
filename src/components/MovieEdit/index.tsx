import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './MovieEdit.module.css'

interface Props {
   name: string,
   onRemove: () => void,
   onEdit: () => void
}

export default function MovieEdit({name, onEdit, onRemove }: Props) {

   return (
      <>
         <div className={styles.movie_container}>
            <h4 className={styles.movie_title}>{name}</h4>
            <div className={styles.movie_actions}>
               <EditIcon onClick={onEdit} sx={{fontSize: 20,  margin: 'auto 5%', backgroundColor: '#b99950', padding: '1px 10px', borderRadius: '3px', cursor: 'pointer'}}/>
               <DeleteIcon onClick={onRemove} sx={{fontSize: 20,  margin: 'auto 5%', backgroundColor: '#b99950', padding: '1px 10px', borderRadius: '3px', cursor: 'pointer'}}/>
            </div>
         </div>
      </>
   )
}