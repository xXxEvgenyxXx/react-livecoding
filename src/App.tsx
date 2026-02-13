import MainLayout from "./layout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.scss'
import { routes } from "./routes";

function App() {

  return (
    <Router>
      <MainLayout>
        <Routes>
          {
            routes.map((route) => (
              <Route path={route.url} element={<route.component/>} />
            ))
          }
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
