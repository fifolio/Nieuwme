import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthPage, ErrorPage, JournalPage } from '@/pages';
import { isUserLoggedin } from './lib/IsUserLoggedin';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={isUserLoggedin ? <JournalPage /> : <AuthPage path='in' />} />
        <Route path="/in" element={isUserLoggedin ? <JournalPage /> : <AuthPage path="in" />} />
        <Route path="/up" element={isUserLoggedin ? <JournalPage /> : <AuthPage path="up" />} />
        <Route path='/:random' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}
