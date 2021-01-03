import './App.css';
import Navbar from './components/Navbar/index';
import Hero from './components/Hero/index';

const App = () => {
  return (
    <div className="App">
       <Navbar/>
      <section className="landing-page">   
      {/* <footer>
        <Footer/>
      </footer> */}
      </section>
     <Hero/>
    </div>

  );
}

export default App;
