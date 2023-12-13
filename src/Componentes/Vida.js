import {Col, Container, Row } from "react-bootstrap"
import insimg from '../assets/img/inst img.png'
import { CarouselI } from "./CarouselI"
import clubin from '../assets/img/clubingles.jpg'
import clubre from '../assets/img/clubre.jpg'


export const Vida=()=>{
    return(
    <section id="vida" className='vida'>
        <hr/><h1>Únete a nosotros y sé parte de algo especial</h1><hr/>
        <Container className="vidae">
            <Row>
                <Col>
                    <h3>Se parte de nuestro club de inglés</h3>
                    <img src={clubin}/><br/>
                    <button >Invitación</button>
                </Col>
                <Col>
                    <h3>Comparte nuestra fé</h3>
                    <img src={clubre}></img>
                </Col>
            </Row>
        </Container>
    </section>
    );
}