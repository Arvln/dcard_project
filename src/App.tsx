import React from "react";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./store/stores";

function App() {

  return (
    <Provider store={store} >
      <AppRouter />
    </Provider>
  );
}

export default App;
