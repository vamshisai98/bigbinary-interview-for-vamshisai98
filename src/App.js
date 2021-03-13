import './App.css';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Table />
      </div>
    </div>
  );
}

export default App;
