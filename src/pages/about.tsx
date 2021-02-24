import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>
        Gurú de datos es un espacio en el que podras encontrar contenido de alta calidad, con
        ejemplos que siguen las mejores prácticas, con código actualizado y del estado del arte de
        ciencia de datos, inteligencia artificial, programación, publicación de modelos en
        producción y más.
      </p>
      <p>
        Buscamos otorgar a la comunidad de expertos en manejo de datos de habla hispana una
        plataforma en la que les sea posible compartir su conocimiento en sus áreas de experiencia.
      </p>
    </Content>
  </Main>
);

export default About;
