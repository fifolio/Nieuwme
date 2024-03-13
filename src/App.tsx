import { useEffect, useState } from 'react';
import { account } from './backend/appwrite/config';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthPage, ErrorPage, JournalPage } from '@/pages';
// Store
import { useStore_CheckSessionState } from './stores/useStore_CheckSessionState';
// UI
import Loading from './components/ui/loading/Loading';


export default function App() {

  // Loading state
  const [loadingState, setLoadingState] = useState<boolean>(true);

  // Check the state of the session, valid or not
  const { CheckSessionState, setCheckSessionState } = useStore_CheckSessionState();

  async function checkTheSessionStateFunc() {
    await account.getSession('current').then((res) => {
      setCheckSessionState(true);
      setLoadingState(false);
      console.log('Check Done: ', res)
    }).catch((error) => {
      setCheckSessionState(false);
      setLoadingState(false);
      console.log('Check Done: ', error)
    });
  }

  useEffect(() => {
    checkTheSessionStateFunc();
  }, [CheckSessionState])



  return (
    <Router>
      {loadingState ?
        (
          <Loading />
        ) : (
          <Routes>
            {CheckSessionState ? (
              <>
                <Route index path="/" element={<JournalPage />} />
                <Route path="/in" element={<Navigate to="/" />} />
                <Route path="/up" element={<Navigate to="/" />} />
                <Route path='/:random' element={<ErrorPage />} />
              </>
            ) : (
              <>
                <Route index path='/in' element={<AuthPage path="/in" />} />
                <Route path='/' element={<AuthPage path="/in" />} />
                <Route path="/up" element={<AuthPage path="/up" />} />
                <Route path='/:random' element={<ErrorPage />} />
              </>
            )}
          </Routes>
        )}
    </Router>
  );
}