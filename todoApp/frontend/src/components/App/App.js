import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import {Auth, Login,Register,Todo} from '../pages'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Todo' element={<Auth Component={Todo} />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
