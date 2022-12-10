import Header from './components/Header.js';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage.js';
import BooksListPage from './pages/BooksListPage.js';
import EventsPage from './pages/EventsPage.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='books' element={<BooksListPage />} />
        <Route path='events' element={<EventsPage />} />
      </Routes>
    </div>
  );
}

export default App;