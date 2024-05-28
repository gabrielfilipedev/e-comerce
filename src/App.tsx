import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store'

import Header from './components/Header'
import GlobalCss from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss></GlobalCss>
        <div className="App container">
          <Header></Header>
        </div>
        <Rotas />
        <Footer></Footer>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
