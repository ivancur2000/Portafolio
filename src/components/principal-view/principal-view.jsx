import {React, Fragment} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Work from '../../img/work-731198_1280.jpg';
import Code from '../../img/code-1076536_1280.jpg';
import Coffee from '../../img/coffee-2714970_1280.jpg';
import Fotografia from '../../img/foto.jpg';
import Image from 'react-bootstrap/Image'

const PrincipalView = ()=>{
  return(
    <Fragment>
      <Carousel >
        <Carousel.Item>
          <Image
            src={Work}
            height={579}
            width={1400}
          />
          <Carousel.Caption>
            <Image src={Fotografia}  />
            <div className="badge badge-dark">
              <h1>¿Quién soy?</h1>
              <p>Soy Ivan Curtiñez, estudiante boliviano y programador junior, entusiasta por aprender nuevas tecnologías y poder ayudar con mis conocimientos</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={Code}
            alt="Code"
            width={1400}
            height={579}
          />
          <Carousel.Caption>
            <div className="badge badge-dark">
              <h1>¿A qué me dedico?</h1>
              <p>Me dedico a la creación de páginas web profesionales, viendo tanto el Frontend como el Backend, apasionado por mi trabajo, ofreciendo total dedicación y calidad a cada proyecto.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={Coffee}
            width={1400}
            height={579}
          />
          <Carousel.Caption>
            <h1>Mejora constante</h1>
            <p>A medida que pasan los dias voy adquiriendo nuevos conocimientos, siendo autodidacta y centrandome en conocer mas sobre la programacion</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}
export default PrincipalView;
