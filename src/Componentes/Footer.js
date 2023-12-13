import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import fondo4 from '../assets/img/fondo4.jpg'
import s1 from '../assets/img/facebook.svg'
import s2 from '../assets/img/youtube.svg'
import s3 from '../assets/img/instagram.svg'
import s4 from '../assets/img/twitter-x.svg'

export const Footer = () =>{
    return(
        <section className="footer" id="footer">
            <img src={fondo4}/>
            <Navbar>
                <Container>
                    <Nav className='navimg'>
                    <Nav.Link href='https://www.facebook.com/AdventistaMirafloresOficial/' ><img src={s1}/></Nav.Link>
                        <Nav.Link href='https://www.youtube.com/@unidadeducativaadventistam1690'><img src={s2}/></Nav.Link>
                        <Nav.Link href='https://www.instagram.com/easudamerica/'><img src={s3}/></Nav.Link>
                        <Nav.Link href='https://twitter.com/EAsudamerica'><img src={s4}/></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </section>
    );
}