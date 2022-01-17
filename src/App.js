import './assets/dart-scss/style.scss'
import './App.css';
import Home from './app/policy_search/Home'
import Policy from './app/policy_search/Policy';
import Login from './app/Login/Login';
import Upload from './app/Policy_Attachment/Upload';
import EligibilityCheck from './app/Eligibility_Check/EligibilityCheck';
import ReportLoss from './app/Report_Loss/ReportLoss';
import Dashboard from './app/Dashboard.js/Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/policy/:id" component={Policy} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/attachment" component={Upload} />
          <Route exact path="/eligibilitycheck" component={EligibilityCheck} />
          <Route exact path="/reportloss" component={ReportLoss} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
