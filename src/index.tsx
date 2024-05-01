import React from 'react'
import ReactDOM from 'react-dom/client'

import  './index.css'

// import App from './App'
import Routes from './routers';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <Routes />
   </React.StrictMode>,
)
