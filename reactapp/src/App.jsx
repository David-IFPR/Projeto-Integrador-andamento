import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Erro404 from './pages/Erro404';
import Perfil from './pages/Perfil';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<About/>} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="*" element={<Erro404/>} />
      </Routes>
    </BrowserRouter>
  );
}
