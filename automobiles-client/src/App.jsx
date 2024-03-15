import 'app.scss';
import Header from 'components/header';
import Footer from 'components/footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from 'components/home';
import { Suspense } from 'react';
import Loading from 'components/partials/loading';

function App() {
  return (
    <div className="App container">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
