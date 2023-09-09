import React from "react";
import { Container } from "semantic-ui-react";
import "./Banner.scss";

export function Banner() {
  return (
    <div className="banner">
      <Container>
        <h1>Desarrollador Web y Mobile</h1>
        <h2>
          Bienvenido a mi rincón digital, donde la creatividad se encuentra con
          la tecnología. Soy Alvaro Malvestiti, un apasionado desarrollador web
          y mobile full stack con experiencia en el stack MERN. Explora mi
          portafolio y descubre cómo puedo convertir tus ideas en realidad.
        </h2>
      </Container>
      <div className="banner__dark"></div>
    </div>
  );
}
