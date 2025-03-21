// Font imports
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";

import ContentWidthContainer from "./components/layout/ContentWidthContainer";
import TransactionsList from "./components/TransactionsList";

import "./App.css";

/*
  To reference icons:
  
  import checkIcon from "./assets/check-circle-fill.svg";
  import receiptIcon from "./assets/receipt.svg";
  import plusIcon from "./assets/plus.svg";
  import minusIcon from "./assets/minus.svg";

  <img src={receiptIcon} />
*/

const App = () => {
  return (
    <ContentWidthContainer>
      <main className="content">
        <h1>Transactions</h1>
        <TransactionsList />
      </main>
    </ContentWidthContainer>
  );
};

export default App;
