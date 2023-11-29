import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer"
import Header from "./components/header"
import Home from "./components/Home"
import About from "./components/About"
import Property from "./components/Property"
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <section style={{"marginBottom":"0px"}}>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/property' element={<Property/>}/>
      </Routes>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
