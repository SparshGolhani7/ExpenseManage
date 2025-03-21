// // Font imports
// import '@fontsource/source-sans-pro';
// import '@fontsource/source-sans-pro/600.css';
// import '@fontsource/source-sans-pro/700.css';

// import ContentWidthContainer from './components/layout/ContentWidthContainer';

// import './App.css';

// /*
//   To reference icons:
  
//   import checkIcon from "./assets/check-circle-fill.svg";
//   import receiptIcon from "./assets/receipt.svg";
//   import plusIcon from "./assets/plus.svg";
//   import minusIcon from "./assets/minus.svg";

//   <img src={receiptIcon} />
// */

// const App = () => {
//   return (
//     <ContentWidthContainer>
//       <main className="content">
//         <h1>Thriday Code Challenge</h1>
//         <section>
//           <p>Toolbar</p>
//         </section>
//         <section>
//           <p>Transaction List</p>
//         </section>
//       </main>
//     </ContentWidthContainer>
//   );
// };

// export default App;







import * as React from "react";
import Toolbar from "./components/toolbar/Toolbar";
 import TransactionList from "./components/transactions/TransactionList";
import "./components/layout/ContentWidthContainer/styles.css";
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="content">
      <h1>Friday Code Challenge</h1>
      <Toolbar />
       <TransactionList /> 
    </div>
  );
};

export default App;
