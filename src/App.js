import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Allroute from './route/Allroute';
import Footer from './components/Footer';
function App() {
  return (

    <div className="App">
    <Navbar />
    <Allroute/>
    <Footer />
    </div>
   
  );
}

export default App;
