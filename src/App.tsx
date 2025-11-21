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
import SimulationsList from "./pages/simulationList"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/simular" element={<SimulationPage/>}/>
      <Route path="/simulacoes" element={<SimulationsList/>}/>
    </Routes>
  )
}

export default App
