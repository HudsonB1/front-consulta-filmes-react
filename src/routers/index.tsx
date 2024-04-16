import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import Cadastro from '../screens/Cadastro';
import App from '../App.tsx'

export default function Routes() {
   return (
      <>
         <Router>
            <Switch>
               <Route path='/' element={<App />} />
               <Route path="/cadastro" element={<Cadastro />} />
            </Switch>
         </Router>
      </>
   );
};
