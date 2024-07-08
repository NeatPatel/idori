import main_img from './assets/main_img.png';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />

      <img src={main_img} width="100%" height="auto" />
    </>
  );
}

export default App;
