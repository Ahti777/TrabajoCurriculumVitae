// Importamos los estilos del CV. Vite los incluye automáticamente en la página.
import './App.css'
// Importamos la imagen de mi perfil.
import foto from './assets/_MG_6930.JPG'

/* App es un componente de React: una función cuyo nombre empieza en mayúscula
y que devuelve JSX. JSX es una sintaxis parecida a HTML escrita dentro de JavaScript.
Este componente principal contiene todo el CV.*/
function App() {
  return (
    /* En JSX se usa className en vez de class, porque class es una palabra reservada de JavaScript.
    Un componente solo puede devolver un elemento raíz: por eso todo va dentro de este <div>. */
    <div className="contenedor-principal">
      {/* En JSX los comentarios van entre llaves. Las llaves también permiten insertar JavaScript. */}

      {/* HEADER: cabecera con degradado, foto de perfil, nombre, título profesional y datos de contacto */}
      <div className="header">
        <img
          src={foto}
          alt="Mi foto"
          className="foto-perfil"
        />
        <div className="headerContent">
          <h1>Artem Zimin Litvak</h1>
          <h2>Ingeniero de Datos</h2>
          <p>📧 artem4444@gmail.com | 📱 600 123 456 | 📍 Zaragoza, España</p>
        </div>
      </div>

      {/* BODY: contenido principal dividido en dos columnas (lateral 35% y principal 65%) */}
      <div className='body'>

        {/* COLUMNA LATERAL: información personal y complementaria */}
        <div className='lateralSeccion'>

          {/* SOBRE MÍ: descripción breve del perfil profesional */}
          <div className="seccion">
            <h2 className="titulo-seccion">Sobre Mí</h2>
            <p>
              Ingeniero de datos con pasión por la programación. Diseño pipelines
              fiables y paneles claros que ayudan a tomar mejores decisiones.
            </p>
          </div>

          {/* HABILIDADES: cada tecnología muestra su nombre, su porcentaje y una barra de progreso.
              El valor de <progress> (value) debe coincidir con el porcentaje del texto. */}
          <div className="seccion">
            <h2 className="titulo-seccion">Habilidades</h2>
            <div className="lista-habilidades">
              <div className="habilidad">
                <div className='textHabilidad'>
                  <p>Python</p>
                  <p>90%</p>
                </div>
                <progress className="barraHabilidades" value="90" max="100">90%</progress>
              </div>
              <div className="habilidad">
                <div className='textHabilidad'>
                  <p>SQL</p>
                  <p>85%</p>
                </div>
                <progress className="barraHabilidades" value="85" max="100">85%</progress>
              </div>
              <div className="habilidad">
                <div className='textHabilidad'>
                  <p>React</p>
                  <p>70%</p>
                </div>
                <progress className="barraHabilidades" value="70" max="100">70%</progress>
              </div>
              <div className="habilidad">
                <div className='textHabilidad'>
                  <p>.NET</p>
                  <p>99%</p>
                </div>
                <progress className="barraHabilidades" value="99" max="100">99%</progress>
              </div>
            </div>
          </div>

          {/* IDIOMAS: cada idioma con su nivel, en una etiqueta con la clase "nivel" */}
          <div className='seccion'>
            <h2 className="titulo-seccion">Idiomas</h2>
            <div className="lista-idiomas">
              <div className='idioma'>
                <p>Español</p>
                <p className='nivel'>Nativo</p>
              </div>
              <div className='idioma'>
                <p>Inglés</p>
                <p className='nivel'>Avanzado</p>
              </div>
              <div className='idioma'>
                <p>Francés</p>
                <p className='nivel'>Básico</p>
              </div>
            </div>
          </div>

          {/* CERTIFICACIONES: títulos obtenidos, mostrados como etiquetas */}
          <div className='seccion'>
            <h2 className="titulo-seccion">Certificaciones</h2>
            <div className="lista-certificaciones">
              <p className='certificacion'>AWS Certified Data Engineer</p>
              <p className='certificacion'>Google Cloud Professional Data Engineer</p>
            </div>
          </div>
        </div>

        {/* COLUMNA PRINCIPAL: trayectoria profesional y formativa */}
        <div className='principalSeccion'>

          {/* EXPERIENCIA: cada trabajo tiene puesto, periodo, empresa y descripción.
              El puesto y el periodo van en una fila (titulo-experiencia). */}
          <div className="seccion">
            <h2 className="titulo-seccion">Experiencia</h2>
            <div className="item-experiencia">
              <div className='titulo-experiencia'>
                <h3>Ingeniero de Datos</h3>
                <p className="periodo">2023 - Actualidad</p>
              </div>
              <p className="empresa">DataTech Solutions</p>
              <p>Diseñé pipelines ETL con Python y Airflow que redujeron un 40% el tiempo de procesamiento diario.</p>
            </div>
            <div className="item-experiencia">
              <div className='titulo-experiencia'>
                <h3>Analista de Datos</h3>
                <p className="periodo">2021 - 2023</p>
              </div>
              <p className="empresa">Analytics Group</p>
              <p>Creé dashboards en Power BI y consultas SQL para el equipo comercial.</p>
            </div>
          </div>

          {/* PROYECTOS DESTACADOS: tarjetas con el nombre del proyecto y las tecnologías usadas */}
          <div className="seccion">
            <h2 className="titulo-seccion">Proyectos Destacados</h2>
            <div className='lista-proyectos'>

              <div className="item-proyecto">
                <h3>Pipeline de Ventas</h3>
                <p className="empresa">Python · Airflow · PostgreSQL</p>
              </div>

              <div className="item-proyecto">
                <h3>Panel de Métricas en Tiempo Real</h3>
                <p className="empresa">React · Node.js · Chart.js</p>
              </div>
            </div>
          </div>

          {/* EDUCACIÓN: título obtenido, centro educativo y años */}
          <div className="seccion">
            <h2 className="titulo-seccion">Educación</h2>

            <div className="item-educacion">
              <h3>Grado en Ingeniería Informática</h3>
              <p className="escuela">Universidad Politécnica</p>
              <p className="periodo">2017 - 2021</p>
            </div>
          </div>

          {/* ESTADÍSTICAS: resumen en cifras sobre un fondo con degradado.
              Cada estadística es un número grande y una etiqueta debajo. */}
          <div className="seccion estadisticas">
            <h2 className="titulo-estadisticas">Estadísticas</h2>
            <div className="lista-estadisticas">
              <div className="estadistica">
                <p className="estadistica-numero">4+</p>
                <p className="estadistica-texto">Años Exp.</p>
              </div>
              <div className="estadistica">
                <p className="estadistica-numero">30+</p>
                <p className="estadistica-texto">Proyectos</p>
              </div>
              <div className="estadistica">
                <p className="estadistica-numero">12+</p>
                <p className="estadistica-texto">Tecnologías</p>
              </div>
              <div className="estadistica">
                <p className="estadistica-numero">100%</p>
                <p className="estadistica-texto">Dedicación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportamos App para poder importarla en main.jsx.
export default App
