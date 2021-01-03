import '../src/styles/styles.scss';
import Curso from './Curso.jsx'

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt='img' src="https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Curso React</p>
        <p> Subtítulo </p>
        <a href="https://ed.team" className="button">suscribirse</a>
      </div>
    </div>
  </div>
</div>
<div className='ed-grid m-grid-3'>
  <Curso />
  <Curso />
  <Curso />
</div>
  </>
);

export default App;
