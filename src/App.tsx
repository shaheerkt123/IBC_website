import { Provider } from 'react-redux'
import './App.css'
import { store } from './toolkit/store'
import RouterConfig from './navigation/router.config'

function App() {

  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
        <RouterConfig />
      {/* </ThemeProvider> */}
    </Provider>
  )
}

export default App
