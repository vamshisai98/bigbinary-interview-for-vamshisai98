import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  return (
    <Router>
      <Route path='/'>
        {/* <Redirect to='/page=1' /> */}
        <div className='App'>
          <Header />
          <div className='content'>
            <Table />
          </div>
        </div>
      </Route>
    </Router>
  );
}

export default App;
