import {Col, Container, Row } from "react-bootstrap"
import fondo3 from '../assets/img/fondo3-removebg-preview.png'
import logA1 from '../assets/img/logros academicos1.jpg'
import fondo1 from '../assets/img/fondo1.jpg'


export const Baner=()=>{
    return(
    <section id="home" className='fondobaner'>
        <Container>
            <Row><Col lg={62}><img src={fondo1} className="imgfond" id="imgfond"/><br/><br/><br/><br/><br/></Col></Row>
        </Container>
    </section>
    );
}