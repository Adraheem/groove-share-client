import {App as AntApp, ConfigProvider} from 'antd';
import React from 'react';
import RootNavigation from "./navigation";
import {Provider} from "react-redux";
import store, {persistor} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import authService from "./services/auth.service";

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        onBeforeLift={authService.reauthenticate}
        // loading={<AppLoading/>}
        persistor={persistor}>
        <ConfigProvider theme={{
          token: {
            colorPrimary: "#DC1E11",
            fontFamily: "inherit",
            colorLink: "#0A0A0B",
            colorLinkHover: "#DC1E11",
            colorLinkActive: "#DC1E11",
          }
        }}>
          <AntApp>
            <RootNavigation/>
          </AntApp>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
