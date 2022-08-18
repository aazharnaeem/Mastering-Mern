import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Blogs, Home, Login, N_404, Register } from '../pages';
import Layout from '../layout';
function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='*' element ={<N_404/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
