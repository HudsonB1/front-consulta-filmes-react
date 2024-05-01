import React from "react";

import styles from "./Modal.module.css";

interface Props {
   h2: string;
   children: React.ReactNode;
}

export default function Modal({h2, children }: Props) {

   function closeModal(e: React.MouseEvent): void {
      const modal = document.querySelector('#modal_edit');
      modal!.classList.toggle("hide");
   }

   return (
      <div id="modal_edit" className="hide modal">
         <div className={styles.fade} onClick={closeModal} />
         <div className={styles.modal_content}>
            <h2>{h2}</h2>
            {children}
         </div>
      </div>
   );
}