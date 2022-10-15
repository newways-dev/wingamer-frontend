import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './layout/Layout'
import { Coins, Fun, Home, Pvp } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/coins"
          element={
            <Layout>
              <Coins />
            </Layout>
          }
        />
        <Route
          path="/fun"
          element={
            <Layout>
              <Fun />
            </Layout>
          }
        />
        <Route
          path="/pvp"
          element={
            <Layout>
              <Pvp />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <h1>Not Found</h1>
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
