import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SnakeBackground from "./components/SnakeBackground";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Cursos from "./pages/Cursos";
import Agendamento from "./pages/Agendamento";

export default function App() {
  return (
    <HashRouter>
      <SnakeBackground />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}
