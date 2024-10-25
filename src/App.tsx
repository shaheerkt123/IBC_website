import React from 'react';
import { store } from './toolkit/store'
import RouterConfig from './navigation/router.config'
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
        <RouterConfig />
      {/* </ThemeProvider> */}
    </Provider>
  );
};

export default App;
//run command = rm -rf node_modules/.vite