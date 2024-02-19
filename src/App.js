import './App.css';
import './scripts.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './routes/homepage/home.component';
import Layout from './routes/homepage/layout.component';
import SobreNosPage from './routes/sobreNos-page/sobreNos-page.component';
import LazerExperienciasPage from './routes/lazer-experiencias-page/lazer-experiencias-page.component';
import SustentabilidadePage from './routes/sustentabilidade-page/sustentabilidade-page.component';
import GaleriaPage from './routes/galeria-page/galeria-page.component';
import ContactosPage from './routes/contactos-page/contactos-page.component';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />}/>
          <Route path="/sobre-nos" element={<SobreNosPage />} />
          <Route path="/lazer-experiencias" element={<LazerExperienciasPage />} />
          <Route path="/sustentabilidade" element={<SustentabilidadePage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/contactos" element={<ContactosPage />} />
          <Route path="/livro-informacoes" element={<ContactosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

