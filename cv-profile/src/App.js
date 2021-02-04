import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Work from './components/Works/Works';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={ Home}/>
                    <Route path="/about"  component={About} />
                    <Route path="/work" component={Work} />
                
                </Switch>
                 
            </div>
               <Footer />
        </Router>
       
    )
}


export default App;