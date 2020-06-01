import React,{Component} from 'react';
import Accueil from "./Accueil.js";
import Stat from "./Stat.js";
import CarteMaroc from "./Map/CarteMaroc.jsx";
import Map1 from "./Map/Map1.jsx";
import Map2 from "./Map/Map2.jsx";
import Map3 from "./Map/Map3.jsx";
import Map4 from "./Map/Map4.jsx";
import Map5 from "./Map/Map5.jsx";
import Map6 from "./Map/Map6.jsx";
import Map7 from "./Map/Map7.jsx";
import Map8 from "./Map/Map8.jsx";
import Map9 from "./Map/Map9.jsx";
import Map10 from "./Map/Map10.jsx";
import Map11 from "./Map/Map11.jsx";
import Map12 from "./Map/Map12.jsx";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Statcoop from "./Component/Statcoop.js";
import Nav_bar from "./Component/Nav_bar.js";
function App() {
  return (
    <BrowserRouter>
     <Switch>
     <Route path="/" exact component={Accueil}/>
     <Route path="/Stat"  exact component={Stat}/>
     <Route path="/Map"  exact component={CarteMaroc}/>
     <Route path="/Map1"  exact component={Map1}/>
     <Route path="/Map2"  exact component={Map2}/>
     <Route path="/Map3"  exact component={Map3}/>
     <Route path="/Map4"  exact component={Map4}/>
     <Route path="/Map5"  exact component={Map5}/>
     <Route path="/Map6"  exact component={Map6}/>
     <Route path="/Map7"  exact component={Map7}/>
     <Route path="/Map8"  exact component={Map8}/>
     <Route path="/Map9"  exact component={Map9}/>
     <Route path="/Map10"  exact component={Map10}/>
     <Route path="/Map11"  exact component={Map11}/>
     <Route path="/Map12"  exact component={Map12}/>
     <Route path="/Map12"  exact component={Map12}/>
     <Route path="/coop/:id" exact component={Statcoop}/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
