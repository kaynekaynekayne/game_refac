import Home from "./pages/home";
import {BrowserRouter} from 'react-router-dom';
import Pages from './pages/pages';
import './App.css';
import SearchHeader from "./components/searchHeader";

function App() {
  
  return (
      <div className="app">      
        <BrowserRouter>
          <SearchHeader/>
          <Pages />
        </BrowserRouter>
      </div>
  );
}

export default App;
