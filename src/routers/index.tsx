import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import App from '@/App.tsx'
import Lista from '@/pages/Lista/index.tsx';
import Editar from '@/pages/Editar';

export default function Routes() {
   return (
      <>
         <Router>
            <Switch>
               <Route path='/' element={<App />} />
               <Route path="/lista" element={<Lista />} />
               <Route path="/editar" element={<Editar />} />
            </Switch>
         </Router>
      </>
   );
};
