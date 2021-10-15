import './App.css';
import NavBar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList';
import countries from './countries.json'
import { Route, Switch } from "react-router-dom";
import CountryDetails from './components/CountryDetails/CountryDetail';

import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="styling-div">
        <div style={{height:"600px"}} className="overflow-scroll">
          <CountriesList/>
        </div>
        <div>
          <Route path="/details/:CountryId" 
            render={(props) => <CountryDetails countries={countries} {...props}/>}
        /> 
        </div>
      
      </div>
     
    </div>
  );
}

export default App;
