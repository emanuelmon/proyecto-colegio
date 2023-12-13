import {Col, Container, Row } from "react-bootstrap"
import fondo3 from '../assets/img/fondo3-removebg-preview.png'
import logA1 from '../assets/img/logros academicos1.jpg'
import fondo1 from '../assets/img/fondo1.jpg'
import insimg from '../assets/img/inst img.png'
import { CarouselI } from "./CarouselI"


export const Institucional=()=>{
    return(
    <section id="institucional" className='institucional'>
        <Container className="institucionalC">
            <Row>
                <Col><img src={insimg}/></Col>
                <Col className="t1"><p>Inspirado en la ética y los valores cristianos, nuestro sistema de aprendizaje incluye una editorial propia, que provee materiales y contenidos exclusivos para cumplir con los requisitos académicos de cada país a lo largo de todos los niveles de enseñanza. Esto nos permite ofrecer los mejores libros de texto, complementados con contenidos didácticos interactivos y significativos, que contribuyen a la formación integral del estudiante. Nuestro objetivo es desarrollar la habilidad de pensar, reflexionar y actuar para el bien de la sociedad. Queremos preparar a nuestros estudiantes para el pleno ejercicio de su ciudadanía y la construcción de su proyecto de vida.</p></Col>
            </Row><br/>
            <Row className="intermedio1"><Col><h2><hr color="black"/>Nos preocupamos por la educación de tus hijos</h2><hr/></Col></Row><br/>
            <Row>
                <CarouselI></CarouselI>
            </Row>
        </Container>
    </section>
    );
}