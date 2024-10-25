import { Provider } from "react-redux";
import "./App.css";
import { store } from "./toolkit/store";
import RouterConfig from "./navigation/router.config";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <RouterConfig />
      {/* </ThemeProvider> */}
    </Provider>
  );
}

export default App;
