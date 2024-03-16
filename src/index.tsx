import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import { Provider } from "react-redux";
import { store } from "./services/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        <AdaptivityProvider>
          <App />
        </AdaptivityProvider>
      </ConfigProvider>
    </Provider>
    ,
  </React.StrictMode>,
);
