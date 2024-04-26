import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import Cadastro from '../pages/Cadastro';
import App from '../App.tsx'
import Lista from '@/pages/Lista/index.tsx';

export default function Routes() {
   return (
      <>
         <Router>
            <Switch>
               <Route path='/' element={<App />} />
               <Route path="/cadastro" element={<Cadastro />} />
               <Route path="/lista" element={<Lista />} />

            </Switch>
         </Router>
      </>
   );
};
