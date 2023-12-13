import {Col, Container, Row } from "react-bootstrap"
import uab from '../assets/img/uab.jpg'
import fondo4 from '../assets/img/fondo4.jpg'
import fondo5 from '../assets/img/fondo5.png'

export const Red = () =>{
    return(
    <section className="red" id="red">
        <hr/><h1>Se parte de nuestra comunidad Estudaintil</h1><hr/>
        <h1>Nunca pares de aprender</h1>
        <Container>
            <Row><hr/><img src={fondo5}/><br/><hr/><hr/><br/></Row>
            <Row className="red1"><img src={uab}></img></Row>
            <Row>
                <Col><div className="caja1b"><a href="https://www.uab.edu.bo/">Enterate de todos los beneficios de estudiar con nosotros</a></div></Col>
            </Row><br/>
        </Container>
    </section>
    
);   
}