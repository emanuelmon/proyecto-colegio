import {Col, Container, Row } from "react-bootstrap"
import "react-multi-carousel/lib/styles.css"
import ReactPlayer from "react-player"
import extra1 from '../assets/img/extra1.png'
import extra2 from '../assets/img/extra2.png'

export const Extracurricular=()=>{
    return(
        <section className="extracurricular" id="extracurricular">
            <hr/><h1>Actividades Extracurricular</h1><hr/>
        <Container class="caja1">
            <Row><center><h2>Se parte del coro juvenil</h2></center></Row>
            <Row>
                <Col>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=LabFcMy8-IY'
                        width='100%'
                        height='300%'
                        controls
                    />
                </Col>
            </Row><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Row><center><h2>Participa en otras Actividades</h2></center></Row><br/>
            <Row>
                <Col><img src={extra1} className="extrai1"/></Col>
                <Col><img src={extra2} className="extrai2"/></Col>
            </Row>
        </Container>
    </section>
    )
}