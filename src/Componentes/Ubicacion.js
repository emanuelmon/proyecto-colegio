import {Col, Container, Row } from "react-bootstrap"
import "react-multi-carousel/lib/styles.css"
import ReactPlayer from "react-player"


export const Ubicacion=()=>{
    return(
    <section className="ubicacion" id="ubicacion">
        <br/>
        <Container className="ubicacion">
            <Row>
                <Col><hr/><h1>Ubicación</h1><hr/></Col>
                <Col className="ubicacion1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402.1214122485079!2d-68.12054581527393!3d-16.49349580956576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206a6910ef27%3A0x4603ccebe0ff0c92!2sUnidad%20Educativa%20Adventista%20Miraflores!5e0!3m2!1ses-419!2sbo!4v1702419363252!5m2!1ses-419!2sbo" 
                width="500" height="450" 
                style={{ border:'0' }} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </Col>
            </Row>
        </Container>
    </section>
    )
}