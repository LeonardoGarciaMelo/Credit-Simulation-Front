/**
 * @file src/App.tsx
 *
 * Componente raiz (container) da aplicação.
 * * Responsabilidades:
 * 1. Gerenciar o estado principal (dados da simulação, loading, erros).
 * 2. Orquestrar a chamada à API de simulação.
 * 3. Renderizar os componentes filhos (Formulário e Resultado).
 */

import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import SimulationPage from "./pages/simulation"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/simular" element={<SimulationPage/>}/>
    </Routes>
  )
}

export default App
