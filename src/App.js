// import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}>
      <Header />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
