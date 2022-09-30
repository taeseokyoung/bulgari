import './css/App.scss';
import './css/Product.scss';

import { Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import History from './pages/History';
import HighJewelry from './pages/HighJewelry';
import ProductList from './shop/ProductList';
import Product from './shop/Product';
import { HISTORY, ICONIC, COLLECTION, PRODUCT } from './data/common'



function App() {
  return (
    <Wrapper>
      <Header PRODUCT={PRODUCT} />
      <Routes>
        <Route path='/' element={<Main ICONIC={ICONIC} COLLECTION={COLLECTION} PRODUCT={PRODUCT} />}></Route>
        <Route path='/brand' element={<History HISTORY={HISTORY} />}></Route>
        <Route path='/highjewelry' element={<HighJewelry />}></Route>
        <Route path='/List/:cate' element={<ProductList PRODUCT={PRODUCT} />}></Route>
        <Route path='/Itm/:itm' element={<Product PRODUCT={PRODUCT} />}></Route>
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
