import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import jQuery from 'jquery';
import Navbar from './hackathon/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from './hackathon/Movie';
import SearchHistory from './hackathon/SearchHistory'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route exact path='/' element={<Movie />}></Route>
          </Route>
          <Route>
            <Route exact path='/history' element={<SearchHistory />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
