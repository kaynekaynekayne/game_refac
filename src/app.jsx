import Home from "./pages/home";
import {BrowserRouter} from 'react-router-dom';
import Pages from './pages/pages';
import './App.css';

function App() {
  
  return (
      <div>      
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </div>
  );
}

export default App;
