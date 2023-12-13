import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import logros2 from '../assets/img/logros academicos2.jpg'
import logros3 from '../assets/img/logros academicos3.jpg'
import logros4 from '../assets/img/logros academicos4.jpg'
import logros5 from '../assets/img/logros academicos5.jpg'
import fondo from '../assets/img/color-sharp.png'

export const Carouselc = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section id="carouselc" className="carouselc">
            <Container>
              <Row>
                <Col>
                  <div className="carouselc-bx" id="carouselc-bx">
                    <Carousel responsive={responsive} infinite={true}>
                      <div className="item"><img src={logros2} alt="image"/></div>
                      <div className="item"><img src={logros3} alt="image"/></div>
                      <div className="item"><img src={logros4} alt="image"/></div>
                      <div className="item"><img src={logros5} alt="image"/></div>
                    </Carousel>
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
      );
}