import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from "./views/Home";
import { Ground } from "./views/Ground";
import { GroundDetail } from "./views/GroundDetail";
import { Location } from "./views/Location";
import { Housing } from "./views/Housing";
import { AddProperty } from "./views/AddProperty";
import { HousingDetail } from "./views/HousingDetail";
import { Contact } from "./views/Contact";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import { Service } from "./views/Services";
import { Account } from "./views/Account";
import { History } from "./views/History";
import { Payement } from "./views/Payement";
import { Admin } from "./views/admin/Admin";

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
       
        <BrowserRouter>
            <Routes>

                <Route exact path="/" element={ <Home /> }> </Route>
                <Route exact path="/logement" element={ <Housing /> }> </Route>
                <Route exact path="/terrain" element={ <Ground /> }> </Route>
                <Route exact path="/contact" element={ <Contact /> }> </Route>
                <Route exact path="/connexion" element={ <Login /> }> </Route>
                <Route exact path="/inscription" element={ <Signup /> }> </Route>
                <Route exact path="/service" element={ <Service /> }> </Route>
                <Route exact path="/proprietes/:id" element={ <Location /> }> </Route>
                <Route exact path="/logement/:id" element={ <HousingDetail /> }> </Route>
                <Route exact path="/terrain/:id" element={ <GroundDetail /> }> </Route>
                <Route path="/nouveau-propriété" element={ <AddProperty /> }> </Route>
                <Route exact path="/mon-compte" element={ <Account /> }> </Route>
                <Route exact path="/historique-payement" element={ <History /> }> </Route>
                <Route exact path="/admin" element={ <Admin /> }> </Route>
                <Route exact path="/payement" element={ <Payement /> }> </Route>
    
                {/* <Route path="*" element={ <Error />  } ></Route> */}

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
