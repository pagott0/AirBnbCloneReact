import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card rate="5.0" reviews="6" country="USA" img={require('./images/katie-zaferes.png')}/>
      
    </div>
  )
}

export default App;
