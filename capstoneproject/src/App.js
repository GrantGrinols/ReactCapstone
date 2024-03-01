import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home.js'
import Order from './pages/Order.js'
import Confirmation from './pages/Confirmation.js'
import NoPage from './pages/NoPage.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
