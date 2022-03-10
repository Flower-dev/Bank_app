// routes
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';
// layout
import Navbar from './layouts/Navbar'
// components
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes/>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
