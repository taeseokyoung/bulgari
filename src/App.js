import './css/App.scss';
import { Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './pages/Main';



function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>



    </Wrapper>
  );
}

export default App;
