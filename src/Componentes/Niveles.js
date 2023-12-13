import {Col, Container, Row } from "react-bootstrap"
import nivel1 from '../assets/img/nivel1.png'
import nivel2 from '../assets/img/nivel2.png'
import nivel3 from '../assets/img/nivel3.png'
import insimg from '../assets/img/inst img.png'
import { CarouselI } from "./CarouselI"

import Carousel from 'react-bootstrap/Carousel';

export const Niveles=()=>{
    return(
    <section id="niveles" className='niveles'>
        <hr/><h1>Niveles de eneñanza</h1><hr/>
        <Container className="niveles1">
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <Row>
                <Col>
            <div className="a1n">
            <img className="imgc1"  src={nivel1} alt="First slide" />
            <Carousel.Caption>
            </Carousel.Caption>
            </div></Col>
            <Col>
            <div className="a1n"><br/><br/><br/><br/>
                <h2>Inicial en Familia Comunitaria</h2>
                <p>La Educación Infantil es la primera etapa de la Educación Básica y objetiva el desarrollo integral del niño, en sus aspectos físico, afectivo, intelectual, lingüístico y social, en asociación con la familia y la comunidad. Dividido en tres períodos lectivos (del primero al tercero) para niños de 3 a 5 años. </p>
            </div></Col>
            </Row>
        </Carousel.Item>
      <Carousel.Item><Row><Col>
            <div className="a1n">
            <img className="imgc1"  src={nivel2} alt="First slide" />
            <Carousel.Caption>
            </Carousel.Caption>
            </div></Col><Col>
            <div className="a1n"><br/><br/><br/><br/>
                <h2>Primaria Comunitaria Vocacional</h2>
                <p>La Enseñanza primaria tiene por objetivo la formación indispensable para el ejercicio de la ciudadanía. El estudiante aprenderá a leer, interpretar, calcular y comprender mejor las dinámicas sociales, conociendo nuestra historia, planeta y características importantes del medio ambiente, además de formaciones complementarias.</p>
            </div></Col></Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row><Col>
      <div className="a1n">
            <img className="imgc1"  src={nivel3} alt="First slide" />
            <Carousel.Caption>
            </Carousel.Caption>
            </div></Col><Col>
            <div className="a1n"><br/><br/><br/><br/>
                <h2>Secundaria Comunitaria Productiva</h2>
                <p>Los enfoques pasan a ser ampliados y más segmentados, con profesores especializados en cada disciplina. La Red Educativa Adventista ofrece soporte de laboratorios, intercambios y didácticas diferenciadas. no todas las instituciones educativas adventistas ofrecen educación en todos los niveles. Consulte aquí.</p>
            </div></Col></Row>
      </Carousel.Item>
    </Carousel>           
        </Container>
    </section>
    );
}