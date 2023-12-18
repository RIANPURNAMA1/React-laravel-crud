
import './App.css'
import { About } from './components/About';
import Home from './components/Home';

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/navbar';
import Footer from './components/Footer';
import ListData from './components/data/ListData';
import Tambah from './components/data/Tambah';
import Edit from './components/data/Edit';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>heloo word</div>

  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/data",
    element: <ListData />

  },
  {
    path: "/tambah",
    element: <Tambah />
  }, {
    path: "/edit/:id",
    element: <Edit />
  }
])

function App() {
  return (
    <>
      <Navbar/>
      <div className='container-body'>
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  )
}

export default App
