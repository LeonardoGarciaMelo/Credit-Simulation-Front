// src/pages/Simulation/styles.ts
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const pulse = keyframes`
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.25; }
`;

// Container principal da página
export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 40px 20px;
  position: relative;
  overflow-x: hidden;
`;

// Background com gradiente (mesmo da home)
export const Background = styled.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #0f172a 0%, #312e81 50%, #0f172a 100%);
  z-index: 0;
`;

// Efeitos de luz
export const LightEffect1 = styled.div`
  position: fixed;
  top: 20%;
  left: -20%;
  width: 400px;
  height: 400px;
  background: #2563eb;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(90px);
  opacity: 0.15;
  animation: ${pulse} 8s ease-in-out infinite;
  z-index: 0;
`;

export const LightEffect2 = styled.div`
  position: fixed;
  bottom: 20%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: #7c3aed;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(90px);
  opacity: 0.15;
  animation: ${pulse} 8s ease-in-out infinite;
  animation-delay: 3s;
  z-index: 0;
`;

// Container principal com glassmorphism
export const Container = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px;
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 1;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

// Link de voltar
export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  color: #93c5fd;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    transform: translateX(-4px);
  }

  &::before {
    content: '←';
    font-size: 1.2rem;
  }
`;

// Header
export const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    letter-spacing: -0.025em;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

// Mensagem de erro
export const ErrorMessage = styled.div`
  padding: 16px 20px;
  background: rgba(239, 68, 68, 0.15);
  color: #fecaca;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  margin: 20px 0;
  text-align: center;
  font-weight: 500;
  backdrop-filter: blur(8px);
`;