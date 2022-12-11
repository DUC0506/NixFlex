

import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Intro from './components/Intro/Intro';
// import Contents from './components/Contents/Contains';
// import Menus from './components/Menus/Menus';
// import MoviesDetail from './components/MoviesDetail/MoviesDetail';
// import SearchMovies from './components/SearchMovies/SearchMovies';

//import { useSelector } from 'react-redux';
import Home from './components/Pages/Home';
import {BrowserRouter , Routes, Route} from'react-router-dom'
import Search from './components/Pages/Search';
import Footer from './components/Footer';
import Collection from './components/Pages/Collection';
import Product from './components/Pages/Product';
import Watch from './components/Pages/Watch';
function App() {
 
  //console.log(moviesDetail)

    
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/search' element={<Search/>}/>
        <Route  path='/cart' element={<Collection/>}/>
        <Route  path='/product' element={<Product/>}/>
        <Route  path='/watch'     element={<Watch/>}/>
      </Routes> 
      
      <Footer/>
      
      </BrowserRouter>  
     
        
      {/* <SearchMovies/> */}
      
    </div>
  );
}

export default App;
