import './App.css';
import Headers from './components/Header/Headers';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <div>
      <Headers></Headers>
      <SignIn></SignIn>
      <SignUp></SignUp>
    <footer>
      <Footer></Footer>
    </footer>
    </div>
  );
};

export default App;
