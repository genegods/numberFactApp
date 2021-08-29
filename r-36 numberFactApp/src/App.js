import React from "react";
import "./App.css";
import NumberApp from "./components/number/NumberApp";
import {store} from './redux/store'
import { Provider } from "react-redux";


const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
      <NumberApp/>
      </Provider>
     
    </React.Fragment>
  );
};

export default App;
