import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  AboutUs,
  Account,
  Coins,
  ContactUs,
  CreatePvp,
  FAQ,
  Fun,
  Home,
  NotFound,
  PrivacyPolicy,
  Pvp,
  TermsOfUse,
} from './pages'
import { Layout } from './layout/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
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
          path="/contact-us"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />
        <Route
          path="/terms-of-conditions"
          element={
            <Layout>
              <TermsOfUse />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
