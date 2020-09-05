import React from 'react';
import Header from './components/header/header';
import Characters from './components/characters/characters';
import Episodes from './components/episodes/episodes';
import Locations from './components/locations/locations';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from './components/context/context';
import RMservice from './components/RMservice/rmservice';
import Footer from './components/footer/footer';

function App() {

  const rmservice = new RMservice();

  return (
    <Provider value={rmservice}>
      <Router>
        <div className="container py-2 text-center">
        <Header/>
          <Switch>
            <Route path="/" exact>
              <img src="https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e" alt="ricknmorty" className="topheader"/>
            </Route>
            <Route path="/characters/">
              <Characters/>
            </Route>
            <Route path="/episodes/">
              <Episodes/>
            </Route>
            <Route path="/locations/">
              <Locations/>
            </Route>
            <Route renter={() => <h2> THERE'S NO SUCH PAGE, MAN</h2>}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
