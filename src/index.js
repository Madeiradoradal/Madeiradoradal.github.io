import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './context'
import en from "./assets/icons/flags/language/en.svg";
import es from "./assets/icons/flags/language/es.svg";
import {
  Translator,
  Config
} from "react-translator-component";

Config.default = "en";
Config.list = {
  en: {
    text: "English",
    icon: require("./assets/icons/flags/language/en.svg"),
    file: require("./helpers/locale/en")
  },
  es: {
    text: "Español",
    icon: require("./assets/icons/flags/language/es.svg"),
    file: require("./helpers/locale/es")
  }
};

ReactDOM.render(
  <React.StrictMode>
  <RoomProvider>
    <Translator>
      <App />
    </Translator>
  </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
