import { FaCalculator, FaChartBar, FaListAlt } from 'react-icons/fa';
import * as S from './styles';

function Home() {
  return (
    <S.PageContainer>
      <S.Background>
        <S.LightEffect1 />
        <S.LightEffect2 />
        <S.LightEffect3 />
      </S.Background>

      <S.ContentWrapper>
        <S.GlassContainer>
          <S.HomeHeader>
            <h1>Simulador de Crédito</h1>
            <p>Escolha uma opção</p>
          </S.HomeHeader>

          <S.HomeGrid>
            <S.GridItem to="/simular">
              <FaCalculator />
              <span>Simular Empréstimo</span>
            </S.GridItem>

            <S.GridItem to="/simulacoes">
              <FaListAlt />
              <span>Ver Simulações</span>
            </S.GridItem>

            <S.GridItem to="/dashboard">
              <FaChartBar />
              <span>Dashboard</span>
            </S.GridItem>
          </S.HomeGrid>

          <S.HomeFooter>
            <p>Simule seu empréstimo com as melhores taxas do mercado</p>
          </S.HomeFooter>
        </S.GlassContainer>
      </S.ContentWrapper>
    </S.PageContainer>
  );
}

export default Home;