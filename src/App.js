import {useState} from "react";
import './App.css';
import Header from "./Header";
import Recommended from './Recommended';
import Sidebar from "./Sidebar";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import {BrowserRouter as Router,Switch,Route}from  "react-router-dom"



function App() {
  const [coll,setColl]=useState(false);

  return (
    <div className="App">
    
    <Router>
    <Header coll={coll} setColl={setColl}/>
    <Switch>
    <Route path="/search/:searchTerm"><SearchPage coll={coll} setColl={setColl}/></Route>
    <Route path="/" ><HomePage coll={coll} setColl={setColl}/></Route>
    
    
    </Switch>
    </Router>

      
      
      
      
    </div>
  );
}

export default App;

//Lets start by making youtube navbar first


//Hey everyone welcome to our new video 
//In this video we'll be completing our youtube home page


//We have completed our home page in the next video we'll make the search page
//Till then good bye and dont forget to like and comment and if you are new then hit that subscibe button