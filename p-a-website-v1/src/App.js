import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import ContactUs from './components/pages/ContactUs/ContactUs';

import Products from './components/Products';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Route exact path = "/products" component = {Products}/>
      <Route exact path = "/contactUs" component = {ContactUs}/>


      {/* <Products/> */}
      <Footer/>
    </Router>
  );
}

export default App;
