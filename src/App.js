import GlobalStyle from './components/GlobalStyle';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import Page404 from './pages/Page404';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nuevovideo' element={<NuevoVideo/>} />
        <Route path='*' element={<Page404/>} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
