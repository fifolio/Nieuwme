import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, JournalPage } from '@/pages';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/journal' element={<JournalPage />} />
      </Routes>
    </Router>
  )
}
