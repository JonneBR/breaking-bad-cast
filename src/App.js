import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Navbar/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <footer>
        <Footer/>
      </footer>
    </div>

  );
}

export default App;
