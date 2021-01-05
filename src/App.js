import './App.css';
import './index.css';
import Cards from './components/Cards';
import Title from './components/Title';


function App() {
  return (
    <div className="main-container">
      <div className="main">
      <Title />
      <Cards />
      </div>      
    </div>
  );
}

export default App;
