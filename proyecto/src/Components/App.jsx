import '../styles/styles.scss'
import Course from './Pages/Course.jsx'
//import Banner from '../Banner.jsx';
import Courses from './Pages/Courses.jsx';
import Form from './Pages/Form.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './Organisms/MainMenu.jsx';
import History from './Pages/History';
import Home from './Pages/Home.jsx';
import Users from './Pages/Users.jsx';


const App = () => (

    <Router>
      <MainMenu />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/formulario' component={Form} />
        <Route path='/cursos/:id' component={Course} />
        <Route path='/cursos' component={() => <Courses/>} />
        <Route path='/historial' component={History}/>
        <Route path='/usuarios' component={Users}/>
        <Route component={()=>(
          <div className='ed-grid'>
              <h1>ERROR 404</h1>
              <span>Pagina no encontrada</span>
          </div>
        )}/>
      </Switch>
    </Router>

);

export default App;
