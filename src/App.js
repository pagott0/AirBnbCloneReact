import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Card from "./components/Card";
import data from "./components/data";


function App() {

  const cards = data.map(item => {
    return (
      <Card 
        rate={item.stats.rating}
        reviews={item.stats.reviewCount} 
        country={item.location} 
        img={item.coverImg}
        price={136}
        title={item.title}
      />
    )
  })


  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
      

    </div>
  )
}

export default App;
