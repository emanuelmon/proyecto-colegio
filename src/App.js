import logo from './logo.svg';
import './App.css';
import { Baner } from './Componentes/Baner';
import { NavBar } from './Componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Cuerpo } from './Componentes/Cuerpo';
import { Carouselc } from './Componentes/Carouselc';
import { Institucional } from './Componentes/Institucional';
import { Vida } from './Componentes/Vida';
import { Niveles } from './Componentes/Niveles';
import {Extracurricular} from './Componentes/Extracurricular'
import { Ubicacion } from './Componentes/Ubicacion';
import { Recorrido } from './Componentes/Recorrido';
import { Red } from './Componentes/Red';
import { Footer } from './Componentes/Footer';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Baner></Baner>
      <br></br><br></br><br></br><hr/><h1 id='h11'>Novedades</h1><hr/>
      <Cuerpo></Cuerpo>
      <Carouselc></Carouselc>
      <br/><hr/><h1>Institucional</h1><hr/><br/>
      <Institucional></Institucional>
      <Vida></Vida>
      <Extracurricular></Extracurricular><br/><hr/>
      <Ubicacion></Ubicacion>
      <Niveles></Niveles>
      <Recorrido></Recorrido>
      <Red></Red>
      <Footer></Footer>
    </div>
  );
}

export default App;