import React from 'react';
import { store } from './toolkit/store'
import RouterConfig from './navigation/router.config'
import { Provider } from "react-redux";
import HomeScreen from './screens/home.tsx'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
        <div className="App">
          <HomeScreen />
        </div>
        <RouterConfig />
      {/* </ThemeProvider> */}
    </Provider>
  );
};

export default App;