import { ClientArea } from './components/ClientArea';
import FeatersArea from './components/FeaturesArea';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeArea from './components/HomeArea';
import ServiceArea from './components/ServiceArea';

function App() {
  return (
    <div className="motoapp">
      <Header />
      <HomeArea />
      <ServiceArea/>
      <FeatersArea/>
      <ClientArea />
      <Footer/>
    </div>
  )
}

export default App
