import './css/App.scss';

import { Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import History from './pages/History';
import HighJewelry from './pages/HighJewelry';




function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/brand' element={<History />}></Route>
        <Route path='/highjewelry' element={<HighJewelry />}></Route>
      </Routes>


      <Footer />
    </Wrapper>
  );
}

export default App;
