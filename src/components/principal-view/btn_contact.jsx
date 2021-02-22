import React from 'react';
import { Link } from 'react-router-dom';
import PDF from '../../dowloads/curriculum.pdf';

const ButtonLink = () =>{
  return(
    <div> 
      <Link 
        to="/contact-form" 
        className="btb btn-dark btn-lg"> 
          <i className="fas fa-mug-hot"></i> Contáctame
      </Link>
        <a 
          className="btn btn-primary btn-lg m-5 " 
          href={PDF} 
          download>
            <i className="fas fa-download"></i> Descarga mi curriculum
        </a>
    </div>
  );
}
export default ButtonLink;
