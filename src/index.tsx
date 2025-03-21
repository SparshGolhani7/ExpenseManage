// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { TransactionProvider } from './context/TransactionContext';

// const rootEl = document.getElementById('root');
// if (rootEl) {
//   const root = ReactDOM.createRoot(rootEl);
//   root.render(
//     <TransactionProvider>
//       <App />


//     </TransactionProvider>
      
    
//   );
// }

import * as React from "react";

import * as  ReactDOM from "react-dom/client";
import App from "./App";
import { TransactionProvider } from "./context/TransactionContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TransactionProvider>
    <App />
  </TransactionProvider>
);
