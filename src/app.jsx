import Home from "./pages/home";
import {BrowserRouter as Router} from 'react-router-dom';
import Pages from './pages/pages';
import './App.css';
import SearchHeader from "./components/searchHeader";

function App() {
  
  return (
      <div className="app">      
        <Router>
          <SearchHeader/>
          <Pages />
        </Router>
      </div>
  );
}

export default App;
