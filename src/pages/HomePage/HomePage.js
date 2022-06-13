import React from "react";
import { ButtonImg, Buttons, ButtonsLast, ButtonStyled, Card1, Card2, Card3, Card4, Card5,CarouselBox,Footer,ImgProfile, Info, Knowledge, Profile, SubSubTitleCard, SubTitleCard, Teste, Teste2, TitleCard } from "./styled";
import perfil from "../../assets/perfil.jpeg";
import whats from "../../assets/whatsapp.png";
import git from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import link from "../../assets/linkedin.png";
import cv from "../../ThiagoHenrique.CV.pdf"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./carousel.css"
import thiagro from "../../assets/Thiagro.jpg"
import zero from "../../assets/ZeroList.jpg"
import Button from '@mui/material/Button';

const HomePage = () => {
  return (
    <div>
      {/* Card 1 início */}
      <Card1>
      <Buttons>
          <a href="https://api.whatsapp.com/send?phone=5565992539584"><ButtonImg src={whats}/></a>
          <br/>
          <a href="https://github.com/thiagohenrique23"><ButtonImg src={git}></ButtonImg></a>
          <br/>
          <a href="https://www.instagram.com/th_king07/"><ButtonImg src={insta}></ButtonImg></a>
          <br/>
          <a href="https://www.linkedin.com/in/thiago-henrique-dos-santos-araujo/"><ButtonImg src={link}></ButtonImg></a>
        </Buttons>
        <div>
          <TitleCard>Eu sou Thiago Henrique</TitleCard>
          <br/>
          <SubTitleCard>Desenvolvedor Web Full Stack</SubTitleCard>
          <br/>
          <SubSubTitleCard>Bem vindes ao meu portfólio</SubSubTitleCard>
        </div>
      </Card1>
        {/* Card 1 final */}
        {/* Card 2 início */}
      <Card2>
        <Profile>
            <ImgProfile src={perfil}></ImgProfile>
        </Profile>
        <div>
          <TitleCard>Sobre mim</TitleCard>
          <br/>
          <SubSubTitleCard>Estudante de programação buscando a primeira oportunidade para iniciar minha carreira e transformar minha realidade através da educação e da tecnologia.</SubSubTitleCard> 
          <br/>
          <SubSubTitleCard>| NodeJS | MySQL | HTML | CSS | JavaScript |</SubSubTitleCard>
          <br/>
          <Button href={cv} download>Cv em pdf</Button>
        </div>
      </Card2>
          {/* Card 2 final */}
          {/* Card 3 início */}
      <Card3>
        <TitleCard>Meus conhecimentos</TitleCard>
        <Knowledge>
          <Info>
            <TitleCard>Front-end</TitleCard>
            <br/>
            <SubTitleCard>Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript. Criação de sites responsivos seguindo princípio de Mobile First.</SubTitleCard>
          </Info>
          <Info>
            <TitleCard>Back-end</TitleCard>
            <br/>
            <SubTitleCard>Aplicações utilizando NodeJS, Typescript e MySQL. Criação de API´s para comunicação com front-end seguindo princípio de Clean Code.</SubTitleCard>
          </Info>
        </Knowledge>  
      </Card3>
        {/* Card 3 final */}
        {/* Card 4 início */}
      <Card4>
        <TitleCard> Projetos </TitleCard>
        <Carousel infiniteLoop autoPlay>
        
          <div className="image">
            <img src={thiagro}/>
            <Button href="imminent-burn.surge.sh">Thiagro</Button>
            <SubSubTitleCard>Projeto Thiagro é um portal de notícias</SubSubTitleCard>
          </div>

          <div>
            <img src={zero}/>
            <Button href="https://questionable-owner.surge.sh/">Zero List</Button>
            <SubSubTitleCard>Projeto Zero List é uma lista que filtra animes por nomes</SubSubTitleCard>
          </div>
        </Carousel>
      </Card4>
      {/* Card 4 final */}
      {/* Card 5 início */}
      <Card5>
        <TitleCard>Contrate-me</TitleCard>
        <br/>
        <SubSubTitleCard>Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver e evoluir na minha carreira profissional</SubSubTitleCard>
        <br/>
        <SubSubTitleCard type="button">Email para contato: thiagohenrique2309@gmail.com</SubSubTitleCard>
        <br/>
        <SubSubTitleCard>Celular: (65) 9 9253-9584</SubSubTitleCard>
        
        <br/>
        <ButtonsLast>
          <a href="https://api.whatsapp.com/send?phone=5565992539584"><ButtonImg src={whats}/></a>
          <Teste></Teste>
          <a href="https://github.com/thiagohenrique23"><ButtonImg src={git}></ButtonImg></a>
          <Teste></Teste>
          <a href="https://www.instagram.com/th_king07/"><ButtonImg src={insta}></ButtonImg></a>
          <Teste></Teste>
          <a href="https://www.linkedin.com/in/thiago-henrique-dos-santos-araujo/"><ButtonImg src={link}></ButtonImg></a>
        </ButtonsLast>  
      </Card5>
      {/* Card 5 final */}
      <Footer>©2022 Thiago</Footer>
    </div>
        
  )
}

export default HomePage