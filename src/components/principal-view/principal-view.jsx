import {React, Fragment} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Fotografia from '../../img/foto.jpg';
import Image from 'react-bootstrap/Image';

const PrincipalView = ()=>{
  return(
    <Fragment>
      <Carousel >
        <Carousel.Item className="item">
          <Carousel.Caption>
            <Image src={Fotografia} float className="fotografic" rounded thumbnail/>
              <div className="content p-4">
                <h1 className="text-dark">¿Quién soy?</h1>
                <hr/>
                <p className="text-dark">Soy Ivan Curtiñez, estudiante boliviano y programador junior, entusiasta por aprender nuevas tecnologías y poder ayudar con mis conocimientos</p>
              </div>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="item2">
          <Carousel.Caption>
            <div className="content p-4">
              <h1 className="text-dark">¿A qué me dedico?</h1>
              <hr/>
              <p className="text-dark">Me dedico a la creación de páginas web profesionales, viendo tanto el Frontend como el Backend, apasionado por mi trabajo, ofreciendo total dedicación y calidad a cada proyecto.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="item3">
          <Carousel.Caption>
            <div className="content p-4">
              <h1 className="text-dark">Mejora constante</h1>
              <hr/>
              <p className="text-dark">A medida que pasan los dias voy adquiriendo nuevos conocimientos, siendo autodidacta y centrandome en conocer mas sobre la programacion</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}
export default PrincipalView;
