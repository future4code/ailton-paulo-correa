import React from "react";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import foto from "./img/foto-paulo.png";
import veja from "./img/veja-mais.png";
import motorista from "./img/motorista.jpg";
import estudante from "./img/estudante.jpg";
import email from "./img/e-mail.png";
import local from "./img/local.png";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import github from "./img/github.png";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle/globalstyle";

const SectionApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const SectionCard = styled.div`
  width: 720px;
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    width: 440px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

const SubTitulo = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

function App() {
  return (
    <SectionApp>
      <GlobalStyle />
      <SectionCard>
        <SubTitulo>Dados pessoais</SubTitulo>
        <CardGrande
          imagem={foto}
          nome="Paulo Henrique Correa da Silva"
          descricao="Oi, eu sou o Paulo. Sou estudante da Labenu. Sou uma pessoa calma e tranquila, também gosto de ajudar e aprender com os colegas."
        />

        <ImagemButton
          imagem={veja}
          texto="Ver mais"
          link="https://www.linkedin.com/in/paulo-henrique-correa-da-silva-68782b236/"
        />
      </SectionCard>

      <SectionCard>
        <CardPequeno
          imagem={email}
          tipo="E-mail: "
          texto="phc.silva@outlook.com.br"
        />
      </SectionCard>

      <SectionCard>
        <CardPequeno imagem={local} tipo="Cidade: " texto="Quatá - São Paulo" />
      </SectionCard>

      <SectionCard>
        <SubTitulo>Experiências profissionais</SubTitulo>
        <CardGrande
          imagem={motorista}
          nome="Motorista/Entregador"
          descricao="Entregando produtos a domicílio."
        />

        <CardGrande
          imagem={estudante}
          nome="Desenvolvedor/Estudante"
          descricao="Desenvolvendo meu conhecimento para virar um desenvolvedor."
        />
      </SectionCard>

      <SectionCard>
        <SubTitulo>Minhas redes sociais</SubTitulo>
        <ImagemButton
          imagem="https://i.pinimg.com/originals/3b/dc/ab/3bdcab2937d0f583ba8ed16e9bd6463f.gif"
          texto="Curioso"
          link="http://vagabond-smell.surge.sh/"
        />

        <ImagemButton
          imagem={github}
          texto="GitHub"
          link="https://github.com/phcsilva056"
        />
      </SectionCard>
    </SectionApp>
  );
}

export default App;
