import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Empresa from "../pages/Empresa";
import Contato from "../pages/Contato";
import Noticias from "../pages/Noticias";
import Error from "../pages/Error";
import Produto from "../pages/Produto";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="*" element={<Error />} />
            <Route path="/produto/:id" element={<Produto />} />
        </Routes>
    )
}
