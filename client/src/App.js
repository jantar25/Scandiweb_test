import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import ProductList from './Pages/ProductList/ProductList';
import AddProduct from './Pages/AddProduct/AddProduct';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
