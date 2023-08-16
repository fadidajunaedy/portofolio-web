import './App.css'
import Header from './components/Header';
import About from './pages/About'
import Home from './pages/Home';
import Project from './pages/Project'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About headerTitle={"about"} />} />
        <Route path='/project' element={<Project headerTitle={"projects"} pagination={99} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;