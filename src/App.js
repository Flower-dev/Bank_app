// routes
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';
// components
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Routes/>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
