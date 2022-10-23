import {BrowserRouter as Router} from 'react-router-dom';
import './scss/main.scss';
import Pages from './pages/pages';
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
