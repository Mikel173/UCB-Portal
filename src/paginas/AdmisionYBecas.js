import React from 'react';
import NavbarComponent from '../componentes/Navbar';
import ImagePanel from '../componentes/ImagePanel/ImagePanel';
import '../App.css';


const estiloContenedor = {
  textAlign: 'left', // Alinea el texto a la izquierda
  fontFamily: 'Roboto, sans-serif', // Fuente para los párrafos
  color: '#666666', // Color de los párrafos
  marginLeft: '20px', // Margen izquierdo de 20px
  marginRight: '20px', // Margen derecho de 20px
  width: '70%', // Ancho del contenedor para centrar
  margin: '0 auto', // Centra el contenedor en la página
};

const estiloEncabezado = {
  fontFamily: 'Oswald, sans-serif', // Fuente para los encabezados
  color: '#004277', // Color de los encabezados
};

const AdmisionYBecas = () => {
  return (
    <div>
      {/* <NavbarComponent className="navbar" /> */}
      <ImagePanel title="Admision y Becas"/>

      <div style={estiloContenedor}>
        <h2 style={estiloEncabezado}>BECAS PARA ESTUDIANTES REGULARES</h2>
        <p>La Sede La Paz de la Universidad Católica Boliviana "San Pablo" convoca a los estudiantes interesados en presentar su postulación para el semestre 1-2024 a alguna de las becas ofertadas.</p>
      </div>

      <div style={estiloContenedor}>
        <h4 style={estiloEncabezado}><strong>Requisitos generales para postular a las becas</strong></h4>
        <p>Para postular a alguna de las becas detalladas, además de los requisitos específicos para cada tipo de beca, los requisitos generales que el estudiante debe cumplir son:</p>
        <ul>
          <li>Ser estudiante regular y estar inscrito en el semestre académico para el que se solicita la beca dentro de los plazos establecidos.</li>
          <li>No tener inhabilitaciones ni reprobaciones de asignaturas en el periodo académico anterior ni haber realizado abandono total.</li>
          <li>No tener ninguna obligación económica pendiente con la Universidad.</li>
          <li>No haber culminado previamente ninguna otra carrera, en la U.C.B. u otra Universidad.</li>
          <li>Cumplir con las obligaciones establecidas para cada tipo de beca.</li>
          <li>No haber sido sancionado como consecuencia de procesos sumarios o disciplinarios por la Universidad, ni tener antecedentes públicos de conducta reprochable.</li>
        </ul>
        <p>El no cumplimiento de alguno de los requisitos generales o específicos de la beca a la cual postula inhabilita la postulación.</p>
      </div>

      <div style={estiloContenedor}>
        <h4 style={estiloEncabezado}><strong>Duración y base de cálculo de la beca</strong></h4>
        <p>La duración del beneficio de la Beca es semestral y la cobertura de la beca es sobre un máximo de 35 créditos.</p>
      </div>

      <div style={estiloContenedor}>
        <h4 style={estiloEncabezado}><strong>Plazo de postulación</strong></h4>
        <p>Las postulaciones a las becas podrán efectuarse desde el lunes 16 de octubre hasta el martes 31 de octubre del año en curso <strong>IMPOSTERGABLEMENTE.</strong></p>
      </div>

      <div style={estiloContenedor}>
        <h4>Más Información</h4>
        <p>
          <a href="mailto:becas.lpz@ucb.edu.bo" target="_blank" rel="noopener">becas.lpz@ucb.edu.bo</a><br />
          2782222 interno 2309<br />
          Horarios de atención:<br />
          De lunes a viernes de 8:30 a 16:30 hrs.
        </p>
      </div>

      <div style={estiloContenedor}>
        <a href="https://lpz.ucb.edu.bo/wp-content/uploads/2023/10/Arte-de-becas-1-2024-oct.pdf" target="_blank">Descarga el PDF Informativo</a>
      </div>

      <div style={estiloContenedor}>
        <h2 style={estiloEncabezado}>Beca Comunidad (Ex Beca Socioeconómica)</h2>
        <p>La Beca Comunidad apoya la continuidad de los estudios en la Universidad de estudiantes que demostraron buen nivel académico y que se encuentran en dificultades económicas probadas.</p>
        <p>Para postular a la beca Comunidad, el estudiante debe cumplir los siguientes requisitos específicos:</p>
        <ul>
          <li>Haber asistido al menos un semestre a la Universidad Católica Boliviana "San Pablo".</li>
          <li>Haber logrado en el último periodo semestral cursado un promedio mínimo de 60/100 puntos.</li>
        </ul>
        <p>Para obtener el formulario de postulación, el estudiante postulante deberá enviar su solicitud vía email a la dirección electrónica: <a href="mailto:becas.lpz@ucb.edu.bo">becas.lpz@ucb.edu.bo</a></p>
        <p>La solicitud de obtención de formulario deberá contener:</p>
        <ul>
          <li>Número de carnet de identidad.</li>
          <li>Nombre completo: Apellidos-Nombres.</li>
          <li>Número de Celular y su email.</li>
          <li>Carrera y semestre que cursa actualmente.</li>
          <li>Especificar si desea renovar la beca o en su caso postula por primera vez.</li>
        </ul>
      </div>

      <div style={estiloContenedor}>
        <h2 style={estiloEncabezado}>Beca para Personas con Discapacidad</h2>
        <p>Esta beca tiene el propósito de ayudar a la consecución de los objetivos de profesionalización de personas con discapacidad permanente grave.</p>
        <p>Además de cumplir con los requisitos generales, para la postulación el estudiante deberá presentar la respectiva certificación de su situación de discapacidad emitida por la institución competente de acuerdo a Ley.</p>
        <p>El estudiante deberá enviar su solicitud de postulación para la beca respectiva al email <a href="mailto:becas.lpz@ucb.edu.bo">becas.lpz@ucb.edu.bo</a> en la cual se consigne:</p>
        <ul>
          <li>Número de carnet de identidad.</li>
          <li>Nombre completo: Apellidos-Nombres.</li>
          <li>Número de Celular y su email.</li>
          <li>Carrera y semestre que cursa actualmente.</li>
          <li>Especificar si desea renovar la beca o en su caso postula por primera vez.</li>
        </ul>
      </div>

      <div style={estiloContenedor}>
        <h2 style={estiloEncabezado}>Beca para Religiosos de la Iglesia Católica</h2>
        <p>Con esta beca se busca promover la profesionalización de religiosos y del clero diocesano de la Iglesia Católica en el país.</p>
        <p>El estudiante deberá enviar su solicitud de postulación para la beca al email <a href="mailto:becas.lpz@ucb.edu.bo">becas.lpz@ucb.edu.bo</a> en el cual consigne:</p>
        <ul>
          <li>Número de carnet de identidad.</li>
          <li>Nombre completo: Apellidos-Nombres.</li>
          <li>Número de Celular y su email.</li>
          <li>Carrera y semestre que cursa actualmente.</li>
          <li>Especificar si desea renovar la beca o en su caso postula por primera vez.</li>
          <li>Adjuntar la carta de solicitud de beca del Superior de su congregación.</li>
        </ul>
      </div>

      <div style={estiloContenedor}>
        <h2 style={estiloEncabezado}>Beca Excelencia Académica</h2>
        <p>Cada semestre se otorga una beca a los mejores promedio académicos de cada carrera en la universidad. <strong>No requiere postulación</strong> ya que la U.C.B. se contacta con los estudiantes meritorios de la beca.</p>
        <p><strong>Requisito</strong></p>
        <ul>
          <li>Tener el mejor promedio del semestre en la carrera.</li>
        </ul>
      </div>

      <div style={estiloContenedor}>
        <h2 style={estiloEncabezado}>Beca Cultural y Deportiva</h2>
        <p>Se otorga a estudiantes que han cursado al menos un semestre en la U.C.B. e integran uno de los talleres culturales o equipos deportivos.</p>
        <p><strong>Requisitos</strong></p>
        <ul>
          <li>Ser parte de un taller cultural o un equipo deportivo.</li>
          <li>Haber aprobado el semestre previo.</li>
          <li>Presentarse a la convocatoria del taller o deporte.</li>
        </ul>
      </div>
    </div>
  );
}

export default AdmisionYBecas;
