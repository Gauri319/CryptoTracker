import Home from './Pages/Home';
import DashBoard from './Pages/DashBoard';
import {
  BrowserRouter as  Router,
  Route,
   Routes
} from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
