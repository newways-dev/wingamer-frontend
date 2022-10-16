import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './layout/Layout'
import { Account, Coins, CreatePvp, Fun, Home, NotFound, Pvp } from './pages'

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
          path="/create-pvp"
          element={
            <Layout>
              <CreatePvp />
            </Layout>
          }
        />
        <Route
          path="/account"
          element={
            <Layout>
              <Account />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
