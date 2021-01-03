import '../src/styles/styles.scss';
import Curso from './Curso.jsx'

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt='img' src="https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Curso React</p>
        <p> Subtítulo </p>
        <a href="https://ed.team" className="button">suscribirse</a>
      </div>
    </div>
  </div>
</div>

<div className='ed-grid m-grid-3'>
  <Curso tittle='React Desde Cero' image='https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg' price='50usd' profesor='Beto Quieroga'/>
  <Curso tittle='React Desde Cero 2' image='https://edteam-media.s3.amazonaws.com/courses/small/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png' price='60usd' profesor='Alvaro Rodriguez'/>
  <Curso tittle='React Desde Cero 3' image='https://edteam-media.s3.amazonaws.com/courses/small/4ff27f76-96a9-44ab-bb7f-ed0e17263e7c.png' price='70usd' profesor='Gustavo Segovia'/>
  <Curso />
  <Curso />
  <Curso />
</div>
  </>
);

export default App;
