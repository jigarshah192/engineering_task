import './App.css'
import ApplicationsList from './pages/applicationList';
import ApplicationPage from './pages/applicationPage';
import ResourcesList from './pages/resourcesList';
import ResourcesPage from './pages/resourcesPage';
import ResponsiveDrawer from './components/sideDrawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveDrawer>
          <Routes>
            <Route
              path="/" element={<ApplicationsList />}
            />
            <Route
              path="/application/:id" element={<ApplicationPage />}
            />
            <Route
              path="/resources" element={<ResourcesList />}
            />
            <Route
              path="/resources/:id" element={<ResourcesPage />}
            />
          </Routes>
        </ResponsiveDrawer>
      </BrowserRouter>
    </>
  )
}

export default App
