import Home from "./pages/home";
import {BrowserRouter as Router} from 'react-router-dom';
import Pages from './pages/pages';
// import './App.css';
import './scss/main.scss';
import SearchHeader from "./components/header";
import Category from "./components/category";

function App() {
  
  return (
      <div className="app">      
        <Router>
          <SearchHeader/>
          <Category />
          <Pages />
        </Router>
      </div>
  );
}

export default App;
