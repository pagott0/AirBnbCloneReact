import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Card from "./components/Card";
import data from "./components/data";


function App() {

  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cardsContent">
        {cards}
      </div>
      

    </div>
  )
}

export default App;
