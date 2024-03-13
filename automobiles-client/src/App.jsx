import 'app.scss';
import Header from 'components/header';
import Footer from 'components/footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from 'components/home';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
