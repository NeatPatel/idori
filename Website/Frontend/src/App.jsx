import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Blog from './pages/Blog.jsx';
import EcoBrands from './pages/EcoBrands.jsx';
import Sustainability from './pages/Sustainability.jsx';
import Partners from './pages/Partners.jsx';
import Philanthropy from './pages/Philanthropy.jsx';
import Production from './pages/Production.jsx';
import MeetTheTeam from './pages/MeetTheTeam.jsx';
import ContactUs from './pages/ContactUs.jsx';
import GetInvolved from './pages/GetInvolved.jsx';
import Press from './pages/Press.jsx';
import Play from './pages/Play.jsx';

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="blog" element={<Blog />} />
            <Route path="eco-friendly-brands" element={<EcoBrands />} />
            <Route path="sustainability-activities" element={<Sustainability />} />
            <Route path="partners" element={<Partners />} />
            <Route path="philanthropy" element={<Philanthropy />} />
            <Route path="production" element={<Production />} />
            <Route path="meet-the-team" element={<MeetTheTeam />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="get-involved" element={<GetInvolved />} />
            <Route path="press" element={<Press />} />
            <Route path="play" element={<Play />} />
          </Route>
        </Routes>

        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
