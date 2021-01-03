import './App.css';
import Navbar from './components/Navbar/index';
import Hero from './components/Hero/index';

const App = () => {
  return (
    <div className="App">
      <section className="landing-page">
      <Navbar/>
      {/* <footer>
        <Footer/>
      </footer> */}
      </section>
     <Hero/>
    </div>

  );
}

export default App;
