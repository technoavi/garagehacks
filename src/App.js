
import './App.css';
import Forms from "./components/Forms/Forms";
import Screenshot from "./components/screenshot/Screenshot";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    
     <Route exact path="/">
     <Forms/>
          </Route>
          <Route path="/scr">
            <Screenshot />
          </Route>
    </div>
    </Router>
  );
}

export default App;
