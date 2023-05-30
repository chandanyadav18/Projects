import Nav from './components/Nav';
import './App.css';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import Footer from './components/Footer';
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Nav/>
          <Routes>
             <Route path="/" element={<h1>product component listing</h1>}/>
             <Route path="/add product" element={<AddProduct />} />
             <Route path="/update" element={<UpdateProduct / >}/>
             <Route path="/logout" element={<h1>product component listing</h1>}/>
             <Route path="/profile" element={<h1>product component listing</h1>}/>
            
           </Routes>
            <Route path="/singup" element={<h1>singup</h1>}/>
            <Route path='/login' element={<h1>loguin</h1>}/>
      
      </BrowserRouter>
      <Footer />
     
      </div>
        
  )
}

export default App;
