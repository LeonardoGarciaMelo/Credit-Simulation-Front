// src/pages/Home/styles.ts
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Animação de pulse para os efeitos de luz
const pulse = keyframes`
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.3;
  }
`;

// Container principal da página
export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

// Background com gradiente
export const Background = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0f172a 0%, #312e81 50%, #0f172a 100%);
`;

// Efeitos de luz no fundo
export const LightEffect1 = styled.div`
  position: absolute;
  top: 25%;
  left: -25%;
  width: 384px;
  height: 384px;
  background: #2563eb;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(80px);
  opacity: 0.2;
  animation: ${pulse} 6s ease-in-out infinite;
`;

export const LightEffect2 = styled.div`
  position: absolute;
  bottom: 25%;
  right: -25%;
  width: 384px;
  height: 384px;
  background: #7c3aed;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(80px);
  opacity: 0.2;
  animation: ${pulse} 6s ease-in-out infinite;
  animation-delay: 2s;
`;

export const LightEffect3 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 384px;
  height: 384px;
  background: #4f46e5;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(80px);
  opacity: 0.15;
  animation: ${pulse} 6s ease-in-out infinite;
  animation-delay: 4s;
`;

// Wrapper do conteúdo
export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  z-index: 1;
`;

// Container com glassmorphism
export const GlassContainer = styled.div`
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

// Header
export const HomeHeader = styled.header`
  text-align: center;
  margin-bottom: 48px;

  h1 {
    font-size: 3.75rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 12px 0;
    letter-spacing: -0.025em;
    line-height: 1;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 0.875rem;
    color: #bfdbfe;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`;

// Grid de opções
export const HomeGrid = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

// Item do grid (Link clicável)
export const GridItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
    color: #93c5fd;
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: #ffffff;
  }

  span {
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 24px;

    svg {
      width: 48px;
      height: 48px;
    }
  }
`;

// Footer
export const HomeFooter = styled.footer`
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    font-size: 0.875rem;
    color: rgba(191, 219, 254, 0.6);
    margin: 0;
  }
`;