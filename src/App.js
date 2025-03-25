import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signup from './COMPONENTS/Signup';
import Signin from './COMPONENTS/Signin';
import Addproduct from './COMPONENTS/AddProducts';
import PageNotFound from './COMPONENTS/pagenotfound';
import GetProducts from './COMPONENTS/Getproducts';
import Aboutus from './COMPONENTS/Aboutus';
import Makepayment from './COMPONENTS/MakePayment';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FIT_CALDA</h1>
        <p><t>Perfectly Fit,Gorgeously You</t></p>
        <br/>
        <hr/>
        
        <Router>
        <Routes>
        <Route path='/signup' element={<Signup/>}>Sign Up</Route>
        <Route path='/signin'  element={<Signin/>}>Sign In</Route>
        <Route path='/addproducts' element={<Addproduct/>}>Add Products</Route>
        <Route path='/getproducts' element={<GetProducts/>}>Get Products</Route>
        <Route path='/makepayment' element={<Makepayment/>}>Make Payment</Route>
        <Route path='/aboutus' element={<Aboutus/>}> About us</Route>
        <Route path='/pagenotfound' element={<PageNotFound/>}>Page Not Found</Route>

        </Routes>
       </Router>
        
    
      </header>
    </div>
  );
}

export default App;
