import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Criar_Conta from './pages/Criar_Conta';
import Erro404 from './pages/Erro404';
import Perfil from './pages/Perfil';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Criar_Conta" element={<Criar_Conta/>} />
        {/* <Route path="/perfil" element={<Perfil/>} /> */}
        <Route path="*" element={<Erro404/>} />
      </Routes>
    </BrowserRouter>
  );
}
