import './css/App.scss';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Wrapper>
      <Header />

      <Routes>
        <Route></Route>
      </Routes>


    </Wrapper>
  );
}

export default App;
