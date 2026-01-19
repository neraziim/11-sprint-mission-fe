import { Route, Routes } from 'react-router';
import { MainPage } from './pages/main/components/MainPage/MainPage.jsx';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  );
}
