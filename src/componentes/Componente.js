import React from 'react';
import '../App.css';
import RE001 from '../imagenes/RE001.png';
import RE002 from '../imagenes/RE002.png';
import RE003 from '../imagenes/RE003.png';
import RE004 from '../imagenes/RE004.png';
import RE005 from '../imagenes/RE005.png';
import { Link } from 'react-router-dom';
const Componente = () => {
return (
    <div className="body-styling">
    <div className="componente">
        <img src={RE001} alt="Imagen 1" />
        <div className="descripcion">
        <h2 className='Subtitulos'>Talleres de Empleabilidad</h2>
        <p>Complementando tu formación académica, la USEI te apoya con el desarrollo de competencias laborales para que tengas una favorable transición al mercado laboral.</p>
        </div>
    </div>

    <div className="componente">
        <img src={RE002} alt="Imagen 2" />
        <div className="descripcion">
        <h2 className='Subtitulos'>Encuesta a tiempo de graduación</h2>
        <p>Registrate para recibir más información profesional.</p>
        </div>
    </div>

    <div className="componente">
        <img src={RE003} alt="Imagen 3" />
        <div className="descripcion">
        <h2 className='Subtitulos'>Bolsa de Trabajo</h2>
        <p>Los convenios con instituciones públicas y privadas te permiten realizar pasantías que te permitirán adquirir experiencia laboral para iniciar tu vida personal.</p>
        </div>
    </div>

    <div className="componente">
        <img src={RE004} alt="Imagen 4" />
        <div className="descripcion">
        <h2 className='Subtitulos'>Feria de Empleo</h2>
        <p>La Feria del Empleo UCB es un evento que concentra la oferta y demanda de puestos laborales, facilita el contacto entre instituciones empleadoras y personas interesadas en obtener un trabajo.</p>
        </div>
    </div>

    <div className="componente">
        <img src={RE005} alt="Imagen 5" />
        <div className="descripcion">
        <h2 className='Subtitulos'>
        <Link to="/portal-egresados" className='Subtitulos'>Alumni</Link>
        </h2>
        <p>AlumniUCB es una asociación de egresados de la Universidad Católica Boliviana, que busca mantener el vínculo entre ellos y la institución</p>
        </div>
    </div>
    </div>
);
};

export default Componente;
