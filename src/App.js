// import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App" >
      <Header />
      <AboutMe />
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
