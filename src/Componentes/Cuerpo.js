import {Col, Container, Row } from "react-bootstrap"
import fondo3 from '../assets/img/fondo3-removebg-preview.png'
import logA1 from '../assets/img/logros academicos1.jpg'
import fondo1 from '../assets/img/fondo1.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

export const Cuerpo=()=>{
    return(
        <section className="cuerpo" id="cuerpo">
        <Container class="caja1">
            <Row>
                <Col xs={12} md={6} xl={7}>
                    <h1>{'Enterate y se parte de los logros de nuestros estudiantes'}</h1><br/><br/>
                    <p>Felicidades a Hector Samuel Puñi Vino por su destacada participación en la 12 Olimpiada Científica Estudiantil logrando el 3er lugar 🥉 en el área de química. El miércoles 7 de diciembre en horas de la mañana se realizó el acto de premiación y reconocimiento a ganadores a nivel departamental de la 12 Olimpiada Científica, este acto se desarrollo en el auditorio de la Dirección Departamental de Educación con la presencia de autoridades educativas.</p>
                    <button id="boton1" href='https://www.facebook.com/AdventistaLaPazMiraflores/videos/1507568463400601'>Entrega del certificado</button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <br/><br/><br/><br/>
                    <img src={logA1} alt="Header" id="logros1"></img>
                </Col>
            </Row>
        </Container>
    </section>
    )
}