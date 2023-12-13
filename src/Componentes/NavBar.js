import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo colAd.png'

import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
export const NavBar = () =>{

  const[scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home')

  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true);
      }
      else{
        setScrolled(true);
      }
    }
    window.addEventListener("scroll",onScroll);
    return ()=>window.removeEventListener("scroll",onScroll);
  },[])

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
  }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt='logo' onClick={()=> onUpdateActiveLink('home')}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <span className='navbar-toggles.icon'></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>PRINCIPAL</Nav.Link>
            <Nav.Link href="#institucional" className={activeLink === 'institucional' ? 'active navbar' : 'navbar-link'} onClick={()=> onUpdateActiveLink('institucional')}>INSTITUCIONAL</Nav.Link>
            <Nav.Link href="#vida" className={activeLink === 'vida' ? 'active navbar' : 'navbar-link'} onClick={()=> onUpdateActiveLink('vida')}>VIDA ESTUDIANTIL</Nav.Link>
            <Nav.Link href="#extracurricular" className={activeLink === 'extracurricular' ? 'active navbar' : 'navbar-link'} onClick={()=> onUpdateActiveLink('extracurricular')}>EXTRACURRICULARES</Nav.Link>
            <Nav.Link href="#recorrido" className={activeLink === 'recorrido' ? 'active navbar' : 'navbar-link'} onClick={()=> onUpdateActiveLink('recorrido')}>RECORRIDO VIRTUAL</Nav.Link>
            <Nav.Link href="#ubicacion" className={activeLink === 'ubicacion' ? 'active navbar' : 'navbar-link'} onClick={()=> onUpdateActiveLink('ubicacion')}>UBICACIÓN</Nav.Link>
            <Nav.Link href="#niveles" className={activeLink === 'niveles' ? 'active navbar' : 'navbar-link'} onClick={()=> onUpdateActiveLink('niveles')}>NIVELES ACADÉMICOS</Nav.Link>
            <Nav.Link href="#red" className={activeLink === 'red' ? 'active navbar' : 'navbar-link'} onClick={()=> onUpdateActiveLink('red')}>RED ADVENTISTA</Nav.Link>
            <Nav.Link href="#acerca" className={activeLink === 'acerca' ? 'active navbar' : 'navbar-link'} onClick={()=> onUpdateActiveLink('acerca')}>ACERCA DE</Nav.Link>
            <Nav.Link href="#contacto" className={activeLink === 'contacto' ? 'active navbar' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contacto')}>CONTACTO</Nav.Link>
          </Nav>
          <span className='navbar-text'>
	        <button className='vvd' onClick={()=>console.log('Conectado')}><span>Registro</span></button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}