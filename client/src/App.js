import React from 'react'
import { Header } from "./components/Header";
import { Portfolio } from "./Page/portfolio";
import ContactModal from "./components/Modal";

function App() {
  return (
    <div>
      <Header />
      <Portfolio />
    </div>
  );
}

export default App;
