import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from './components/Home';
import { Pricing } from './components/Pricing';
import {About} from "./components/About"
import { Contacts } from './components/Contacts';
import Navigation from './components/Navigation';
import { Products } from './components/Products';


function App() {
  return (
    <div className="App">
     <h1>Hello react router</h1>
     <Navigation/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/products/:productId' element={<Products/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/*' element={<h2>Not Found</h2>}/>
     </Routes>
    </div>
  );
}

export default App;
