import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import { Provider } from 'react-redux';
import store from './utils/store/store';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainBody from './components/MainBody';
import WatchPage from './components/WatchPage';


const router = createBrowserRouter([
  {
  path: "/",
  element: (<Body />),
  children: [{
    path: '/',
    element: <MainBody />
  },
    {path: 'watch',
    element: <WatchPage />
  }]
  }
])

function App() {
  return (<>
  <Provider store={store} >
  <Header />
  <RouterProvider router={router} />
  </Provider>
  </> 
  )
}

export default App;
