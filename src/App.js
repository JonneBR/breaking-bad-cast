import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar/index';
import Hero from './components/Hero/index';


const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`https://www.breakingbadapi.com/api/characters`)
      const result = await response.json()
      // console.log(result);
      setItems(result)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="App">
       <Navbar/>
      <section className="landing-page">   
      </section>
      <section className="hero">
     <Hero isLoading={isLoading} items={items}/>
     </section>
    </div>

  );
}

export default App;
