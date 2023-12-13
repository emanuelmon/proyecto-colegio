import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import doc1 from '../assets/img/docente1.jpg'
import doc2 from '../assets/img/docente2.jpg'
import doc3 from '../assets/img/docente3.jpg'
import doc4 from '../assets/img/docente4.jpg'
import doc5 from '../assets/img/docente5.jpg'
import doc6 from '../assets/img/docente6.jpg'
import doc7 from '../assets/img/docente7.jpg'
import doc8 from '../assets/img/docente8.jpg'
import doc9 from '../assets/img/docente9.jpg'
import doc10 from '../assets/img/docente10.jpg'
import doc11 from '../assets/img/docente11.jpg'

export const CarouselI = () =>{
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
        <section id="carouseli" className="carouseli">
            <Container>
              <Row>
                <Col>
                  <div className="carouseli-bx" id="carouseli-bx">
                    <Carousel responsive={responsive} infinite={true}>
                      <div className="item"><img src={doc1} alt="image"/></div>
                      <div className="item"><img src={doc2} alt="image"/></div>
                      <div className="item"><img src={doc3} alt="image"/></div>
                      <div className="item"><img src={doc4} alt="image"/></div>
                      <div className="item"><img src={doc5} alt="image"/></div>
                      <div className="item"><img src={doc6} alt="image"/></div>
                      <div className="item"><img src={doc7} alt="image"/></div>
                      <div className="item"><img src={doc8} alt="image"/></div>
                      <div className="item"><img src={doc9} alt="image"/></div>
                      <div className="item"><img src={doc10} alt="image"/></div>
                      <div className="item"><img src={doc11} alt="image"/></div>
                    </Carousel>
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
      );
}