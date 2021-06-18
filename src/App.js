
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Components/Header';




function App() {
  return (
    <div className="grid-container">
     
      <header>
        <a href="/">Goto home</a>
      </header>
      <main>
       Product List
      </main>
      <footer className="text-center">
        All right reserved.
      </footer>
     
    </div>
  );
}

export default App;
