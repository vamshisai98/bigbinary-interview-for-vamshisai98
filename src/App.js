import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import './lib/font-awesome/css/all.min.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='content'>
          <Table />
        </div>
      </div>
    </Router>
  );
}

export default App;
