import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Telegram} from "components/telegram/Telegram";
import {Main} from "components/blocks/Main";
import {Counters} from "components/counters/Counters";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Main name={"React-developer portfolio"}/>} />
      <Route path="/telegram" element={<Telegram name={"Messenger"}/>} />
      <Route path="/counters/*" element={<Counters/>} />
      {/*<Route path="/cv" element={<PdfViewerComponent/>} />*/}
    </Routes>
  );
}

export default App;
