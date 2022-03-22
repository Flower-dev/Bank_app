// routes
import { BrowserRouter } from "react-router-dom";
import Routes from './routes/routes'
// layout
import Navbar from './layouts/Navbar';
// components
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <div className="container">
          <Routes/>
        </div>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

