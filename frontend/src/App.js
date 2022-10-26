import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Layout from './layout/Layout';
import Carousel from './components/Carousel';

import { Provider } from 'react-redux'
import store from './store'

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              {/* <Route index /*element={} /> */}
            </Route>
            <Route path='hola' element={<Carousel/>}>
              {/* <Route index /*element={} /> */}
            </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
