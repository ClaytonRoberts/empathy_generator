import React from "react";

import "./App.css";
import MainPage from "./components/pages/MainPage";
import { StoreProvider, createStore } from "easy-peasy";
import storeModel from "./common/StoreModel";

const store = createStore(storeModel);

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <MainPage />
      </StoreProvider>
    </div>
  );
}

export default App;
