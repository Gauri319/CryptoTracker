import Home from './Pages/Home';
import DashBoard from './Pages/DashBoard';
import CoinPage from './Pages/CoinPage';
import ComparePage from './Pages/ComparePage';
import WatchListPage from './Pages/WatchListPage';
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
          <Route path="/coinpage/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchListPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
