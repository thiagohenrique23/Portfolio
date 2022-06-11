import React from "react";
import { ButtonImg, Buttons, Card1, Card2, Card3, Card4, Card5,ImgProfile, Info, Knowledge, Profile, SubSubTitleCard, SubTitleCard, TitleCard } from "./styled";
import perfil from "../../assets/perfil.jpeg";
import whats from "../../assets/whatsapp.png";
import git from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import link from "../../assets/linkedin.png";
import cv from "../../ThiagoHenrique.CV.pdf"

const HomePage = () => {
  return (
    <div>
      {/* Card 1 início */}
      <Card1>
      <Buttons>
          <a href="https://api.whatsapp.com/send?phone=5565992539584"><ButtonImg src={whats} onClick=""/></a>
          <br/>
          <a href="https://github.com/thiagohenrique23"><ButtonImg src={git} onClick=""></ButtonImg></a>
          <br/>
          <a href="https://www.instagram.com/th_king07/"><ButtonImg src={insta} onClick=""></ButtonImg></a>
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
          <SubSubTitleCard>| NodeJS | MySQl | HTML | CSS | JavaScript|</SubSubTitleCard>
          <br/>
          <a href={cv} download><button>CV em pdf</button></a>
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
        projetos em carrossel 
      </Card4>
      {/* Card 4 final */}
      {/* Card 5 início */}
      <Card5>
        <h1>Contrate-me</h1>
        <p>Algo</p>
        <p type="button">Email para contato: thiagohenrique2309@gmail.com</p>
        <p>Celular: (65) 9 9253-9584</p>
        <ButtonImg src={whats}/>
        <ButtonImg src={git}></ButtonImg>  
        <ButtonImg src={insta}></ButtonImg>  
        <ButtonImg src={link}></ButtonImg>  
      </Card5>
      {/* Card 5 final */}
      <footer>©2021 Thiago</footer>
    </div>
        
  )
}

export default HomePage